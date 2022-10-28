// import { useState } from "react";

const DetailEnquiryForm = (props) => {
  // const [closeContactForm, setCloseContactForm] = useState(false);

  // const onCloseHandler = (closeContactForm) => {
  //   closeContactForm ? setCloseContactForm(false) : setCloseContactForm(true);
  //   closeContactForm ? props.onOpen(false) : props.onOpen(true);
  // };

  return (
    <div className="floating-form detail_enquiry">
      <form>
        <div className="form-head">
          <div className="icon"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 19.466v3.914a2.604 2.604 0 0 1-.848 1.933 2.616 2.616 0 0 1-2.003.676 25.903 25.903 0 0 1-11.281-4.005 25.465 25.465 0 0 1-7.844-7.828A25.786 25.786 0 0 1 .01 2.844 2.605 2.605 0 0 1 1.558.223 2.619 2.619 0 0 1 2.612 0h3.922a2.618 2.618 0 0 1 2.614 2.244c.166 1.253.473 2.483.915 3.666a2.604 2.604 0 0 1-.588 2.753l-1.66 1.657a20.896 20.896 0 0 0 7.844 7.828l1.66-1.657a2.616 2.616 0 0 1 2.758-.587c1.186.442 2.419.748 3.674.913a2.615 2.615 0 0 1 2.248 2.649Z" fill="#E7B554"/></svg></div>
          <h4>Request Call back from our property expert</h4>
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
            <button type="submit" className="theme-btn btn-full">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DetailEnquiryForm;
