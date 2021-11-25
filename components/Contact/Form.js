import React, { useEffect, useState } from "react";
import Select from "react-select";
import emailjs from "emailjs-com";
import Image from "next/image";
import Popup from "../partials/Popup";

export default function ContactForm() {
  const [formState, setFormState] = useState("INITIAL");
  const [inquiry, setInquiry] = useState("general");
  const [nameState, setName] = useState("");
  const [emailState, setEmail] = useState("");
  const [messageState, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [messageTimeout, setMessageTimeout] = useState(3);
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(!open);

  const handleInquirySelect = (e) => {
    setInquiry(e.value);
  };
  //inquiry type dropdown options
  const options = [
    { value: "General Inquiry", label: "General Inquiry" },
    { value: "Become a Sponsor", label: "Become a Sponsor" },
  ];

  let templateParams = {
    name: nameState,
    email: emailState,
    message: messageState,
    inquiry: inquiry,
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send(
        "service_bf6vot6",
        "fls_contact_form",
        templateParams,
        "user_VJGu25NurbZTbZc1QQ5Tx"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormState("SUCCESS");
          setOpen(!open);
          setInquiry("");
          setMessage("");
          setEmail("");
          setName("");
        },
        (err) => {
          console.log("FAILED...", err);
          setErrorMessage(err.text);
          setFormState("ERROR");
          setInquiry("");
          setMessage("");
          setEmail("");
          setName("");
        }
      );
  }
  useEffect(() => {
    // Timer to display notifications below the form
    if (formState === "SUCCESS" || formState === "ERROR") {
      const timer = setTimeout(() => {
        setFormState("INITIAL");
        setOpen(false);
      }, 6000); // Initial timer set to 6sec
      return () => clearTimeout(timer);
    }
  }, [formState]);

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <div className="form-control">
        <label className="form-label">Inquiry type:*</label>
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
        <div className="form-label">Your name:*</div>
        <input
          value={nameState}
          type="text"
          onChange={(e) => setName(e.target.value)}
          disabled={formState === "LOADING"}
          required
        />
      </div>
      <div className="form-control">
        <div className="form-label">Your email:*</div>
        <input
          value={emailState}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          disabled={formState === "LOADING"}
          required
        />
      </div>
      <div className="form-control">
        <div className="form-label">Your message:*</div>
        <textarea
          value={messageState}
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
        value={formState === "LOADING" ? "Loading..." : "Submit Inquiry"}
        disabled={formState === "LOADING"}
      />
      {formState === "SUCCESS" && open && (
          <Popup open={open} closePopup={toggleModal}>
              <>
                  <div className="inner">
                      <Image src="/check.png" height={100} width={100} />
                      <p>
                          Thank you for your inquiry. We will get back to you soon.
                      </p>
                      <div className="button" onClick={toggleModal}>
                          Continue
                      </div>
                  </div>
              </>
          </Popup>
      )}
      {formState === "ERROR" ? (
        <div className="form-message form-message_error">
          There was an error processing the message. Please try again!
        </div>
      ) : null}
    </form>
  );
}
