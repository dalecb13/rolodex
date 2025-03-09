import { ContactModel } from "../lib/models/contact"
import { ListItem } from "@rneui/themed";

export type ContactProps = ContactModel;

export default function Contact(props: ContactProps) {
  return (
    <ListItem>
      <ListItem.Content>
        <ListItem.Title>
          {props.firstName} {props.lastName}
        </ListItem.Title>
      </ListItem.Content>
    </ListItem>
  )
}