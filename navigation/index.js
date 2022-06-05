import React from 'react';

// import { AuthenticatedUserProvider } from '../contexts/AuthenticatedUserProvider';
import RootNavigator from './RootNavigator';

/**
 * Wrap all providers here
 */

export default function Routes() {
  console.log('index')
  return (
    // <AuthenticatedUserProvider>
      <RootNavigator />
    // </AuthenticatedUserProvider>
  );
}
