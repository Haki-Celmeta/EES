import React from "react";
import "./_contact-us.scss";

const ContactUs = () => {
  return (
    <div className="customer-service-container">
      <h1>Customer Service</h1>
      <div className="customer-form-container">
        <div className="w-12 h-1 bg-black mb-8"></div>
        <form action="#" method="GET">
          <div className="first-last-name-container">
            <div className="first-name-container div-form-container" aria-required>
              <label htmlFor="first-name">First Name*</label>
              <input type="text" id="first-name" name="first-name" />
            </div>
            <div className="last-name-container div-form-container" aria-required>
              <label htmlFor="last-name">Last Name*</label>
              <input type="text" id="last-name" name="last-name" />
            </div>
          </div>
          <div className="phone-number-container div-form-container" aria-required>
            <label htmlFor="phone-number">Phone Number*</label>
            <input type="text" id="phone-number" name="phone-number" />
          </div>
          <div className="email-container div-form-container" aria-required>
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="message-container div-form-container" aria-required>
            <label htmlFor="message">Message</label>
            <input type="text" id="message" name="message" />
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