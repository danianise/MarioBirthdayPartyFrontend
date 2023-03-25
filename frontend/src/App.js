import './App.css';
import { Route, Routes } from "react-router-dom" 

import Main from './components/Main';
import YesConfirmation from './components/YesConfirmation';
import DeclineConfirmation from './components/DeclineConfirmation';

function App() {

  return (
  <div class="demo-wrap">
    <div class="demo-content">

      <div className="App">
        {/* <Background /> */}
        {/* <Images /> */}
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/accepted' element={<YesConfirmation />} />
          <Route path='/declined' element={<DeclineConfirmation />} />
        </Routes>
      </div>
    </div>
  </div>
  );
}

export default App;
