import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ContactModel } from '../lib/models/contact'
import CreateContact from './CreateContact'
import Contact from './Contact'

export interface ContactListProps {
  contacts: ContactModel[]
}

/**
 * Stateless
 * @returns 
 */
export default function ContactsList(props: ContactListProps) {
  const noContactsMessage = 'No contacts found! Create one?';
  return (
    <View style={styles.container}>
      {
        !props.contacts || !props.contacts.length
          ? <View>
              <Text>{noContactsMessage}</Text>
              <CreateContact />
            </View>
          : <div>
            {
              props.contacts.map(contact => {
                return <Contact
                  firstName={contact.firstName}
                  lastName={contact.lastName}>
                </Contact>
              })
            }
          </div>
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
})
