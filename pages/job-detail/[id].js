// pages/job/[id].js
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Col, Container, Row, Form } from 'react-bootstrap';
import axios from 'axios';
import configData from '../../config.json';
import { format } from 'date-fns';
import { useState } from 'react';
import ContactForm from '../../utils/CareerForm';
import Robots from '../../utils/robots'

const JobDetail = ({ data }) => {
  const [success, setSuccess] = useState(true);
  const [file, setFile] = useState(null);
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();

      // Append additional form fields to the FormData
      for (const key in formData) {
        formData.append(key, formData[key]);
      }

      formData.append('resume', file);

      try {
        const response = await fetch(`${configData.SERVER_FROM}contact-form-7/v1/contact-forms/8578/feedback`, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          setSuccess(false);
          setPost('Your resume has been sent successfully');
          setLoading(true);
        } else {
          console.error('File upload failed');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <>
      <Head>
        <title>{data[0].acf.rank} - Job Detail</title>
        <Robots/>
      </Head>
      <Header />
      <Container key={data[0].id}>
        <h1 className="mt-5">Job Detail</h1>
        <hr />
        {data.map((post) => (
          <div key={post.id}>
            <Row>
              <Col>
                <h2>{post.acf.rank}</h2>
                <Row>
                  <Col>
                    <p>Job ID:</p>
                  </Col>
                  <Col>
                    <p>{post.acf.job_id}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Date Posted:</p>
                  </Col>
                  <Col>
                    <p>{format(new Date(post.date), 'dd/MM/yyyy')}</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Joining Date:</p>
                  </Col>
                  <Col>
                    <p>
                      {post.acf.joining_date}/{post.acf.type_of_vessel}
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col>
                <h2>Position Description:</h2>
                <Row>
                  <Col>
                    <p>{post.acf.position_description}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr />

            <ContactForm subject={post.acf.rank}/>
          </div>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default JobDetail;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`${configData.SERVER_URL}job?_embed&slug=${id}`);
  const data = await res.json();
  return { props: { data } };
}