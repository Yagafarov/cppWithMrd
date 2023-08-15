import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../App.css';
import { Col, Form, Row } from 'react-bootstrap';

const Write = () => {
  const [value, setValue] = useState('');
  const modules = {
    toolbar: [
      [{ 'header': [1, 2,3,4,5,6, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      ['code'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{ 'align': [] }],
      [{'color':[]}],
      [{ 'background': [] }],['clean'],
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image','code','color'
  ]
  

  return (
    <>
    <Row>
            <Col xs={12} md={6}>
              <Form.Label htmlFor="title">Mavzu</Form.Label>
              <Form.Control
                type="text"
                id="title"
                aria-describedby="title"
                className='mb-3'
              />
            </Col>
            <Col xs={12} md={6}>
              <Form.Label htmlFor="title">Mavzu link</Form.Label>
              <Form.Control
                type="text"
                id="title"
                aria-describedby="title"
                className='mb-3'
              />
            </Col>
          </Row>
    <ReactQuill className='editor' value={value} onChange={setValue} modules={modules} formats={formats} />
    </>
  );
};

export default Write;
