import React from 'react';
import { UserButton, useUser } from '@clerk/clerk-react';

const CustomUserButton: React.FC = () => {
  const { user } = useUser();

  const textStyle = { color: 'white' };
  const boldTextStyle = { ...textStyle, fontWeight: 'bold' };
  const smallTextStyle = { ...textStyle, fontSize: '10px' };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <UserButton afterSignOutUrl="/" />
      <div style={textStyle}>
        <div style={boldTextStyle}>{user?.fullName || user?.firstName || user?.username}</div>
        <div style={smallTextStyle}>{user?.primaryEmailAddress?.emailAddress}</div>
      </div>
    </div>
  );
};

export default CustomUserButton;
