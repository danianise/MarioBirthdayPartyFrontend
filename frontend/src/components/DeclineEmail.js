import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
// import '../css/ContactForm.css'
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom'

export const DeclineEmail = () => {

  const location = useLocation()
  const {pathname} = location
  let title = pathname.substr(1, pathname.length)
  console.log(title)

  const SERVICE_ID = "service_1orsrnr";
  const TEMPLATE_ID = "template_7taghzj";
  const USER_ID = "Fu7cNyKZuJb1UyamB";

  const form = useRef()

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // const form = useRef()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'RSVP received, we will miss you!'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  }

  return (<div className="declineForm">
        <a className='backButton' href='/'>
            <button>Back to Invitation</button>
        </a>
        <h3>Sorry... Can't make it!</h3>
        <h3 style={{color: 'red'}}>(Game Over)</h3>
    <div className='contactForm'>
      <Form
       onSubmit={handleOnSubmit}
       ref={form}
      >
        
        <Form.Field
          id='form-input-control-no'
          control={Input}
          type='hidden'
          name='decline'
          value='DECLINE'
        //   icon='user circle'
        //   iconPosition='left'
        />
        <Form.Field
          id='form-input-control-name'
          control={Input}
        //   label='Name'
          name='from_name'
          placeholder='Name…'
          required
        //   icon='user circle'
        //   iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-message'
          control={TextArea}
        //   label='Briefly describe why you need dog training'
          name='message'
          placeholder='Message (optional)'
          required
        />
        <Button type='submit' color='black'>Submit</Button>
      </Form>
    </div>
  </div>)
}

export default DeclineEmail