import { useEffect, useState } from 'react';
import { View } from 'react-native';
import ContactsList from '../../components/ContactsList';

export const unstable_settings = {
  initialRouteName: '(root)',
};

export default function HomePage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    
  })

  return (
    <View>
      <h1>Contacts</h1>
      <ContactsList contacts={contacts} />
    </View>
  );
}
