import { useEffect, useState } from 'react';
import { View } from 'react-native';
import ContactsList from '../../components/ContactsList';
import { getAllContacts } from '../../lib/services/contact-service';
import { ContactModel } from '../../lib/models/contact';

export const unstable_settings = {
  initialRouteName: '(root)',
};

export default function HomePage() {
  const [contacts, setContacts] = useState<ContactModel[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const contactsFromServer = await getAllContacts();
      setContacts(contactsFromServer);
    }

    fetchContacts();
  }, []);

  return (
    <View>
      <h1>Contacts</h1>
      <ContactsList contacts={contacts} />
    </View>
  );
}
