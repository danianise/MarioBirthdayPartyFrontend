import logo from './logo.svg';
import './App.css';
import Images from './components/Images';
import RSVPForm from './components/RSVPForm';
import DeclineForm from './components/DeclineForm';
import Background from './components/Background';
import {useState} from 'react'

function App() {

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
    <div className="App">
      <Background />
      <Images />
      <div className='description'>
        <h2>your spirit has been summoned</h2>
        <h1>to Oscar Hoey's<br />Spooky 3rd Birthday Party</h1>
        <h3>costumes encouraged</h3>
        <hr />
        <h2>Saturday, November 5 at 2pm</h2>
        <h2>102 Pratt St<br />Lunenburg, MA</h2>
        <h2>Please<br />
          <button onClick={seeResponseForm}>RSVP</button>
          <span style={{fontSize: '10px'}}> OR </span>
          <button onClick={seeDeclineForm}>Decline</button>
          <br />
          by October 15
        </h2>
      </div>
      {showResponseForm && (
        <RSVPForm />
      )}
      {showDeclineForm && (
        <DeclineForm />
      )}
      
    </div>
  );
}

export default App;
