import React, { useState, useContext, useEffect } from "react";

import ContactContext from "../../context/contact/contactContext";

const Form = () => {
  const { addContact, updateContact, current, clearCurrent } =
    useContext(ContactContext);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  useEffect(() => {
    if (current !== null) setContact(current);
    else setContact({ name: "", email: "", phone: "", type: "personal" });
  }, [current]);

  const { name, email, phone, type } = contact;

  const onChange = ({ target }) => {
    setContact({ ...contact, [target.name]: target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) addContact(contact);
    else updateContact(contact);

    setContact({ name: "", email: "", phone: "", type: "personal" });
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        onChange={onChange}
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={onChange}
      />
      <input
        type="text"
        name="phone"
        value={phone}
        placeholder="Phone"
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        id="personal"
        type="radio"
        name="type"
        value="personal"
        checked={"personal" === type}
        onChange={onChange}
        required
      />
      <label htmlFor="personal" className="m">
        Personal
      </label>
      <input
        id="professional"
        type="radio"
        name="type"
        value="professional"
        checked={"professional" === type}
        onChange={onChange}
        required
      />
      <label htmlFor="professional" className="m">
        Professional
      </label>
      <input
        type="submit"
        value={current ? "Update Contact" : "Add Contact"}
        className="btn btn-primary btn-block"
      />
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>{" "}
        </div>
      )}
    </form>
  );
};

export default Form;
