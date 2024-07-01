// components/ContactForm.js

import { useState } from 'react';
import axios from 'axios';
import { Col, Row, Container } from 'react-bootstrap'
import { RotatingLines } from 'react-loader-spinner'
import server from '../config.json'

const ContactForm = ({ customTitle  }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        businessEmail: '',
        subject: '',
        message: '',
    });
    const isBlank = (str) => {
        return !str.trim();
    };


    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [formVisible, setFormVisible] = useState(true);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (isBlank(formData.firstName)) {
            setError('Please enter your name.');
            setIsSubmitting(false);
            return;
        }
       

        if (isBlank(formData.businessEmail)) {
            setError('Please enter a valid Email.');
            setIsSubmitting(false);
            return;
        }

        if (isBlank(formData.subject)) {
            setError('Please enter a subject.');
            setIsSubmitting(false);
            return;
        }
        if (isBlank(formData.message)) {
            setError('Please enter a message.');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await axios.post(
                `${server.SERVER_FROM}contact-form-7/v1/contact-forms/8565/feedback`,
                formData,
                 {
                    headers: {
                        "Content-Type": 'multipart/form-data',
                    }
        
         
        });
            console.log(response.data.status);
            if (response.data.status === 'mail_sent') {
                setFormVisible(false); // Hide the form
                setSuccessMessage('Thank you for your submission!');
            } else {
                setError('An error occurred. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }

        setIsSubmitting(false);
    };

    return (
<div className="form-bg">

  {formVisible ? (           

<form onSubmit={handleSubmit} encType='multipart/form-data'>
<Row>
<Col>
<div className="mb-3">                                
<input
type="text"
name="firstName"
className="form-control"
id="firstName"
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
id="designation"                                
placeholder="Email"
value={formData.businessEmail}
onChange={handleChange}
/></div>
</Col>
</Row>
<Row>
<Col>
<div className="mb-3">
<input
type="text"
name="subject"
className="form-control"
id="subject"                                 
placeholder="Subject"
value={formData.subject}
onChange={handleChange}
/></div>                            
</Col>
</Row>
<Row>
<Col sm={12}>
<div className="mb-3">
<textarea
type="text"
name="message"
className="form-control"
id="message"                                 
placeholder="Message"
value={formData.message}
onChange={handleChange}
rows="4" cols="50"                                 
/>                          
</div>                                
</Col>
</Row>
<Row><Col sm={12}>
<button type="submit" className="btn btn-primary register" disabled={isSubmitting}>
Send Message
                            { isSubmitting &&
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="3"
                                    animationDuration="1"
                                    width="20"
                                    visible={true}
                                />
                            }
</button>
                   
                    </Col></Row>
{error && <p className="error">{error}</p>}
</form>
            ) : (
<Container className="mt-5">
<h3 className="fs-4">Thank you for your interest in Nautilus Shipping.</h3>
<h3 className="fs-4">We will get in touch with you as soon as possible.</h3>
                        
</Container>
            )}
</div>
    );
};

export default ContactForm;
