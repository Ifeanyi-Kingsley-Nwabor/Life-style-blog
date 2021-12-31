import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

const Contact = () => {
  const [formInput, setFormInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const url = "http://localhost:3004/api/contact_messages";

  const handleChange = (e) => {
    console.log(e.target.name);
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     first_name: formInput.first_name,
    //     last_name: formInput.last_name,
    //     email: formInput.email,
    //     message: formInput.message
    // }),
    // };
    // fetch(url, requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => setFormInput(data.value));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInput);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name: formInput.first_name,
        last_name: formInput.last_name,
        email: formInput.email,
        message: formInput.message,
      }),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => setFormInput(data));

    setFormInput(" ");
  };

  console.log(formInput);

  return (
    <div className="contact_container">
      <p className="contact_message">
        Do you have something you would like to share with us, we are always
        here for you.
      </p>
      <h1>Contact Us!</h1>
      <p>
        Telephone: <a href="#tel">+0123456789</a>
      </p>
      <Form className="form_section" onSubmit={handleSubmit} method="POST">
        <label>
          <p className="form_paragraph">First name:</p>
          <input
            className="form_details"
            type="text"
            name="first_name"
            // value={formInput.first_name}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
        </label>
        <label>
          <p className="form_paragraph">Last name:</p>
          <input
            className="form_details"
            type="text"
            name="last_name"
            // value={formInput.last_name}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
        </label>
        <label>
          <p className="form_paragraph">Email address:</p>
          <input
            className="form_details"
            type="email"
            name="email"
            //  value={formInput.email}
            onChange={handleChange}
            placeholder="Enter your email address"
          />
        </label>
        <label>
          <p className="form_paragraph">Tell us what you think!!!</p>
          <textarea
            className="form_fieldText"
            type="textarea"
            name="message"
            // value={formInput.message}
            onChange={handleChange}
            placeholder="Please write your message here"
          />
        </label>
        <input type="submit" value="Submit" />
      </Form>
    </div>
  );
};

export default Contact;
