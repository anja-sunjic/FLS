import React, { useState, useRef } from "react";
import Image from "next/image";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Select from "react-select";
import Popup from "../partials/Popup";
import emailjs, { init } from "emailjs-com";
import classes from "./stil.module.css";

var formFilled = [
  { id: "full_name", filedName: "Full name", valid: false },
  { id: "email", filedName: "Email", valid: false },
  { id: "dob", filedName: "Date of birth", valid: false },
  { id: "contact_number", filedName: "Contact number", valid: false },
  { id: "academic_status", filedName: "Academic status", valid: false },
  { id: "name_of_university", filedName: "Name of University", valid: false },
  { id: "field_of_study", filedName: "Field of Study", valid: false },
  { id: "graduation_year", filedName: "Graduation year", valid: false },
  { id: "city_of_living", filedName: "City of living", valid: false },
  { id: "talent_pool", filedName: "FLS talent pool survey", valid: false },
  { id: "vax_pool", filedName: "Healt protocol survey", valid: false },
  { id: "discount_code", filedName: "Discount code", valid: false },
];

export default function ContactForm() {
  init("user_Q5L30y8LNQIOeMM8hVm1o");
  const form = useRef();

  //States of the form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");
  const [academicStatus, setAcademicStatus] = useState();
  const [university, setUniverity] = useState("");
  const [fieldOfStudy, setfieldOfStudy] = useState("");
  const [finalYearOfStudy, setfinalYearOfStudy] = useState("");
  const [cityOfStudy, setCityOfStudy] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [discountCode, setDiscountCode] = useState("");
  const [talentPool, setTalentPool] = useState();
  const [vaxStatus, setVaxStatus] = useState();

  //State which indicates is form ready to submit
  const [allInputValid, setAllInputValid] = useState({
    valid: false,
    invalidField: "",
  });

  //This state needs to be handlede after You check is discount code valid
  const [discount, setDiscount] = useState(false);
  //State for opening pop up
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(!open);


  //options for select fields
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

  //Methods for validation of required fields
  const sendEmail = () => {
    if (discount.length === 13) {
      console.log("without discount");
      emailjs
        .sendForm(
          "service_d7rjikp",
          "fls_registration_form",
          ( fullName,
            email,
            dob,
            number,
            linkedInProfile,
            academicStatus,
            university,
            fieldOfStudy,
            finalYearOfStudy,
            cityOfStudy,
            selectedFile,
            talentPool,
            discountCode,
            vaxStatus),
          "user_Q5L30y8LNQIOeMM8hVm1o"
        )
        .then(
          (result) => {
            console.log(result);
          },
          (error) => {
          }
        );
    } else {
      console.log("with discount");
      emailjs
        .sendForm(
          "service_d7rjikp",
          "fls_registration_form_dc",
          ( fullName,
            email,
            dob,
            number,
            linkedInProfile,
            academicStatus,
            university,
            fieldOfStudy,
            finalYearOfStudy,
            cityOfStudy,
            selectedFile,
            talentPool,
            discountCode,
            vaxStatus),
          "user_Q5L30y8LNQIOeMM8hVm1o"
        ).then(
          (result) => {
            console.log(result);
          },
          (error) => {
          }
        );
    }
  };

  const validateName = () => {
    if (fullName.length < 3) {
      formFilled[0].valid = false;
      return false;
    } else {
      formFilled[0].valid = true;
      return true;
    }
  };

  const validateEmail = () => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValid = regex.test(String(email).toLowerCase());
    if (!emailValid) {
      formFilled[1].valid = false;
      return false;
    } else {
      formFilled[1].valid = true;
      return true;
    }
  };

  const validateDob = () => {
    if (dob.length < 6) {
      formFilled[2].valid = false;
      return false;
    } else {
      formFilled[2].valid = true;
      return true;
    }
  };

  const validatePhoneNumber = () => {
    const regex = /^[\+]?[(]?[0-9]{11}[)]?/;
    const phoneValid = regex.test(String(number).toLowerCase());
    if (!phoneValid) {
      formFilled[3].valid = false;
      return false;
    } else {
      formFilled[3].valid = true;
      return true;
    }
  };

  const validateAcademicStatus = () => {
    if (academicStatus) {
      formFilled[4].valid = true;
      return false;
    } else {
      formFilled[4].valid = false;
      return true;
    }
  };

  const validateUniversity = () => {
    // const regex = /^[1-9]$/;
    // const fieldOfStudyValid= regex.test(String(fieldOfStudy).toLowerCase());
    if (university.length < 5) {
      formFilled[5].valid = false;
      return false;
    } else {
      formFilled[5].valid = true;
      return true;
    }
  };

  const validatefieldOfStudy = () => {
    // const regex = /^[1-9]$/;
    // const fieldOfStudyValid= regex.test(String(fieldOfStudy).toLowerCase());
    if (fieldOfStudy.length < 2) {
      formFilled[6].valid = false;
      return false;
    } else {
      formFilled[6].valid = true;
      return true;
    }
  };

  const validateYearOfStudyEnd = (finalYearOfStudy) => {
    const regex = /^[1-9]{4}$/;
    const yearOfStudyValid = regex.test(String(finalYearOfStudy).toLowerCase());
    if (!yearOfStudyValid) {
      formFilled[7].valid = false;
      return false;
    } else {
      formFilled[7].valid = true;
      return true;
    }
  };

  const validateCityOfResidence = () => {
    if (cityOfStudy < 2) {
      formFilled[8].valid = false;
      return false;
    } else {
      formFilled[8].valid = true;
      return true;

    }
  };

  const validateTalentPool = () => {
    if (talentPool) {
      formFilled[9].valid = true;
      return false;
    } else {
      formFilled[9].valid = false;
      return true;
    }
  };

  const validateVaxComplience = () => {
    if (vaxStatus) {
      formFilled[10].valid = true;
      return false;
    } else {
      formFilled[10].valid = false;
      return true;
    }
  };

  const validateDiscountCode = () => {
    if (discountCode != "" && discountCode.length != 13) {
      formFilled[11].valid = false;
      return false;
    } else {
      formFilled[11].valid = true;
      return true;
    }
  };

  //Method for validation of input Data. This is called on clink "Submit"
  const validateOnSubmit = () => {
    var countValidData=0;
    formFilled.forEach((item) => {
      if (!item.valid) {
        setAllInputValid({ valid: false, invalidField: item.filedName });
        document.getElementById(item.id).focus();
      
        countValidData--;
      }
      countValidData++;
    });
    console.log(countValidData);
    if(countValidData==12){
      setAllInputValid({valid:true, invalidField: "" });

      //all inputs are valid so we open pop up modal
      setOpen(true);
      sendEmail();
      //This is place for calling POST API nad registring. This console log print all data collected on form!
      console.log(
        fullName,
        email,
        dob,
        number,
        linkedInProfile,
        academicStatus,
        university,
        fieldOfStudy,
        finalYearOfStudy,
        cityOfStudy,
        selectedFile,
        talentPool,
        discountCode,
        vaxStatus
      );
    }
  };

  // console.log(allInputValid);
  // console.log(formFilled);

  return (
    <div style={{ width: "75%" }}>
      <div className="form-control">
        <div className="form-label">Full name:*</div>
        <input
          id="full_name"
          type="text"
          name="fullName"
          required
          onChange={(e) => setFullName(e.target.value)}
        />
        {!validateName() && (
          <>
            <p className={classes.required_field}> Full name is required</p>
          </>
        )}
      </div>
      <div className="form-control">
        <div className="form-label">Email address:*</div>
        <input
          id="email"
          type="text"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {!validateEmail() ? (
          <p className={classes.required_field}>
            Correct format of Email is required
          </p>
        ) : null}
      </div>
      <div className="form-control">
        <div className="form-label">Date of birth:*</div>
        <input
          id="dob"
          type="date"
          name="dob"
          required
          onChange={(e) => setDob(e.target.value)}
        />
        {!validateDob() && (
          <p className={classes.required_field}>Date of Birth is required</p>
        )}
      </div>
      <div className="form-control">
        <div className="form-label">Contact number:*</div>
        <PhoneInput
          defaultCountry="BA"
          countrySelectProps={{ unicodeFlags: true }}
          name="phone"
          id="contact_number"
          value={number}
          onChange={(phoneNumber) => setNumber(phoneNumber)}
          required={true}
        />
        {!validatePhoneNumber() ? (
          <p className={classes.required_field}>
            Correct format of phone number is required
          </p>
        ) : null}
      </div>
      <div className="form-control">
        <div className="form-label">Link to your LinkedIn profile:</div>
        <input
          type="text"
          name="linkedin"
          onChange={(e) => setLinkedInProfile(e.target.value)}
          required
        />
        <p className="form-note">
          If you do not have a LinkedIn profile, skip this field.
        </p>
      </div>
      <div className="form-control">
        <div className="form-label">Academic status:*</div>
        <Select
          id="academic_status"
          instanceId="academicSelect"
          options={academicStatuses}
          onChange={(e) => setAcademicStatus(e.value)}
          placeholder="Select"
          name="academicStatus"
          required={true}
          styles={classes.lista}
        />
        {validateAcademicStatus() && (
          <p className={classes.required_field}>Academic status is required</p>
        )}
      </div>
      <div className="form-control">
        <div className="form-label">
          Name of the university and faculty you are attending/you attended:*
        </div>
        <input
          id="name_of_university"
          type="text"
          name="faculty"
          required
          onChange={(e) => setUniverity(e.target.value)}
        />
        {!validateUniversity() && (
          <>
            <p className={classes.required_field}> University is required</p>
          </>
        )}
      </div>
      <div className="form-control">
        <div className="form-label">Field of study:*</div>
        <input
          id="field_of_study"
          type="text"
          name="field"
          onChange={(e) => setfieldOfStudy(e.target.value)}
          required
        />
        {!validatefieldOfStudy() ? (
          <p className={classes.required_field}>Field study is required</p>
        ) : null}
      </div>
      <div className="form-control">
        <div className="form-label">Graduation year:*</div>
        <input
          id="graduation_year"
          type="text"
          name="gradYear"
          onChange={(e) => setfinalYearOfStudy(e.target.value)}
          required
        />
        {!validateYearOfStudyEnd(finalYearOfStudy) ? (
          <p className={classes.required_field}>
            Valid format of final year of study is required
          </p>
        ) : null}
      </div>
      <div className="form-control">
        <div className="form-label">City you are currently based in:*</div>
        <input
          id="city_of_living"
          type="text"
          name="city"
          required
          onChange={(e) => setCityOfStudy(e.target.value)}
        />
        {!validateCityOfResidence() && (
          <>
            <p className={classes.required_field}> City is required!</p>
          </>
        )}
      </div>
      <div className="form-control">
        <div className="form-label">
          Do you agree to become part of the FLS&#39;21 Talent Pool?*
        </div>
        <Select
          id="talent_pool"
          instanceId="talentpool"
          options={[
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" },
          ]}
          onChange={(e) => setTalentPool(e.value)}
          placeholder="Select"
          required
          styles={classes.lista}
        />
        {validateTalentPool() && (
          <p className={classes.required_field}>This is required</p>
        )}
        <p className="form-note">
          The FLS Organizing Team is creating a summit talent pool - a database
          of individuals participating at the Futures Leaders Summit &#39;21.{" "}
          <br /> <br /> After the completion of the event, the database will be
          shared with all interested Premium and Gold Sponsors for further
          networking and internship/employment opportunities.
          <br /> <br /> This could be your chance to get contacted by one of the
          leading companies in your area of study. <br /> <br />
          The Talent Pool includes the following information: full name, contact
          email, LinkedIn profile (if exists), field of study and CV.
        </p>
      </div>
      <div className="form-control">
        <div className="form-label">Upload your resume:</div>
        <input
          accept=".doc,.docx,.pdf"
          type="file"
          name="selectedFile"
          onChange={(event) => setSelectedFile(event.target.files[0])}
        />
        {selectedFile ? (
          <div>
            <p>Filename: {selectedFile.name}</p>
          </div>
        ) : (
          <p>Upload a file (PDF, DOCX), file size limit is 2MB</p>
        )}

        <p className="form-note">
          If you agreed to become part of the FLS’21 Talent Pool, it is
          mandatory to upload your resume.
        </p>
      </div>
      <div className="form-control">
        <div className="form-label">Discount code:</div>
        <input
          id="discount_code"
          type="text"
          name="discount"
          required
          onChange={(e) => {
            setDiscountCode(e.target.value);
          }}
        />
        {!validateDiscountCode() && (
          <p className={classes.required_field}>
            Discount code must be 13 chars long
          </p>
        )}
      </div>
      <div className="form-control">
        <div className="form-label">
          How are you compliant with FLS&#39;21 Health and Safety Protocols?*
        </div>
        <div style={{ width: "100%" }}>
          <Select
            id="vax_pool"
            instanceId="vax"
            options={vaxStatuses}
            onChange={(e) => setVaxStatus(e.value)}
            placeholder="Select"
            name="vaxStatus"
            required={true}
          />
        </div>
        {validateVaxComplience() && (
          <p className={classes.required_field}>
            Health compliance is required
          </p>
        )}
      </div>
      <input
        className="contact-button"
        type="submit"
        onClick={validateOnSubmit}
      />
      {allInputValid.invalidField != "" ? (
        <p className={classes.required_field}>
          Field {allInputValid.invalidField} is required. Please fill it!
        </p>
      ) : null}
       { open && discount  && (
        <Popup open={open} closePopup={toggleModal}>
          <>
            <div className="inner">
              <Image src="/check.png" height={100} width={100}></Image>
              <p>
                Thank you for your registration. Check your email inbox
                (Junk/Spam as well) for further information regarding
                FLS&#39;21.
              </p>
              <div className="button" onClick={toggleModal}>
                Continue
              </div>
            </div>
          </>
        </Popup>
      )}
      {open && (
        <Popup open={open} closePopup={toggleModal}>
          <>
            <div className="inner">
              <Image src="/check.png" height={100} width={100}></Image>
              <p>
                Thank you for your registration. Check your email inbox
                (Junk/Spam as well) for payment instructions and further
                information regarding FLS&apos;21.
              </p>
              <div className="button" onClick={toggleModal}>
                Continue
              </div>
            </div>
          </>
        </Popup>
      )} 
    </div>
  );
}
