import React, { useEffect, useState } from "react";
import Select from "react-select";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [formState, setFormState] = useState("INITIAL");
  const [inquiry, setInquiry] = useState("general");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [messageTimeout, setMessageTimeout] = useState(3);

  const handleInquirySelect = (e) => {
    setInquiry(e.value);
  };
  //inquiry type dropdown options
  const options = [
    { value: "General Inquiry", label: "General Inquiry" },
    { value: "Become a Partner", label: "Become a Partner" },
  ];

  let templateParams = {
    name: name,
    email: email,
    message: message,
    inquiry: inquiry,
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_weanjll",
        "template_jmzgbur",
        templateParams,
        "user_uVpKEawr5mFOKdcTWe7QP"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormState("SUCCESS");
        },
        (err) => {
          console.log("FAILED...", err);
          setErrorMessage(err.text);
          setFormState("ERROR");
        }
      );
  }
  useEffect(() => {
    // Timer to display notifications below the form
    if (formState === "SUCCESS" || formState === "ERROR") {
      const timer = setTimeout(() => {
        setFormState("INITIAL");
      }, 6000); // Initial timer set to 6sec
      return () => clearTimeout(timer);
    }
  }, [formState]);

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <div className="form-control">
        <label className="form-label">Inquiry type</label>
        <Select
          id="inquirySelect"
          instanceId="inquirySelect"
          options={options}
          onChange={handleInquirySelect}
          placeholder="Select inquiry type"
          name="inquiry"
          className="inquiry-select"
          classNamePrefix="inquiry-select"
          disabled={formState === "LOADING"}
        />
      </div>
      <div className="form-control">
        <div className="form-label">Your Name*</div>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          disabled={formState === "LOADING"}
          required
        />
      </div>
      <div className="form-control">
        <div className="form-label">Your Email*</div>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          disabled={formState === "LOADING"}
          required
        />
      </div>
      <div className="form-control">
        <div className="form-label">Your Message*</div>
        <textarea
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          disabled={formState === "LOADING"}
          required
          rows={5}
        />
      </div>

      <input
        className="contact-button"
        type="submit"
        value={formState === "LOADING" ? "Loading..." : "Submit inquiry"}
        disabled={formState === "LOADING"}
      />
      {formState === "SUCCESS" ? (
        <div className="form-message form-message_success">
          The message was sent successfully!
        </div>
      ) : null}
      {formState === "ERROR" ? (
        <div className="form-message form-message_error">
          There was an error processing the message. Please try again!
        </div>
      ) : null}
    </form>
  );
}
