import React, { Component } from 'react'

class ContactUs extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        firstNameErr: '',
        lastNameErr: '',
        emailErr: '',
        phoneErr: ''
    }

    handleChange = (e) => {
        console.log(e.target)
        const { name, value } = e.target

        this.setState({ [name]: value })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.validation()
    }

    validation = () => {
        // firstName < 4 char
        // lastName < 1 
        // email "@"
        // phone
        let firstNameErr = '';
        let lastNameErr = '';
        let emailErr = '';
        let phoneErr = '';

        if (this.state.firstName.length < 4) {
            firstNameErr = 'firstName should have 4 char'
        }

        if (this.state.lastName.length < 1) {
            lastNameErr = 'lastName should have 1 char'
        }

        if (!this.state.email.includes('@')) {
            emailErr = 'Enter valid Email'
        }

        if (this.state.phone.length !== 10) {
            phoneErr = 'Enter valid phone number'
        }

        if (firstNameErr || lastNameErr || emailErr || phoneErr) {
            this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr })
        } else {
            this.setState({ firstNameErr, lastNameErr, emailErr, phoneErr })
        }

    }

    render() {
        return (
            <div>
                <h2>ContactUs</h2>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <form>
                            <div className='mt-2'>
                                <input type="text" placeholder='Enter firstName'
                                    className='form-control'
                                    onChange={(e) => { this.handleChange(e) }}
                                    value={this.state.firstName}
                                    name='firstName'
                                />
                                <p className='text-danger'>{this.state.firstNameErr}</p>
                            </div>
                            <div className='mt-2'>
                                <input type="text" placeholder='Enter lastName'
                                    className='form-control'
                                    onChange={(e) => { this.handleChange(e) }}
                                    value={this.state.lastName}
                                    name='lastName'
                                />
                            </div>

                            <div className='mt-2'>
                                <input type="text" placeholder='Enter Email'
                                    className='form-control'
                                    onChange={(e) => { this.handleChange(e) }}
                                    value={this.state.email}
                                    name='email'
                                />
                            </div>

                            <div className='mt-2'>
                                <input type="text" placeholder='Enter phone'
                                    className='form-control'
                                    onChange={(e) => { this.handleChange(e) }}
                                    value={this.state.phone}
                                    name='phone'
                                />
                            </div>

                            <div className='mt-3'>
                                <button className='btn btn-primary'
                                    onClick={(e) => { this.handleSubmit(e) }}
                                >Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        )
    }
}

export default ContactUs