import React from "react";

interface UserProfileProps {
  id: number;
  name: string;
  email: string;
  city: string;
  numOfUsers:number;
  onClose: (id: number) => void;
}

const UserProfileCard: React.FC<UserProfileProps> = ({
  id,
  name,
  email,
  city,
  numOfUsers,
  onClose,
}) => {
  const showCloseIcon = numOfUsers > 3; // show close icon only when number of users is more than 3

  return (
    <div className="profile-card">
      {showCloseIcon && ( 
        <button className="close-button" onClick={() => onClose(id)}>
          &times;
        </button>
      )}
      <img
        src={`https://randomuser.me/api/portraits/men/${id}.jpg`} 
        alt={name}
      />
      <div className="profile-info">
        <h3>{name}</h3>
        <p>Email: {email}</p>
        <p>City: {city}</p>
      </div>
    </div>
  );
};

export default UserProfileCard;
