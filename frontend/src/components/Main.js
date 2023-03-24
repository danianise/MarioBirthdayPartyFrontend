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
        : <>
            <h3>Jeffrey Hoey has LEVELED UP to age 6!</h3>
            <div id='images'>
              <img alt='Mario' src='Mario.png' id='Mario'/>
              <img alt='Luigi' src='Luigi.png' id='Luigi'/>
            </div>
            <h2>Join us for a<br />Super 6th Birthday Party</h2>
            {/* <h3>costumes encouraged</h3> */}
            {/* <hr /> */}
            {/* <img alt='Yoshi' src='Yoshi.png' id='Yoshi'/> */}
            <h3>Saturday, April 29<br /><br />1-2:30pm</h3>
            <hr/>
            <h3>Ninja Academy New England<br />321 Massachusetts Ave, Lunenburg, MA</h3>
          </>
          
      }
          <h3>
            Please
            <br /><br />
            <div className='buttonsContainer'>
              <div className='buttons'  onClick={seeResponseForm}>
                <img className='greenMushroom' src='greenMushroom.webp'/>
                  Accept
              </div>
              <span style={{fontSize: '10px'}}> OR </span>
              <div className='buttons'  onClick={seeDeclineForm}>
                <img className='redMushroom' src='redMushroom.webp'/>
                Decline
              </div>
            </div>
            <br /><br />
            by April 15
          </h3>
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