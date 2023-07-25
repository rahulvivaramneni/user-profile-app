import React, { useState, useEffect } from "react";
import UserProfileCard from "./UserProfileCard";
import axios from "axios";
import Snackbar from "./Snackbar";

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showSnackbar, setShowSnackbar] = useState(false);

  // initially display the first 3 users cards. 
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data.slice(0, 3));
    });
  }, []);

  const handleAddUser = () => {
    // show the snackbar message when number of user count reach 10
    if (users.length >= 10) {
      setShowSnackbar(true);
      return;
    }

    // fetch the next user from the API and add it to the list
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${users.length + 1}`)
      .then((response) => {
        setUsers((prevUsers) => [...prevUsers, response.data]);
      });
  };

  const handleRemoveUser = (id: number) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const closeSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <div>
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id}>
            <UserProfileCard
              id={user.id}
              name={user.name}
              email={user.email}
              city={user.address.city}
              numOfUsers={users.length}
              onClose={handleRemoveUser}
            />
          </div>
        ))}
      </div>
      <button className="add-button" onClick={handleAddUser}>
        Add User
      </button>

      {showSnackbar && (
        <Snackbar message="We don't have any more users!" onClose={closeSnackbar} />
      )}
    </div>
  );
};

export default UserList;
