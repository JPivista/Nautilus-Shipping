import React, { useState } from 'react';
import axios from 'axios';
import { Col, Row, Form } from 'react-bootstrap';
import { RotatingLines } from 'react-loader-spinner';
import server from '../config.json'

const ContactForm = ({ subject }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    businessEmail: '',
    subject: subject,
    phone: '',
    address: '',
    city: '',
    country: '',
  });

  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [formVisible, setFormVisible] = useState(true);

  const isBlank = (str) => {
    return !str.trim();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (isBlank(formData.firstName) || isBlank(formData.businessEmail) || isBlank(formData.phone) || isBlank(formData.address) || isBlank(formData.city) || isBlank(formData.country)) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      if (file) {
        formDataToSend.append('resume', file);
      }

      const response = await axios.post(
        `${server.SERVER_FROM}contact-form-7/v1/contact-forms/8578/feedback`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
        //console.log(response)
      if (response.data.status === 'mail_sent') {
        setFormVisible(false); // Hide the form
        setSuccessMessage(true);
      } else {
        setError('An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }

    setIsSubmitting(false);
  };

    return (
        <>
    {successMessage ? '' : (<h3>Submit a CV/Resume:</h3>)}              
    <div className="form-bg mb-5">
      {formVisible ? (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Row>
            <Col>
              <div className="mb-3">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="Full Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
            </Col>
                  </Row>
                  
                  <Row>
            <Col>
              <div className="mb-3">
                <input
                  type="text"
                  name="businessEmail"
                  className="form-control"
                  placeholder="Email"
                  value={formData.businessEmail}
                  onChange={handleChange}
                />
              </div>
            </Col>
                  </Row>
                  <Row>
            <Col>
              <div className="mb-3">
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </Col>
                  </Row>
                  <Row>
            <Col>
              <div className="mb-3">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </Col>
                  </Row>
                  <Row>
            <Col>
              <div className="mb-3">
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </Col>
                  </Row>
                  <Row>
            <Col>
              <div className="mb-3">
                <input
                  type="text"
                  name="country"
                  className="form-control"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
            </Col>
          </Row>
          
          <Row>
                            <Col sm={12}>
     <Form.Group controlId="formFile" className="mb-3">
        <Form.Control type="file" onChange={handleFileChange} className="custom-file-input"/>
      </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <button type="submit" className="btn btn-primary register" disabled={isSubmitting}>
                Submit
                {isSubmitting && (
                  <RotatingLines strokeColor="white" strokeWidth="3" animationDuration="1" width="20" visible={true} />
                )}
              </button>
            </Col>
          </Row>
          {error && <p className="error">{error}</p>}
        </form>
      ) : (
        <div className="mt-5 text-center mb-5">
          <h3 className="fs-4">Thank you for your interest in Nautilus Shipping.</h3>
          <h3 className="fs-4">We will get in touch with you as soon as possible.</h3>
        </div>
          )}
         
                      </div>
           
            </>
  );
};

export default ContactForm;