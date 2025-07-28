import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md mb-4 bg-white">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="text-sm text-gray-600">{address.street}, {address.city}</p>
    </div>
  );
};

export default UserCard;
