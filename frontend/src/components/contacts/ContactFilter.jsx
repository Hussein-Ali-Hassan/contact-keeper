import React, { useContext, useEffect, useRef } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const { filtered, filterContacts, clearFilter } = useContext(ContactContext);
  const text = useRef();

  useEffect(() => {
    if (filtered === null) text.current.value = null;
  });

  const onChange = ({ target }) => {
    if (text.current.value !== "") filterContacts(target.value);
    else clearFilter();
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
