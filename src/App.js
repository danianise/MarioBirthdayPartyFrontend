import logo from './logo.svg';
import './App.css';
import Corners from './components/Corners';
import RSVPForm from './components/RSVPForm';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
      <Background />
      <Corners />
      <h3>join us for</h3>
      <h1>Oscar Hoey's 3rd Birthday Party</h1><hr />
      <p>Saturday, November 5 at 2pm</p>
      <RSVPForm />
      
    </div>
  );
}

export default App;
