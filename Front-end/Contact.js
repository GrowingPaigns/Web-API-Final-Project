import React, { useState } from "react";

import Header from "../UI/header";
import Footer from "../UI/footer";
import "./Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
      <div className="page-container">
        <div className="contact-page">

          <Header />

          <div className="content-container">
            <div className="messages-container">
              <div className="message-wrapper">
                <h1>Contact Us</h1>
                <div className="message-container">
                  <p>+1(000)-000-0000</p>
                  <p>Mon-Fri; 5AM-7PM</p>
                </div>
                <div className="message-container">
                  <p>contact@mywebsite.com</p>
                  <p>Send any questions you have here or through the form on the right.</p>
                </div>
              </div>
            </div>

            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-label-container">
                  <label className="form-label">Email:</label>
                  <input
                      className="form-input"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                  />
                </div>
                <div className="form-label-container">
                  <label className="form-label">Subject:</label>
                  <input
                      className="form-input"
                      type="text"
                      value={subject}
                      onChange={handleSubjectChange}
                  />
                </div>
                <div className="form-label-container">
                  <label className="form-label">Message:</label>
                  <textarea
                      className="form-textarea"
                      value={message}
                      onChange={handleMessageChange}
                  />
                </div>
                <button type="submit" className="form-button">
                  Submit
                </button>
              </form>
            </div>
          </div>


        </div>
        <Footer />
      </div>


  );
};

export default Contact;