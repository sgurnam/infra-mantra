import { useState } from "react";

const FloatingContactForm = (props) => {
  const [closeContactForm, setCloseContactForm] = useState(false);

  const onCloseHandler = (closeContactForm) => {
    closeContactForm ? setCloseContactForm(false) : setCloseContactForm(true);
    closeContactForm ? props.onOpen(false) : props.onOpen(true);
  };

  return (
    <div className="floating-form">
      <form>
        <div className="form-head">
          <h3>Contact Us</h3>
          <p>
            Fill the details below and we will get in touch with you within 24
            hours.
          </p>

          <div className="close-btn" onClick={onCloseHandler}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M11 1L1 11"
                stroke="#E7B554"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1L11 11"
                stroke="#E7B554"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="form-area">
          <div className="form-group">
            <label htmlFor="full_name">Full Name</label>
            <input type="text" name="full_name" />
          </div>
          <div className="form-group">
            <label htmlFor="number">Phone</label>
            <div className="number-field">
              <div className="label-91">+91</div>
              <input type="number" name="number" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="messsage">Messsage</label>
            <textarea type="email" name="messsage" rows="5"></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="theme-btn btn-full">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FloatingContactForm;
