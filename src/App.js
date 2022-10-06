import TopPanel from './files/TopPanel/TopPanel.js';
import BottomPanel from './files/BottomPanel/BottomPanel.js';
import HomeContent from './files/IndexPage/HomeContent.js';
import About from './files/IndexPage/About.js';
import Faq from './files/IndexPage/Faq.js';
// import Login from './files/Login/Login.js';

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

function renderTopPanel(){
   {/* { currentURL !== 'webpage without top panel'  ? renderTopPanel() : ''
            if (currentURL !== 'webpage without top panel') {
                return ''
            } else {
                return <TopPanel />
            }
        } */}

  return <TopPanel />
}

function renderBottomPanel(){
  {/* { currentURL !== 'webpage without top panel'  ? renderTopPanel() : ''
           if (currentURL !== 'webpage without top panel') {
               return ''
           } else {
               return <TopPanel />
           }
       } */}

 return <BottomPanel />
}

function App() {
  return (
    <Router>
        {renderTopPanel()}
        <Switch>
          <Route exact path='/index' element={<HomeContent />}/>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/faq' element={<Faq />} />
          {/* <Route exact path='/login' element={<Login />} /> */}
          {/* <Route exact path='/register' element={<SignUp />} /> */}
        </Switch>
        {renderBottomPanel()}
    </Router>
  );
}

export default App;