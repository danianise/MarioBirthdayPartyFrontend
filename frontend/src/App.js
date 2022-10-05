import logo from './logo.svg';
import './App.css';
import Images from './components/Images';
import RSVPForm from './components/RSVPForm';
import Background from './components/Background';
import {useState} from 'react'

function App() {

  const [showForm, setShowForm] = useState(false)

  const seeForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div className="App">
      <Background />
      <Images />
      <div className='description'>
        <h3>your spirit has been summoned</h3>
        <h1>to Oscar Hoey's<br />Spooky 3rd Birthday Party</h1>
        <p>costumes encouraged</p>
        <hr />
        <p>Saturday, November 5 at 2pm</p>
        <p>102 Pratt St<br />Lunenburg, MA</p>
        <p>Please<br />
          <button onClick={seeForm}>RSVP</button><br />
          by October 15
        </p>
      </div>
      {showForm && (
        <RSVPForm />
      )}
      
    </div>
  );
}

export default App;
