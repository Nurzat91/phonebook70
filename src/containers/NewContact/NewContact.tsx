
const NewContact = () => {
  return (
    <form className="card my-4 p-3">
      <h4>Add new contact</h4>
      <div className="form-group my-2 d-flex align-items-center">
        <label style={{width: "140px"}} htmlFor="name">Name: </label>
        <input
          type="text" name="name" required
          className="form-control w-50"
        />
      </div>
      <div className="form-group my-2 d-flex align-items-center">
        <label style={{width: "140px"}} htmlFor="phone">Phone: </label>
        <input
          type="tel" name="phone" required
          className="form-control w-50"
        />
      </div>
      <div className="form-group my-2 d-flex align-items-center">
        <label style={{width: "140px"}} htmlFor="email">Email: </label>
        <input
          type="email" name="email" required
          className="form-control w-50"
        />
      </div>
      <div className="form-group my-2 d-flex align-items-center">
        <label style={{width: "140px"}} htmlFor="photo">Photo: </label>
        <input
          type="url" name="photo" required
          className="form-control w-50"
        />
      </div>
      <div className="form-group my-2 d-flex align-items-center">
        <label style={{width: "140px"}} htmlFor="photo">Photo preview: </label>
        {/*<img src={}/>*/}
      </div>
     <div className="form-group my-2 d-flex align-items-center">
       <button type="submit" className="btn btn-primary me-5">
         Save
       </button>
       <button type="submit" className="btn btn-primary">
         Back to contacts
       </button>
     </div>
    </form>
  );
};

export default NewContact;