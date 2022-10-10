import Link from "next/link";
import { useState } from "react";
import FloatingContactForm from "./FloatingContactForm";

const FloatingContactBtn = (props) => {

    const [openContactForm, setOpenContactForm] = useState(false);

    const openFormHandler = (formHandler) => {
        openContactForm ? setOpenContactForm(false) : setOpenContactForm(true)
    }

  return (
    <>
      <div className="floating-contact-btn" onClick={openFormHandler}>
          <span>Contact Us</span>
      </div>
      {openContactForm && <FloatingContactForm onOpen={openFormHandler}/>}
      
    </>
  );
};

export default FloatingContactBtn;
