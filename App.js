import React from 'react';
import Routes from './navigation/index';

import { AuthenticatedUserProvider } from './contexts/AuthenticatedUserProvider';


export default function App() {
  console.log('App')
  return (
    <AuthenticatedUserProvider>
      <Routes />
    </AuthenticatedUserProvider>
  );
}
