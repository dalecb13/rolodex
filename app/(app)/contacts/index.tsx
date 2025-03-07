import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'

export default function ContactsList() {
  const [contacts, setContacts] = useState([]);

  return (
    <View style={styles.container}>
      {
        !contacts || !contacts.length
          ? <p>No contacts found. Create one?</p>
          : <p>Contacts!</p>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
});
