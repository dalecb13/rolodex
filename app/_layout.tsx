import { Slot } from 'expo-router';
import Toast from 'react-native-toast-message';

import { SessionProvider } from '../lib/auth-context';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <Slot />
      <Toast />
    </SessionProvider>
  );
}
