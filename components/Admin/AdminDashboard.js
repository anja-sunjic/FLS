import React, { useState, useEffect } from "react";
import { Button, Form, ListGroup, Table } from "react-bootstrap";
import { fb, db } from "../../backend/firebase";
import Swal from "sweetalert2";
import { CSVLink, CSVDownload } from "react-csv";
import "bootstrap/dist/css/bootstrap.min.css";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export default function AdminDashboard() {
  const [flsRegistrations, setFlsRegistrations] = useState([]);
  const [flsTravelGrants, setFlsTravelGrants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [authenticated, setAuthenticated] = useState(
    fb.auth().currentUser ? true : false
  );
  const [redirect, setRedirect] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    fb.auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setEmail("");
        setPassword("");
        setRedirect(true);
        setAuthenticated(true);
        Toast.fire({
          icon: "success",
          title: "User signed in successfully",
        });
        db.collection("profiles")
          .doc(user.user.uid)
          .update({ action: "login" });
      })
      .catch((error) => {
        Toast.fire({
          icon: "error",
          title: error.message,
        });
      });
  };

  const fetchRegistrations = () => {
    db.collection("fls-registrations").onSnapshot((querySnapShot) => {
      const fetchedRegistrations = [];
      querySnapShot.forEach((doc) => {
        let object = doc.data();
        fetchedRegistrations.push({
          usersFullName: object.usersFullName,
          usersEmail: object.usersEmail,
          usersNumber: object.usersNumber,
          usersCity: object.usersCity,
          usersBirthDate: object.usersBirthDate,
          usersAcademicStatus: object.usersAcademicStatus,
          usersUniversity: object.usersUniversity,
          usersFieldOfStudy: object.usersFieldOfStudy,
          usersGraduationYear: object.usersGraduationYear,
          usersVaxStatus: object.usersVaxStatus,
          usersTalentPool: object.usersTalentPool,
          usersDiscountCode: object.usersDiscountCode,
          usersLinkedinProfile: object.usersLinkedinProfile,
          usersResume: object.usersResume.fileDownloadLink,
          usersTimeOfRegistration: object.usersTimeOfRegistration
        });
      });
      setFlsRegistrations(fetchedRegistrations);
    });
  };

  const fetchTravelGrants = () => {
    db.collection("fls-travel-grants").onSnapshot((querySnapShot) => {
      const fetchedTravelGrants = [];
      querySnapShot.forEach((doc) => {
        let object = doc.data();
        fetchedTravelGrants.push({
          usersFullName: object.usersFullName,
          usersEmail: object.usersEmail,
          usersNumber: object.usersNumber,
          usersCity: object.usersCity,
          usersBirthDate: object.usersBirthDate,
          usersAcademicStatus: object.usersAcademicStatus,
          usersUniversity: object.usersUniversity,
          usersFieldOfStudy: object.usersFieldOfStudy,
          usersGraduationYear: object.usersGraduationYear,
          usersVaxStatus: object.usersVaxStatus,
          usersTalentPool: object.usersTalentPool,
          usersDiscountCode: object.usersDiscountCode,
          usersLinkedinProfile: object.usersLinkedinProfile,
          usersResume: object.usersResume.fileDownloadLink,
          usersMotivation: object.usersMotivation,
          usersImpact: object.usersImpact,
          usersExternalFactors: object.usersExternalFactors,
          usersHousehold: object.usersHousehold,
          usersAccommodation: object.usersAccommodation,
          usersTravel: object.usersTravel,
          usersTimeOfRegistration: object.usersTimeOfRegistration
        });
      });
      setFlsTravelGrants(fetchedTravelGrants);
    });
  };

  useEffect(() => {
    fetchRegistrations();
    fetchTravelGrants();
  }, []);

  return authenticated ? (
    <div>
      <div className="container">
        <div className="text-box pt-4">
          <h2>FLS registrations</h2>
        </div>
        <CSVLink data={flsRegistrations} style={{ color: "#f1dc13" }}>
          Export registrations to CSV
        </CSVLink>
        <div className="files-container table-responsive">
          <Table responsive bordered hover className="mt-4">
            <thead>
              <tr className="bg-secondary text-white">
                <td>
                  <strong>Full name</strong>
                </td>
                <td>
                  <strong>Email</strong>
                </td>
                <td>
                  <strong>Phone</strong>
                </td>
                <td>
                  <strong>City</strong>
                </td>
                <td>
                  <strong>Birth date</strong>
                </td>
                <td>
                  <strong>Academic status</strong>
                </td>
                <td>
                  <strong>University</strong>
                </td>
                <td>
                  <strong>Field of study</strong>
                </td>
                <td>
                  <strong>Graduation year</strong>
                </td>
                <td>
                  <strong>Vax status</strong>
                </td>
                <td>
                  <strong>Talent pool</strong>
                </td>
                <td>
                  <strong>Discount code</strong>
                </td>
                <td>
                  <strong>Linkedin profile</strong>
                </td>
                <td>
                  <strong>Resume</strong>
                </td>
                <td>
                  <strong>Registered at</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              {flsRegistrations.length > 0 ? (
                flsRegistrations.map((flsRegistration) => {
                  return (
                    <tr key={flsRegistration.id}>
                      <td>{flsRegistration.usersFullName}</td>
                      <td>{flsRegistration.usersEmail}</td>
                      <td>{flsRegistration.usersNumber}</td>
                      <td>{flsRegistration.usersCity}</td>
                      <td>{flsRegistration.usersBirthDate}</td>
                      <td>{flsRegistration.usersAcademicStatus}</td>
                      <td>{flsRegistration.usersUniversity}</td>
                      <td>{flsRegistration.usersFieldOfStudy}</td>
                      <td>{flsRegistration.usersGraduationYear}</td>
                      <td>{flsRegistration.usersVaxStatus}</td>
                      <td>{flsRegistration.usersTalentPool}</td>
                      <td>{flsRegistration.usersDiscountCode}</td>
                      <td>
                        {flsRegistration.usersLinkedinProfile ? (
                          <a
                            target="_blank"
                            href={flsRegistration.usersLinkedinProfile}
                            rel="noreferrer"
                          >
                            Linkedin profile
                          </a>
                        ) : null}
                      </td>
                      <td>
                        {flsRegistration.usersResume ? (
                          <a
                            target="_blank"
                            href={flsRegistration.usersResume}
                            rel="noreferrer"
                          >
                            Download resume
                          </a>
                        ) : null}
                      </td>
                      <td>{flsRegistration.usersTimeOfRegistration}</td>
                    </tr>
                  );
                })
              ) : (
                <ListGroup.Item action>{errorMessage}</ListGroup.Item>
              )}
            </tbody>
          </Table>
        </div>

        <div className="text-box pt-4">
          <h2>FLS travel grants</h2>
        </div>
        <CSVLink data={flsTravelGrants} style={{ color: "#f1dc13" }}>
          Export travel grants to CSV
        </CSVLink>
        <div className="files-container table-responsive">
          <Table responsive bordered hover className="mt-4">
            <thead>
              <tr className="bg-secondary text-white">
                <td>
                  <strong>Full name</strong>
                </td>
                <td>
                  <strong>Email</strong>
                </td>
                <td>
                  <strong>Phone</strong>
                </td>
                <td>
                  <strong>City</strong>
                </td>
                <td>
                  <strong>Birth date</strong>
                </td>
                <td>
                  <strong>Academic status</strong>
                </td>
                <td>
                  <strong>University</strong>
                </td>
                <td>
                  <strong>Field of study</strong>
                </td>
                <td>
                  <strong>Graduation year</strong>
                </td>
                <td>
                  <strong>Vax status</strong>
                </td>
                <td>
                  <strong>Talent pool</strong>
                </td>
                <td>
                  <strong>Discount code</strong>
                </td>
                <td>
                  <strong>Linkedin profile</strong>
                </td>
                <td>
                  <strong>Motivation</strong>
                </td>
                <td>
                  <strong>Impact</strong>
                </td>
                <td>
                  <strong>External factors</strong>
                </td>
                <td>
                  <strong>Household</strong>
                </td>
                <td>
                  <strong>Accomodation</strong>
                </td>
                <td>
                  <strong>Travel</strong>
                </td>
                <td>
                  <strong>Resume</strong>
                </td>
                <td>
                  <strong>Registered at</strong>
                </td>
              </tr>
            </thead>
            <tbody>
              {flsRegistrations.length > 0 ? (
                flsTravelGrants.map((flsTravelGrant) => {
                  return (
                    <tr key={flsTravelGrant.id}>
                      <td>{flsTravelGrant.usersFullName}</td>
                      <td>{flsTravelGrant.usersEmail}</td>
                      <td>{flsTravelGrant.usersNumber}</td>
                      <td>{flsTravelGrant.usersCity}</td>
                      <td>{flsTravelGrant.usersBirthDate}</td>
                      <td>{flsTravelGrant.usersAcademicStatus}</td>
                      <td>{flsTravelGrant.usersUniversity}</td>
                      <td>{flsTravelGrant.usersFieldOfStudy}</td>
                      <td>{flsTravelGrant.usersGraduationYear}</td>
                      <td>{flsTravelGrant.usersVaxStatus}</td>
                      <td>{flsTravelGrant.usersTalentPool}</td>
                      <td>{flsTravelGrant.usersDiscountCode}</td>
                      <td>
                        {flsTravelGrant.usersLinkedinProfile ? (
                          <a
                            target="_blank"
                            href={flsTravelGrant.usersLinkedinProfile}
                            rel="noreferrer"
                          >
                            Linkedin profile
                          </a>
                        ) : null}
                      </td>
                      <td>{flsTravelGrant.usersMotivation}</td>
                      <td>{flsTravelGrant.usersImpact}</td>
                      <td>{flsTravelGrant.usersExternalFactors}</td>
                      <td>{flsTravelGrant.usersHousehold}</td>
                      <td>{flsTravelGrant.usersAccommodation}</td>
                      <td>{flsTravelGrant.usersTravel}</td>
                      <td>
                        {flsTravelGrant.usersResume ? (
                          <a
                            target="_blank"
                            href={flsTravelGrant.usersResume}
                            rel="noreferrer"
                          >
                            Download resume
                          </a>
                        ) : null}
                      </td>
                      <td>{flsTravelGrant.usersTimeOfRegistration}</td>
                    </tr>
                  );
                })
              ) : (
                <ListGroup.Item action>{errorMessage}</ListGroup.Item>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  ) : (
    <div className="admin-dashboard">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Enter your email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword" className="mt-4">
        <Form.Label>Enter your password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button id="button" className="mt-4" variant="dark" onClick={login}>
        Log in
      </Button>
    </div>
  );
}
