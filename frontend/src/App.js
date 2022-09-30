import logo from './logo.svg';
import './App.css';
import Images from './components/Images';
import RSVPForm from './components/RSVPForm';
import Background from './components/Background';

function App() {
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
          <button>RSVP</button><br />
          by October 15
        </p>
      </div>
      <RSVPForm />
      
    </div>
  );
}

export default App;
