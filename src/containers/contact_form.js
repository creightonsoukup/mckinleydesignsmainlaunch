import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button, Form, Input, Col, Row } from 'reactstrap';
import { addContactRequest } from '../actions/index'

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      name: '',
      subject: '',
      body: '',
      email: ''
    })
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addSubscriber(this.state.name, this.state.email,
    this.state.subject, this.state.body)
      .then((data) => {
        this.setState({email: '', name: ''})
      })
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='contact-form'>
        <Form onSubmit={this.handleSubmit}>
          <Input
          name='name'
          placeholder='Name'
          onChange={this.handleInputChange}
          value={this.state.name} />
          <Input
          placeholder='Email'
          onChange={this.handleInputChange}
          value={this.state.email}
          name="email" />
          <Input
          name='subject'
          placeholder='Subject'
          onChange={this.handleInputChange}
          value={this.state.subject} />
          <Input
          name='body'
          type='textarea'
          placeholder='Body'
          onChange={this.handleInputChange}
          value={this.state.body} />
          <Button
          type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default connect(null, { addContactRequest } )(ContactForm)
