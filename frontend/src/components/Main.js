import React, {useState} from 'react'
import RSVPEmail from './RSVPEmail'
import DeclineEmail from './DeclineEmail'
import Header from './Header'

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
      <Header />
      <div className='description'>
      {showResponseForm || showDeclineForm 
        ? ""
        : <div>
            <h2 className='join_us'>Join us for a video game party!</h2>
            {/* <div id='images'>
              <img alt='Mario' src='Mario.png' id='Mario'/>
              <img alt='Luigi' src='Luigi.png' id='Luigi'/>
            </div> */}
            <h3 className='date'>
              Saturday, April 19 2:00-4:00 PM<br/>
              102 Pratt St, Lunenburg, MA
            </h3>
            <div className='buttonsContainer'>
              <div className='buttons'  onClick={seeResponseForm}>
                <img className='accept_img' src='accept.webp'/>
                Accept
              </div>
              <span> OR </span>
              <div className='buttons'  onClick={seeDeclineForm}>
                <img className='decline_img' src='decline.png'/>
                Decline
              </div>
            </div>
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