"use client";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import server from "../config.json";
import { State, City } from "country-state-city";
import { useRouter } from "next/router";
import { RotatingLines } from "react-loader-spinner";

const OnshoreCareerForm = () => {
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [yourState, setState] = useState("");
  const [yourCity, setCity] = useState("");
  const [selectCountry, setSelectCountry] = useState("IN");
  const [selectState, setSelectState] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hideSubmitButton, setHideSubmitButton] = useState(false);
  const [fileErrors, setFileErrors] = useState(false);
  const router = useRouter();
  const { utm_source, utm_medium, utm_campaign } = router.query;

  const [formData, setFormData] = useState({
    firstname: "",
    contactNo: "",
    email: "",
    state: "",
    city: "",
    position: "",
    resume: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });

  const stateData = State.getStatesOfCountry(selectCountry).map((state) => ({
    value: state.isoCode,
    displayValue: state.name,
  }));

  const cityData = City.getCitiesOfState(selectCountry, selectState).map(
    (city) => ({
      CityValue: city.name,
    })
  );

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const allowedExtensions = ["pdf", "doc", "docx", "rtf", "txt"];
    const fileExtension = selectedFile?.name.split(".").pop().toLowerCase();

    if (allowedExtensions.includes(fileExtension)) {
      setHideSubmitButton(false);
      setFileErrors(false);
      setFile(selectedFile);
    } else {
      setHideSubmitButton(true);
      setFileErrors(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validation for email
    if (name === "email") {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      const notAllowedDomains = [
        "test.com",
        "sample.com",
        "example.com",
        "testing.com",
      ];
      const [, domain] = value.split("@");

      if (!emailRegex.test(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Please enter a valid email address.",
        }));
      } else if (notAllowedDomains.includes(domain)) {
        setErrors((prev) => ({
          ...prev,
          email: "This email domain is not allowed.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }

    // Validation for contact number
    if (name === "contactNo" && !/^\d+$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        contactNo: "Please enter only numbers.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, contactNo: "" }));
    }
  };

  const handleStateChange = (e) => {
    const selectedValue = e.target.value;
    const selectedLabel = e.target.options[e.target.selectedIndex].text;
    setSelectState(selectedValue);
    setState(selectedLabel);
  };

  const handleCityChange = (e) => {
    const selectedLabel = e.target.options[e.target.selectedIndex].text;
    setCity(selectedLabel);
  };

  const handlePositionChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex].text;
    setSelectedPosition(selectedOption);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    if (!file) {
      setHideSubmitButton(true);
      setFileErrors(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((key) =>
        formDataToSend.append(key, formData[key])
      );
      formDataToSend.append("state", yourState);
      formDataToSend.append("city", yourCity);
      formDataToSend.append("position", selectedPosition);
      formDataToSend.append("resume", file);

      const response = await axios.post(
        `${server.SERVER_FROM}contact-form-7/v1/contact-forms/9605/feedback`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.status === "mail_sent") {
        setFormVisible(false);
        setSuccessMessage(true);
      } else if (response.data.status === "validation_failed") {
        const fieldErrors = {};
        response.data.invalid_fields.forEach((field) => {
          fieldErrors[field.field] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        setError("An error occurred. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  const position = [{ id: "1", position_name: "HSEQ Executive/3rd Officer" }];

  return (
    <>
      {!successMessage && (
        <small style={{ color: "#555" }}>All fields are mandatory</small>
      )}
      {!successMessage && <h3>Submit a CV/Resume(Onshore/Shore Job):</h3>}
      <div className="form-bg mb-1">
        {formVisible ? (
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Row>
              <Col>
                <div className="mb-3">
                  <input
                    type="text"
                    name="firstname"
                    className={`form-control ${
                      errors.firstname ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Name"
                    value={formData.firstname}
                    onChange={handleChange}
                    maxLength={6}
                  />
                  {errors.firstname && (
                    <div className="invalid-feedback">{errors.firstname}</div>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <div className="mb-3">
                  <input
                    type="tel"
                    name="contactNo"
                    maxLength="10"
                    className={`form-control ${
                      errors.contactNo ? "is-invalid" : ""
                    }`}
                    placeholder="Contact No."
                    value={formData.contactNo}
                    onChange={handleChange}
                  />
                  {errors.contactNo && (
                    <div className="invalid-feedback">{errors.contactNo}</div>
                  )}
                </div>
              </Col>
              <Col lg={6} sm={12}>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <div className="mb-3">
                  <select
                    onChange={handleStateChange}
                    id="state"
                    name="state"
                    className={`form-select form-control ${
                      errors.state ? "is-invalid" : ""
                    }`}
                    value={selectState}
                  >
                    <option value="">Select State</option>
                    {stateData.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.displayValue}
                      </option>
                    ))}
                  </select>
                  {errors.state && (
                    <div className="invalid-feedback">{errors.state}</div>
                  )}
                </div>
              </Col>
              <Col lg={6} sm={12}>
                <div className="mb-3">
                  <select
                    id="city"
                    name="city"
                    className={`form-select form-control ${
                      errors.city ? "is-invalid" : ""
                    }`}
                    onChange={handleCityChange}
                  >
                    <option value="">Select City</option>
                    {cityData.map((city, index) => (
                      <option key={index} value={city.CityValue}>
                        {city.CityValue}
                      </option>
                    ))}
                  </select>
                  {errors.city && (
                    <div className="invalid-feedback">{errors.city}</div>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="mb-3">
                  <select
                    onChange={handlePositionChange}
                    id="position"
                    name="position"
                    className={`form-select form-control ${
                      errors.position ? "is-invalid" : ""
                    }`}
                    value={selectedPosition}
                  >
                    <option value="">Select Position</option>
                    {position.map((pos, index) => (
                      <option key={index} value={pos.id}>
                        {pos.position_name}
                      </option>
                    ))}
                  </select>
                  {errors.position && (
                    <div className="invalid-feedback">{errors.position}</div>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
            <Col sm={12} lg={12}>
                <div class="input-group">
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    class={`form-control ${
                      errors && errors.resume ? "is-invalid" : ""
                    }
                    ${fileErrors ? "is-invalid" : ""} `}
                    onChange={handleFileChange}
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                  />
                </div>
               
                <p
                  className="pt-1"
                  style={{ lineHeight: "16px", fontSize: "12px" }}
                >
                  Complete your job application by uploading your resume or CV.
                  Upload either DOC, DOCX, PDF, RTF or TXT file types, 4 MB max.
                </p>
                {errors && errors.resume && (
                  <div className="invalid-feedback">{errors.resume}</div>
                )}
                <div className="fs-6" style={{ color: "#b02a37" }}>
                  {" "}
                  {errors && errors.resume && errors.resume}
                </div>
                {fileErrors ? (
                  <div className="error">
                    Please upload the resume.(doc,docx,pdf)
                  </div>
                ) : (
                  ""
                )}
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <button
                  id="submit-button"
                  type="submit"
                  className={
                    hideSubmitButton
                      ? "btn btn-primary register disabled"
                      : "btn btn-primary register"
                  }
                  disabled={isSubmitting}
                >
                  Submit
                  {isSubmitting && (
                    <RotatingLines
                      strokeColor="white"
                      strokeWidth="3"
                      animationDuration="1"
                      width="20"
                      visible={true}
                    />
                  )}
                </button>
              </Col>
            </Row>
            {/* {error && <p className="text-danger">{error}</p>} */}
          </form>
        ) : (
            <div className="mt-5 text-center mb-5">
            <h3 className="fs-4">
              Thank you for your interest in Nautilus Shipping.
            </h3>
            <h3 className="fs-4">
              We will get in touch with you as soon as possible.
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default OnshoreCareerForm;
