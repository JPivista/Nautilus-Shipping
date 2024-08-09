import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Row, Form } from 'react-bootstrap';
import { RotatingLines } from 'react-loader-spinner';
import server from '../config.json'
import { Country, State, City } from 'country-state-city';
import { useRouter } from 'next/router'


const ContactForm = ({ subject }) => {
  const [yourState, setState] = useState(null);
  const [yourCity, setCity] = useState(null);
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [fileErrors, setFileErrors] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [selectCountry, SetSelectCountry] = useState('IN');
  const [selectState, SetSelectState] = useState('KA');
  const [hideSubmitButton, setHideSubmitButton] = useState(true)
  const [selectedVessel, setSelectedVessel] = useState('');
  const [positions, setPositions] = useState([]);
  const [newposition, setPosition] = useState('');
  const router = useRouter();
  const { utm_source, utm_medium, utm_campaign, utm_id } = router.query;
  const query = router.query;

  const vessel = [
    {
      'id': '1',
      'vessel_name': 'LPG Tanker'
    },
    {
      'id': '2',
      'vessel_name': 'Mini Bulk Carrier'
    },
    {
      'id': '3',
      'vessel_name': 'Crude Oil Tanker (Suezmax)'
    },
    {
      'id': '4',
      'vessel_name': 'Panamax Bulk Container'
    },
    {
      'id': '5',
      'vessel_name': 'Ethylene Carrier'
    },
    {
      'id': '6',
      'vessel_name': 'General Bulk Carrier'
    },
    {
      'id': '7',
      'vessel_name': 'Container Vessel'
    },

  ]

  const position = [

  ]

  const [formData, setFormData] = useState({
    firstname: '',
    contactNo: '',
    email: '',
    state: '',
    city: '',
    indosNo: '',
    vessel: '',
    position: '',
    resume: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
  });


  const handleStateChange = (event) => {
    // Call the parent component's onChange function with the selected value
    const selectedValue = event.target.value;
    const selectedOption = event.target.options[event.target.selectedIndex];
    // Get the label (text) of the selected option
    const selectedLabel = selectedOption.text;
    //alert(selectedValue);
    SetSelectState(selectedValue)
    setState(selectedLabel)
    //console.log(selectedLabel)
  };

  const handleCityChange = (event) => {
    // Call the parent component's onChange function with the selected value
    const selectedValue = event.target.value;
    const selectedOption = event.target.options[event.target.selectedIndex];
    // Get the label (text) of the selected option
    const selectedLabel = selectedOption.text;
    // alert(selectedValue);
    // SetSelectState(selectedValue)
    setCity(selectedLabel)
    //console.log(selectedLabel)
  };

  const handleVesselChange = (e) => {
    const vesselId = e.target.value;
    const selectedOption = e.target.options[e.target.selectedIndex];
    setSelectedVessel(selectedOption.text);
    //console.log(selectedOption.text)
    //alert(selectedOption.text);
    // Retrieve positions based on vesselId
    switch (vesselId) {
      case '1':
        setPositions(['Chief Officer', 'Chief Engineer', 'Master', '2nd Engineer']);
        setPosition('')
        break;
      case '2':
        setPositions(['NCV Master', 'NCV Mate', 'NWKO/2nd Officer', 'NCV Chief Engineer', 'NCV 2nd Engineer']);
        setPosition('')
        break;
      case '3':
        setPositions(['Chief Officer', '2nd Officer', '3rd Officer', 'Chief Engineer', '2nd Engineer', '4th Engineer', 'Oiler', 'Electrical Officer (ETO)']);
        setPosition('')
        break;
      case '4':
        setPositions(['Master', 'Chief Officer', '2nd Officer', '3rd Officer', '2nd Engineer', '3rd Engineer', '4th Engineer', 'AB (Able Bodied Seaman)', 'Electrical Officer (ETO)'])
        setPosition('')
        break;
      case '5':
        setPositions(['Chief Officer', '2nd Officer', '3rd Officer', 'Chief Engineer', '2nd Engineer', '3rd Engineer', '4th Engineer', 'Junior Engineer', 'Electrical officers (ETO)', 'ABs (Able Bodied Seaman)'])
        setPosition('')
        break;
      case '6':
        setPositions(['3rd Officer', '3rd Engineer', '4th Engineer', 'ABs (Able Bodied Seaman)', 'Oiler', 'Fitter', 'Ratings', 'Electrical Officer (ETO)'])
        setPosition('')
        break;
      case '7':
        setPositions(['3rd Officer', '2nd Engineer', '4th Engineer'])
        setPosition('')
        break;
      default:
        setPositions([]);
        setPosition('')
    }
  };
  const handlePositionChange = (e) => {
    const position = e.target.value;
    // console.log(position)
    setPosition(position)

  }


  const stateData = State.getStatesOfCountry(selectCountry).map(state => ({
    value: state.value,
    displayValue: state.name,
    innerValue: state.isoCode
  }));
  const cityData = City.getCitiesOfState(selectCountry, selectState).map(city => ({
    CityValue: city.value,
    CityValue: city.name,
  }))


  const isBlank = (str) => {
    return !str.trim();
  };
  //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  const customErrors = {
    field: 'email',
    message: 'Please enter a valid email address.'
  }
  const customDomainErrors = {
    field: 'email',
    message: 'This email domain is not allowed.'
  }
  const customPhoneErrors = {
    field: 'contactNo',
    message: 'Please enter only numbers.'
  }

  const notAllowedDomains = ['test.com', 'sample.com', 'example.com', 'testing.com'];
  function isValidEmail(email) {
    const [_, domain] = email.split('@');
    return notAllowedDomains.includes(domain);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate if the input is for the contact number
    if (name === "contactNo") {
      // Check if the value contains only numbers
      if (!/^\d+$/.test(value)) {
        // If the value contains non-numeric characters, show an alert
        const fieldErrors = {}
        const { field, message } = customPhoneErrors;
        fieldErrors[field] = message;
        setErrors(fieldErrors);
        //alert('Please enter only numbers.');
        return; // Stop further processing
      }
      else {
        setErrors('');
      }
    }

    if (e.target.name === "email") {
      if (!emailRegex.test(e.target.value)) {
        //console.log("enter valid email address")
        const fieldErrors = {}
        const { field, message } = customErrors;
        fieldErrors[field] = message;
        setErrors(fieldErrors);
        //alert('valid email enter')
      }
      else {
        //console.log("email is valid")
        setErrors('');
      }
      if (isValidEmail(e.target.value)) {
        //console.log('Email domain is not allowed');
        const fieldErrors = {}
        const { field, message } = customDomainErrors;
        fieldErrors[field] = message;
        setErrors(fieldErrors);
      } else {
        //console.log('Email domain is allowed');
        setHideSubmitButton(true);
      }
    }
    if (name === "indosNo") {
      // Check if the value is numeric and exactly 8 digits
      if (!/^\d{8}$/.test(value)) {
        const fieldErrors = {};
        fieldErrors[name] = "INDoS No. must be exactly 8 digits.";
        setErrors(fieldErrors);
      } else {
        setErrors({});
      }
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const customFileErrors = {
    field: 'resume',
    message: 'Invalid file type. Allowed types are PDF, DOC, DOCX,RTF and TXT.'
  }
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      // Check file extension
      const allowedExtensions = ['pdf', 'doc', 'docx', 'rtf', 'txt'];
      const fileExtension = selectedFile.name.split('.').pop().toLowerCase();
      if (allowedExtensions.includes(fileExtension)) {
        // Valid file type
        setHideSubmitButton(false);
        setErrors('');
      } else {
        // Invalid file type
        const fieldErrors = {}
        const { field, message } = customFileErrors;
        fieldErrors[field] = message;
        setErrors(fieldErrors);
        // alert('Error: Invalid file type. Allowed types are PDF, DOC, DOCX, and RTF.');
        setHideSubmitButton(true); // Depending on your logic, you may want to hide the submit button here
      }

      setFile(selectedFile);
    }

  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      // formDataToSend.append('state', yourState);
      // formDataToSend.append('city', yourState);
      if (yourState) {
        //console.log(yourState)
        formDataToSend.append('state', yourState);
      }
      if (yourCity) {
        //console.log(yourCity)
        formDataToSend.append('city', yourCity);
      }
      if (vessel) {
        //console.log(vessel);
        formDataToSend.append('vessel', selectedVessel);
      }
      if (position) {
        //console.log('position is here');
        formDataToSend.append('position', newposition);
      }

      if (!file) {
        //console.log('empty')
        setHideSubmitButton(true);
        setFileErrors(true);
      }
      else {
        //console.log('not empty')
        formDataToSend.append('resume', file);
        setFileErrors(false)
        setHideSubmitButton(false);
      }
      if (utm_source) {
        console.log(utm_source);
        formDataToSend.append('utm_source', utm_source);
      }
      if (utm_medium) {
        console.log(utm_medium);
        formDataToSend.append('utm_medium', utm_medium);
      }
      if (utm_campaign) {
        console.log(utm_campaign);
        formDataToSend.append('utm_campaign', utm_campaign);
      }

      const response = await axios.post(`${server.SERVER_FROM}contact-form-7/v1/contact-forms/9356/feedback`,
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
      } else if (response.data.status == 'validation_failed') {
        const fieldErrors = {};
        const { status, invalid_fields } = response.data;
        console.log(invalid_fields)
        invalid_fields.forEach((field) => {
          fieldErrors[field.field] = field.message;
        });
        setErrors(fieldErrors);
        //console.log(fieldErrors);
      } else {
        setError('An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }

    setIsSubmitting(false);
  };


  useEffect(() => {
    // Tracking code function
    const trackConversion = () => {
      window.lintrk('track', { conversion_id: 17896705 });
    };

    // Attach event listener to the submit button
    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
      submitButton.addEventListener('click', trackConversion);
    }

    // Clean up event listener on component unmount
    return () => {
      if (submitButton) {
        submitButton.removeEventListener('click', trackConversion);
      }
    };
  }, []);

  return (
    <>
      {successMessage ? '' : (<small style={{ color: '#555' }}>All fields are mandatory</small>)}
      {successMessage ? '' : (<h3>Submit a CV/Resume:</h3>)}
      <div className="form-bg mb-5">
        {formVisible ? (
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Row>
              <Col>
                <div className="mb-3">
                  <input type="text"
                    name="firstname"
                    className={`form-control ${errors && errors.firstname ? 'is-invalid' : ''}`}
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    inputProps={{ maxLength: 6 }}

                  />
                  {errors && errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <div className="mb-3">
                  <input type="phone"
                    name="contactNo"
                    maxLength="10"
                    className={`form-control ${errors && errors.contactNo ? 'is-invalid' : ''}`}
                    placeholder="Contact No."
                    value={formData.contactNo}
                    onChange={handleChange} />
                  {errors && errors.contactNo && <div className="invalid-feedback">{errors.contactNo}</div>}
                </div>
              </Col>

              <Col lg={6} sm={12}>
                <div className="mb-3">
                  <input type="email" name="email" className={`form-control ${errors && errors.email ? 'is-invalid' : ''}`}
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange} />
                  {errors && errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <div className='mb-3'>

                  <select onChange={handleStateChange}
                    id='state'
                    name='state'
                    className={`form-select form-control ${errors && errors.state ? 'is-invalid' : ''}`}
                    defaultValue={yourState}
                  >
                    <option value="">Select State</option>
                    {stateData.map((option, index) => (
                      <option key={index} value={option.innerValue} >
                        {option.displayValue}
                      </option>
                    ))}
                  </select>
                  {errors && errors.state && <div className="invalid-feedback">{errors.state}</div>}
                </div>
              </Col>

              <Col lg={6} sm={12}>
                <div className="mb-3" >
                  <select
                    className={`form-control form-select ${errors && errors.city ? 'is-invalid' : ''}`}
                    id="city"
                    name="city"
                    value={yourCity}
                    onChange={handleCityChange}>
                    <option>Select City</option>
                    {cityData.map((option, index) => (
                      <option key={index} value={option.CityValue} >
                        {option.CityValue}
                      </option>
                    ))}
                  </select>

                  {errors && errors.city && <div className="invalid-feedback">{errors.city}</div>}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <div className="mb-3" >
                  <select
                    className={`form-control form-select ${errors && errors.vessel ? 'is-invalid' : ''}`}
                    id="vessel"
                    name="vessel"

                    onChange={handleVesselChange}>
                    <option value="">Select Vessel</option>
                    {vessel.map((option, index) => (
                      <option key={index} value={option.id} >
                        {option.vessel_name}
                      </option>
                    ))}
                  </select>

                  {errors && errors.vessel && <div className="invalid-feedback">{errors.vessel}</div>}
                </div>
              </Col>
              <Col>
                <div className='mb-3'>
                  <select
                    id="position"
                    name="position"
                    className={`form-control form-select ${errors && errors.position ? 'is-invalid' : ''}`}
                    disabled={!selectedVessel}
                    onChange={handlePositionChange}
                  >
                    <option value="">Select Position</option>
                    {positions.map(position => (
                      <option key={position} value={position}>
                        {position}</option>
                    ))}
                  </select>
                  {errors && errors.position && <div className="invalid-feedback">{errors.position}</div>}
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={12}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="indosNo"
                    maxLength="8"
                    minLength="8"
                    className={`form-control ${errors && errors.indosNo ? 'is-invalid' : ''}`}
                    placeholder="INDoS No."
                    value={formData.indosNo}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                      // Allow only numeric input and some control keys
                      if (!(e.key === 'Tab' || e.key === 'Backspace' || e.key === 'Delete' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || (e.key >= '0' && e.key <= '9'))) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors && errors.indosNo && <div className="invalid-feedback">{errors.indosNo}</div>}
                </div>
              </Col>


              <Col sm={12} lg={12}>

                <div class="input-group">
                  <input type="file" name="resume" id="resume" class={`form-control ${errors && errors.resume ? 'is-invalid' : ''}
                    ${fileErrors ? 'is-invalid' : ''} `}
                    onChange={handleFileChange}
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload" />
                </div>
                {/* <Form.Group controlId="formFile" className="">
                  <Form.Control type="file" name="resume" id="resume" onChange={handleFileChange}
                    className={`custom-file-input ${errors && errors.resume ? 'is-invalid' : ''}
                    ${fileErrors ? 'is-invalid' : ''} 
                    
                    `}
                    />
                </Form.Group> */}
                <p style={{ lineHeight: '16px', fontSize: '12px' }}>Complete your job application by uploading your resume or CV. Upload either DOC, DOCX, PDF, RTF or TXT file types, 4 MB max.</p>
                {errors && errors.resume && <div className="invalid-feedback">{errors.resume}</div>}
                <div className="fs-6" style={{ color: '#b02a37' }}> {errors && errors.resume && errors.resume}</div>
                {fileErrors ? <div className="error">Please upload the resume.(doc,docx,pdf)</div> : ''}

              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={12}>
                <div className="mb-3">
                  <input type="hidden" name="utm_source" maxLength="8" className='form-control' value={utm_source} />

                </div>
              </Col>
              <Col sm={12} lg={12}>
                <div className="mb-3">
                  <input type="hidden" name="utm_medium" maxLength="8" className='form-control' value={utm_medium} />

                </div>
              </Col>
              <Col sm={12} lg={12}>
                <div className="mb-3">
                  <input type="hidden" name="utm_campaign" maxLength="8" className='form-control' value={utm_campaign} />

                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <button
                  id="submit-button"
                  type="submit" className={hideSubmitButton ? "btn btn-primary register disabled" : "btn btn-primary register"} disabled={isSubmitting}>
                  Submit
                  {isSubmitting && (
                    <RotatingLines strokeColor="white" strokeWidth="3" animationDuration="1" width="20" visible={true} />
                  )}
                </button>
              </Col>
            </Row>
            {/* {error && <p className="error">{error}</p>} */}
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