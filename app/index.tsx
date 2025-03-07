import { router } from 'expo-router';
import { Text, View } from 'react-native';

import Auth from '../components/Auth';
import { useSession } from '../lib/ctx';

export default function SplashPage() {
  const { signIn } = useSession();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Auth />
      {/* <Text
        onPress={() => {
          router.replace('/');
        }}
      >
        Sign In
      </Text> */}
    </View>
  )
}
