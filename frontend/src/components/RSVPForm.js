import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function RSVPForm() {

    const initialState = {
        name: "",
        guest_count: "",
        message: ""
    }
    const [formState, setFormState] = useState(initialState)
    const navigate = useNavigate()

    const handleChange = event => {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    const csrftoken = getCookie('csrftoken');

    const handleSubmit = event => {
        event.preventDefault()
        //do something with the data in the component state
        console.log(formState)

        const url = process.env.REACT_APP_DB_URL + '/responses/'
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(formState),
            // credentials : 'include'
        }

        fetch(url, options)
            .then(res => {
                if(!res.ok){
                throw Error(res.status)
                }
                res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
            navigate('/accepted')
            setFormState(initialState)
    }

  return (
    <div className='RSVPform'>
        <a className='backButton' href='/'>
            <button>Back to Invitation</button>
          </a>
        <h2 style={{color: '#FBD000'}}>
          Here We Go!
        </h2>
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor='name'>
                Your Name:
            </label> */}
            <input
                placeholder='Your Name'
                id='name'
                type='text'
                onChange={handleChange}
                value={formState.name}
            />
            <br />

            {/* <div className='guestCount'> */}
                <input
                    placeholder="How many adults?"
                    id='adult_count'
                    type='text'
                    onChange={handleChange}
                    value={formState.adult_count}
                />
                &nbsp;
                <input
                    placeholder="How many kids?"
                    id='kids_count'
                    type='text'
                    onChange={handleChange}
                    value={formState.kids_count}
                />
            {/* </div> */}
            <br />

            {/* <label htmlFor='message'>Leave a Message for the Hoeys:</label> */}
            <textarea
              id='message'
              placeholder='Leave a Message (Optional)'
              onChange={handleChange}
              type='text'
              value={formState.message}  
            />
            <br />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default RSVPForm