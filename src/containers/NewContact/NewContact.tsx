import React, {useEffect, useState} from "react";
import {ContactListItem} from "../../types";
import {useAppDispatch} from "../../app/ hooks";
import {bookfetchData} from "../../store/bookThunks";
import {useNavigate} from "react-router-dom";

const NewContact = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [contactList, setContactList] = useState<ContactListItem>({
    id: Math.random(),
    name: '',
    phone: '',
    email: '',
    photo: '',
    photoPreview: '',
  });

  useEffect(() => {
    if (contactList.photo === '') {
      setContactList((prev) => ({
        ...prev,
        photoPreview: 'https://png.pngtree.com/element_our/20190530/ourlarge/pngtree-cartoon-contact-icon-download-image_1251409.jpg',
      }));
    } else {
      setContactList((prev) => ({
        ...prev,
        photoPreview: contactList.photo,
      }));
    }
  }, [contactList.photo]);

  const changeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactList((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  };
  const BackToContacts = () => {
    navigate('/');
  };

  const sendData = (e:React.FormEvent) => {
    e.preventDefault();

    dispatch(bookfetchData(contactList));
    setContactList({
      id: Math.random(),
      name: '',
      phone: '',
      email: '',
      photo: '',
      photoPreview: '',
    });
  };

  return (
    <form className="card my-4 p-3" onSubmit={sendData}>
      <h4>Add new contact</h4>
      <div className="form-group my-2 d-flex align-items-center">
        <label style={{width: "140px"}} htmlFor="name">Name: </label>
        <input
          type="text" name="name" required
          className="form-control w-50"
          value={contactList.name}
          onChange={changeData}
        />
      </div>
      <div className="form-group my-2 d-flex align-items-center">
        <label style={{width: "140px"}} htmlFor="phone">Phone: </label>
        <input
          type="tel" name="phone" required
          className="form-control w-50"
          autoComplete='name'
          value={contactList.phone}
          onChange={changeData}
        />
      </div>
      <div className="form-group my-2 d-flex align-items-center">
        <label style={{width: "140px"}} htmlFor="email">Email: </label>
        <input
          type="email" name="email" required
          className="form-control w-50"
          autoComplete='email'
          value={contactList.email}
          onChange={changeData}
        />
      </div>
      <div className="form-group my-2 d-flex align-items-center">
        <label style={{width: "140px"}} htmlFor="photo">Photo: </label>
        <input
          type="url" name="photo"
          className="form-control w-50"
          autoComplete='photo'
          value={contactList.photo}
          onChange={changeData}
        />
      </div>
      <div className="form-group my-2 d-flex align-items-center">
        <label style={{width: "140px"}} htmlFor="photoPreview">Photo preview: </label>
        <img style={{ width: "100px" }} src={contactList.photoPreview} alt="photo" />
      </div>
     <div className="form-group my-2 d-flex align-items-center">
       <button type="submit" className="btn btn-primary me-5">
         Save
       </button>
       <button onClick={BackToContacts} type="submit" className="btn btn-primary">
         Back to contacts
       </button>
     </div>
    </form>
  );
};

export default NewContact;