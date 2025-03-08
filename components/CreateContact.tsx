import React from 'react';
import { Button, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { CreateContactModel } from '../lib/models/contact';
import { createContact } from '../lib/services/contact-service';

export default function CreateContact() {
  const [firstName, onChangeFirstName] = React.useState('');
  const [lastName, onChangeLastName] = React.useState('');

  const makeContact = async () => {
    const contactDetails: CreateContactModel = {
      firstName,
      lastName,
    };
    console.log(contactDetails)

    await createContact(contactDetails);
  }

  return (
    <View>
      <h1>Create Contact</h1>

      <SafeAreaProvider>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={onChangeFirstName}
            placeholder="Juanita"
            value={firstName}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeLastName}
            placeholder="Marques"
            value={lastName}
          />
          <Button
            onPress={makeContact}
            title="Create Contact"
            disabled={!firstName && !lastName}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
