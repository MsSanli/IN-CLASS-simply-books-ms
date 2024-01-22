import React from 'react';
import { useAuth } from '../utils/context/authContext';

export default function UserProf() {
  const { user } = useAuth();
  console.warn('user', user);
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    }}
    >
      <img src={user.photoURL} className="profile-img" alt={user.displayName} style={{ width: '100px', height: '100px' }} />;
      <h1>{user.displayName}</h1>
      {/* make the email clickable */}
      <a href={`mailto:${'marisanli.93@gmail.com'}`}><h4>marisanli.93@gmail.com</h4></a>
    </div>
  );
}
