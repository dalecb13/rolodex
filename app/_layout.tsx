import { Slot } from 'expo-router';
import Toast from 'react-native-toast-message';

import { SessionProvider } from '../lib/context/auth-context';
import SignOutButton from '../components/SignOutButton';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <SignOutButton />
      <Slot />
      <Toast />
    </SessionProvider>
  );
}
