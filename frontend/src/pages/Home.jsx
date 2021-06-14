import React, { useContext, useEffect } from "react";

import Contacts from "../components/contacts/Contacts";
import ContactFilter from "../components/contacts/ContactFilter";
import ContactForm from "../components/contacts/ContactForm";

import AuthContext from "../context/auth/authContext";

function Home() {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
}

export default Home;
