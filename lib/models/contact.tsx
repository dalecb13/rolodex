export type ContactModel = {
  firstName: string
  lastName: string
}

export type CreateContactModel = {
  firstName: string
  lastName: string
  middleName?: string
  suffix?: string
}
