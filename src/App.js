import TopPanel from './files/IndexPage/Panels/TopPanel.js';
import BottomPanel from './files/IndexPage/Panels/BottomPanel.js';
import HomeContent from './files/IndexPage/HomeContent.js';
import About from './files/IndexPage/About.js';
import Faq from './files/IndexPage/Faq.js';
// import DBTopPanel from './files/Dashboard/DashboardPanels/DBTopPanel.js';
// import DBSidePanel from './files/Dashboard/DashboardPanels/DBSidePanel.js';
// import Dashboard from './files/Dashboard/Dashboard.js';

// import Login from './files/Login/Login.js';
// import SignUp from './files/SignUp/SignUp.js';

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";

function renderTopPanel(){
  
  return <TopPanel />
}

function renderBottomPanel(){
  
  return <BottomPanel />
}

function App() {
  return (
    <Router>
      {/* <DBTopPanel />
      <DBSidePanel /> */}
      {window.location.pathname !== "/login" ? <TopPanel/> : ''}
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Switch>
        <Route exact path='/' element={<HomeContent />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/faq' element={<Faq />} />
      </Switch>
      {window.location.pathname !== "/login" ? <BottomPanel/> : ''}
    </Router>
  );
}

export default App;