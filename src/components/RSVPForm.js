import React, {useState} from 'react'

function RSVPForm() {

    const initialState = {
        name: "",
        guestCount: "",
        message: ""
    }
    const [formState, setFormState] = useState(initialState)

    const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault()
        //do something with the data in the component state
        console.log(formState)
        //clear the form
        setFormState(initialState)
        //redirect to a thank you component
    }

  return (
    <div className='RSVPform'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>
                Your Name:
            </label>
            <input
                id='name'
                type='text'
                onChange={handleChange}
                value={formState.name}
            />
            <br />

            <label htmlFor='guestCount'>
                How many people will be coming? <br /> (include yourself!)
            </label>
            <input
                id='guestCount'
                type='number'
                onChange={handleChange}
                value={formState.guestCount}
            />
            <br />

            <label htmlFor='message'>Leave a Message for the Hoeys:</label>
            <textarea
              id='message'
              placeholder='(Optional)'
              onChange='handleChange'
              type='text'  
            />
            <br />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default RSVPForm