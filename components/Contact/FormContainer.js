import Form from "./Form";

export default function FormContainer() {
  return (
    <>
      <section className="section form-container">
        <div className="container">
          <h2>Contact Us</h2>
          <p className="sub">
            Fill in the form below and we will get back to you
          </p>
          <Form />
        </div>
      </section>
    </>
  );
}
