import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  const history = useHistory();
  const handleSignOut = async (): Promise<void> => {
    // Ends user session
    await signOut();

    // Redirects the user to Login page
    history.push('/login');
  };

  return (
    <div>
      <p>Welcome, {user?.id}!</p>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default Dashboard;
