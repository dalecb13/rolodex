import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'

export type Contact = {
  firstName: string
  lastName: string
}

export interface ContactListProps {
  contacts: Contact[]
}

/**
 * Stateless
 * @returns 
 */
export default function ContactsList(props: ContactListProps) {
  return (
    <View style={styles.container}>
      {
        !props.contacts
          ? <p>No contacts found. Create one?</p>
          : <div>
            {
              props.contacts.map(contact => {
                return <div>
                  <p>{contact.firstName}</p>
                  <p>{contact.lastName}</p>
                </div>
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
