import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useForm, ErrorMessage } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Select from "react-select";
import Popup from "../partials/Popup";
import emailjs, { init } from "emailjs-com";

export default function ContactForm() {
  init("user_Q5L30y8LNQIOeMM8hVm1o");

  const form = useRef();

  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [number, setNumber] = useState();
  const [academicStatus, setAcademicStatus] = useState();
  const [vaxStatus, setVaxStatus] = useState();

  const [formState, setFormState] = useState("INITIAL");
  const [messageTimeout, setMessageTimeout] = useState(3);

  const handleAcademicSelect = (e) => {
    setAcademicStatus(e.value);
  };
  const handleVaxSelect = (e) => {
    setVaxStatus(e.value);
  };
  //inquiry type dropdown options
  const academicStatuses = [
    { value: "Student", label: "Student" },
    { value: "Recent Graduate", label: "Recent Graduate" },
  ];

  const vaxStatuses = [
    {
      value: "full vaccination",
      label: "I will have evidence of full vaccination by the event date",
    },
    {
      value: "negative PCR",
      label:
        "I will have a valid negative PCR or antigen test not older than 48 hours during the event",
    },
    {
      value: "recovery",
      label:
        "I will have proof of COVID-19 recovery issued by my doctor not older than 6 months by the event date",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setFormState("LOADING");
    emailjs.sendForm('service_d7rjikp', 'fls_registration_form', form.current, 'user_Q5L30y8LNQIOeMM8hVm1o')
      .then((result) => {
        setFormState("SUCCESS");
        setOpen(true);
        reset();
      }, (error) => {
        setFormState("ERROR");
        setOpen(false);
      });
  };

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
    <>
      <form ref={form}
        encType="multipart/form-data"
        className="contact-form register-form"
        onSubmit={sendEmail}
      >
        <div className="form-control">
          <div className="form-label">Full name:*</div>
          <input
            type="text"
            id="name"
            name="name"
            {...register("fullName", { required: true })}
            disabled={formState === "LOADING"}
            required />
          {errors.fullName && errors.fullName.type === "required" && (
            <span className="field-error">Full name is required</span>
          )}
        </div>
        <div className="form-control">
          <div className="form-label">Email address:*</div>
          <input
            type="text"
            name="email"
            {...register("email", { required: true })}
            disabled={formState === "LOADING"}
            required />
          {errors.email && errors.email.type === "required" && (
            <span className="field-error">Email is required</span>
          )}
        </div>
        <div className="form-control">
          <div className="form-label">Date of birth:*</div>
          <input type="date" name="dob" {...register("dob", { required: true })} required />
          {errors.dob && errors.dob.type === "required" && (
            <span className="field-error">Date of Birth is required</span>
          )}
        </div>
        <div className="form-control">
          <div className="form-label">Contact number:*</div>
          <PhoneInput
            defaultCountry="BA"
            countrySelectProps={{ unicodeFlags: true }}
            name="phone"
            id="phone-input"
            value={number}
            onChange={setNumber}
            required={true}
          />
        </div>
        <div className="form-control">
          <div className="form-label">Link to your LinkedIn profile:</div>
          <input
            type="text"
            name="linkedin"
            {...register("linkedin", { required: false })}
            disabled={formState === "LOADING"}
          />
          <p className="form-note">
            If you do not have a LinkedIn profile, skip this field.
          </p>
        </div>
        <div className="form-control">
          <div className="form-label">Academic status:*</div>
          <Select
            id="inquirySelect"
            instanceId="inquirySelect"
            options={academicStatuses}
            onChange={handleAcademicSelect}
            placeholder="Select"
            name="academicStatus"
            className="dropdown"
            classNamePrefix="dropdown"
            disabled={formState === "LOADING"}
            aria-required={true}
            required={true}
          />
          {!academicStatus && (
            <span className="field-error">Academic status is required</span>
          )}
        </div>
        <div className="form-control">
          <div className="form-label">
            Name of the university and faculty you are attending/you attended:*
          </div>
          <input
            type="text"
            name="faculty"
            {...register("faculty", { required: true })}
            disabled={formState === "LOADING"}
            required />
          {errors.faculty && errors.faculty.type === "required" && (
            <span className="field-error">Educational Institution is required</span>
          )}
        </div>
        <div className="form-control">
          <div className="form-label">Field of study:*</div>
          <input
            type="text"
            name="field"
            {...register("field", { required: true })}
            disabled={formState === "LOADING"}
            required />
          {errors.field && errors.field.type === "required" && (
            <span className="field-error">Field of study is required</span>
          )}
        </div>
        <div className="form-control">
          <div className="form-label">Graduation year:*</div>
          <input
            type="text"
            name="gradYear"
            {...register("gradYear", { required: true })}
            disabled={formState === "LOADING"}
            required />
          {errors.gradYear && errors.gradYear.type === "required" && (
            <span className="field-error">Graduation year is required</span>
          )}
          <p className="form-note">
            The year you graduated in or expected graduation year.
          </p>
        </div>
        <div className="form-control">
          <div className="form-label">City you are currently based in:*</div>
          <input
            type="text"
            name="city"
            {...register("city", { required: true })}
            disabled={formState === "LOADING"}
            required />
          {errors.city && errors.city.type === "required" && (
            <span className="field-error">City is required</span>
          )}
        </div>
        <div className="form-control">
          <div className="form-label">
            Do you agree to become part of the FLS&#39;21 Talent Pool?*
          </div>
          <input
            type="checkbox"
            name="talent"
            {...register("talent", { required: true })}
            disabled={formState === "LOADING"}
            required />
          {errors.talent && errors.talent.type === "required" && (
            <span className="field-error">Talent pool selection is required</span>
          )}
          <p className="form-note">
            The FLS Organizing Team is creating a summit talent pool - a
            database of individuals participating at the Futures Leaders Summit
            &#39;21. <br /> <br /> After the completion of the event, the
            database will be shared with all interested Premium and Gold
            Sponsors for further networking and internship/employment
            opportunities.
            <br /> <br /> This could be your chance to get contacted by one of
            the leading companies in your area of study. <br /> <br />
            The Talent Pool includes the following information: full name,
            contact email, LinkedIn profile (if exists), field of study and CV.
          </p>
        </div>
        <div className="form-control">
          <div className="form-label">Upload your resume:</div>
          {/* <input
            type="file"
            onChange={setFileInput}
            disabled={formState === "LOADING"}
          /> */}

          <input accept=".doc,.docx,.pdf" type="file" name="selectedFile" onChange={changeHandler} required />
          {selectedFile ? (
            <div>
              <p>Filename: {selectedFile.name}</p>
            </div>
          ) : (
            <p>Upload a file (PDF, DOCX)</p>
          )}

          <p className="form-note">
            If you agreed to become part of the FLS’21 Talent Pool, it is
            mandatory to upload your resume.
          </p>
        </div>
        <div className="form-control">
          <div className="form-label">Discount code:</div>
          <input
            type="text"
            name="discount"
            {...register(
              "discount",
              { required: false },
              { pattern: { message: "Greskicaaaa", value: /[A-Za-z]/ } }
            )}
            disabled={formState === "LOADING"}
          />
        </div>
        <div className="form-control">
          <div className="form-label">
            How are you compliant with FLS&#39;21 Health and Safety Protocols?*
          </div>
          <Select
            id="inquirySelect"
            instanceId="inquirySelect"
            options={vaxStatuses}
            onChange={handleVaxSelect}
            placeholder="Select"
            name="vaxStatus"
            className="dropdown"
            classNamePrefix="dropdown"
            disabled={formState === "LOADING"}
            aria-required={true}
          />
          {!vaxStatus && (
            <span className="field-error">Health compliance is required</span>
          )}
        </div>
        <input
          className="contact-button"
          type="submit"
          value={formState === "LOADING" ? "Loading..." : "Submit"}
          disabled={formState === "LOADING"}
        />
        {formState === "SUCCESS" ? "" : null}
        {formState === "ERROR" ? (
          <div className="form-message form-message_error">
            There was an error processing the message. Please try again!
          </div>
        ) : null}
      </form>
      {open && (
        <Popup open={open} closePopup={closeModal}>
          <>
            <div className="inner">
              <Image src="/check.png" height={100} width={100}></Image>
              <p>
                Thank you for your registration. Check your email inbox
                (Junk/Spam as well) for further information regarding
                FLS&#39;21.
              </p>
              <div className="button" onClick={closeModal}>
                Continue
              </div>
            </div>
          </>
        </Popup>
      )}
      {open && (
        <Popup open={open} closePopup={closeModal}>
          <>
            <div className="inner">
              <Image src="/check.png" height={100} width={100}></Image>
              <p>
                Thank you for your registration. Check your email inbox
                (Junk/Spam as well) for further information regarding
                FLS&#39;21.
              </p>
              <div className="button" onClick={closeModal}>
                Continue
              </div>
            </div>
          </>
        </Popup>
      )}
    </>
  );
}
