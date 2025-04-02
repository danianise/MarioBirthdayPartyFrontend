import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
// import '../css/ContactForm.css'
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom'

export const RSVPEmail = () => {

  const location = useLocation()
  const {pathname} = location
  let title = pathname.substr(1, pathname.length)
  console.log(title)

  const SERVICE_ID = "service_1orsrnr";
  const TEMPLATE_ID = "template_7taghzj";
  const USER_ID = "Fu7cNyKZuJb1UyamB";

  const form = useRef()

  const handleOnSubmit = (e) => {
    // e.preventDefault();
    // const form = useRef()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: "RSVP received, can't wait to see you!"
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
    // location.reload()
  }

  return (<div className="RSVPForm">
        <a className='backButton' href='/'>
            <button>Back to Invitation</button>
          </a>
        <h2>
          Here We Go!
        </h2>
    <div className='contactForm'>
      <Form
       onSubmit={handleOnSubmit}
       ref={form}
      >
        
        <Form.Field
          id='form-input-control-yes'
          control={Input}
          type='hidden'
          name='accept'
          value='ACCEPT'
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
          id='form-input-control-adults'
          control={Input}
        //   label='Adults'
          name='how_many_adults'
          placeholder='How many adults?'
          required
        //   icon='mail'
        //   iconPosition='left'
        />
        <Form.Field
          id='form-input-control-kids'
          control={Input}
        //   label='Phone Number'
          name='how_many_kids'
          placeholder='How many kids?'
          required
        //   icon='phone'
        //   iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-message'
          control={TextArea}
          name='message'
          placeholder='Message (optional)'
          required
        />
        <Button type='submit' color='black'>Submit</Button>
      </Form>
    </div>
  </div>)
}

export default RSVPEmail