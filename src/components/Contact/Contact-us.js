import React, { useEffect, useState } from "react";
import "./_contact-us.scss";

const ContactUs = () => {
  const [inputFields, setInputFields] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  })
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validateValues = (inputValues) => {
    let errors = {};
    let emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneNumberValid = /^[0-9+]{1,14}$/;

    if (inputValues.firstName.length === 0) {
      errors.firstName = "First name is required";
    }

    if (inputValues.lastName.length === 0) {
      errors.lastName = "Last name is required";
    }

    if (inputValues.phoneNumber.length === 0) {
      errors.phoneNumber = "Phone number is required";
    } else if (!phoneNumberValid.test(inputValues.phoneNumber)) {
      errors.phoneNumber = "Phone number is not valid";
    }

    if (inputValues.email.length === 0) {
      errors.email = "Email is required";
    } else if (!emailValid.test(inputValues.email)) {
      errors.email = "Email is not valid";
    }

    return errors;
  }

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  }

  const finishSubmit = () => {
    setInputFields({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
    })
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitting) {
      finishSubmit();
    }
  }, [errors]);

  return (
    <div className="customer-service-container">
      <h1>Customer Service</h1>
      <div className="customer-form-container">
        <div className="w-12 h-1 bg-black mb-8"></div>
        <form action="#" method="GET" onSubmit={handleSubmit}>
          <div className="first-last-name-container">
            <div className="first-name-container div-form-container">
              <label htmlFor="first-name">First Name*</label>
              <input type="text" id="first-name" name="firstName" value={inputFields.firstName} onChange={handleChange} placeholder="Edison" />
              {errors.firstName ? (
                <p className="error">{errors.firstName}</p>
              ) : null}
            </div>
            <div className="last-name-container div-form-container" >
              <label htmlFor="last-name">Last Name*</label>
              <input type="text" id="last-name" name="lastName" value={inputFields.lastName} onChange={handleChange} placeholder="Hoxha" />
              {errors.lastName ? (
                <p className="error">{errors.lastName}</p>
              ) : null}
            </div>
          </div>
          <div className="phone-number-container div-form-container" >
            <label htmlFor="phone-number">Phone Number*</label>
            <input type="text" id="phone-number" name="phoneNumber" value={inputFields.phoneNumber} onChange={handleChange} placeholder="0672354883" />
            {errors.phoneNumber ? (
              <p className="error">{errors.phoneNumber}</p>
            ) : null}
          </div>
          <div className="email-container div-form-container" >
            <label htmlFor="email">Email*</label>
            <input type="text" id="email" name="email" value={inputFields.email} onChange={handleChange} placeholder="edison.hoxha@gmail.com" />
            {errors.email ? (
              <p className="error">{errors.email}</p>
            ) : null}
          </div>
          <div className="message-container div-form-container" >
            <label htmlFor="message">Message</label>
            <input type="text" id="message" name="message" placeholder="Isha i interesuar per instalime ne biznesin tim..." />
          </div>
          <button>Contact</button>
        </form>
        <div className="important-information-container">
          <p>
            <b className="text-2xl">!!!</b> Please fill the form the correct way, use at least a valid phone number or email,
            <b>WE WILL NOT CONTACT</b> IF YOU GIVE A WRONG PHONE NUMBER, EMAIL or PHONE NUMBER AND EMAIL ARE INVALID.
          </p>
          <p>
            <b className="text-2xl">!!!</b> First name, Last name, Phone number and Email are <b>MANDATORY</b>, message section is optional. In message section
            you can describe or question your situation otherwise you leave it empty.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;