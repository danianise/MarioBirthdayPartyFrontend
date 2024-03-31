import React, {useState} from 'react'
import RSVPEmail from './RSVPEmail'
import DeclineEmail from './DeclineEmail'

function Main() {

  const [showResponseForm, setShowResponseForm] = useState(false)
  const [showDeclineForm, setShowDeclineForm] = useState(false)

  const seeResponseForm = () => {
    setShowResponseForm(!showResponseForm);
    setShowDeclineForm(false)
  }
  const seeDeclineForm = () => {
    setShowDeclineForm(!showDeclineForm);
    setShowResponseForm(false)
  }


  return (
    <>
    <div className='main'>
      <div className='description'>
      {showResponseForm || showDeclineForm 
        ? ""
        : <div>
            <h4 className="desktop">Join us for a Super 7th Birthday Party</h4>
            <div id='images'>
              <img alt='Mario' src='Mario.png' id='Mario'/>
              <img alt='Luigi' src='Luigi.png' id='Luigi'/>
            </div>
            <h5 className="date">Saturday, April 27 2:30-4:30 PM<br/><br/>
            Fliptastics Gymnastics<br />16 Benson St, Fitchburg, MA</h5>
            <h6 className='date'>
            Please
            <div className='buttonsContainer date'>
              <div className='buttons'  onClick={seeResponseForm}>
                <img className='greenMushroom' src='greenMushroom.webp'/>
                  Accept
              </div>
              <span> OR </span>
              <div className='buttons'  onClick={seeDeclineForm}>
                <img className='redMushroom' src='goomba.svg'/>
                Decline
              </div>
            </div>
            by April 20
          </h6>
          </div>
          
          
      }
          
        </div>
        
      {showResponseForm && (
        <div className="RSVP">
          <RSVPEmail />
        </div>
      )}
      {showDeclineForm && (
        <div className="decline">
        <DeclineEmail />
        </div>
      )}  
    </div>
    </>
  )
}

export default Main