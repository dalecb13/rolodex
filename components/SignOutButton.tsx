import { Button } from "@rneui/themed";
import { supabase } from "../lib/supabase";
import { showToast } from "../lib/notifications";
import { router } from "expo-router";

export default function SignOutButton() {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.warn('Error signing out', error)
    }

    showToast('Logged out');
    router.push('/sign-in');
  }

  return (
    <Button
      title="Outline"
      type="outline"
      onPress={handleSignOut}
    >
      Log Out
    </Button>
  )
}
