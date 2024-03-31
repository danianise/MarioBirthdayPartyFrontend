import React, {useState} from 'react'

import RSVPForm from './RSVPForm'
import DeclineForm from './DeclineForm'

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
            <h4>Join us for a Super 7th Birthday Party</h4>
            <div id='images'>
              <img alt='Mario' src='Mario.png' id='Mario'/>
              <img alt='Luigi' src='Luigi.png' id='Luigi'/>
            </div>
            <h5>Saturday, April 27 2:30-4:30 PM<br/><br/>
            Fliptastics Gymnastics<br />16 Benson St, Fitchburg, MA</h5>
          </div>
          
      }
          <h6>
            Please
            <div className='buttonsContainer'>
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
            by April 15
          </h6>
        </div>
        
      {showResponseForm && (
        <RSVPForm />
      )}
      {showDeclineForm && (
        <DeclineForm />
      )}  
      {/* <div id='images'>
        <img alt='Mario' src='Mario.png' id='Mario'/>
        <img alt='Luigi' src='Luigi.png' id='Luigi'/>
      </div> */}
    </div>
    </>
  )
}

export default Main