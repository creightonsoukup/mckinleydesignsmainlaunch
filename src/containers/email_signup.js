import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Button, Form, Input } from 'reactstrap';
import { addSubscriber } from '../actions/index'

class EmailSignup extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      email: '',
      name: ''
    })

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)

  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addSubscriber(this.state.name, this.state.email)
      .then((data) => {
        console.log(data)
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
      <div>
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
          <Button
          type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default connect(null, { addSubscriber} )(EmailSignup)
