export interface ContactListItem {
  id: number;
  name: string;
  phone: string;
  email: string;
  photo: string;
  photoPreview: string;
}

export type ContactList = Omit<ContactListItem, 'id'>;
