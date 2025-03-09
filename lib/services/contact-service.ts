import { ContactModel, CreateContactModel } from "../models/contact";
import { showToast } from "../notifications";
import { supabase } from "../supabase"

const CONTACT_TABLE = 'contacts';

export const getAllContacts = async (): Promise<ContactModel[]> => {
  console.log('getting contacts')
  const { data, error } = await supabase
    .from(CONTACT_TABLE)
    .select()

  if (error) {
    console.warn(error)
    return [];
  }

  console.log('retrieved contacts', data)

  return data as ContactModel[];
}



export const createContact = async (contactDetails: CreateContactModel) => {
  console.log('creating contact', contactDetails)
  const { error } = await supabase
    .from(CONTACT_TABLE)
    .insert({
      first_name: contactDetails.firstName,
      last_name: contactDetails.lastName,
    });

    if (error) {
      console.warn(error)
    } else {
      showToast('Contact created!')
      await getAllContacts();
    }
}