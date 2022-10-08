import TopPanel from './files/IndexPage/Panels/TopPanel.js';
import BottomPanel from './files/IndexPage/Panels/BottomPanel.js';
import HomeContent from './files/IndexPage/HomeContent.js';
import About from './files/IndexPage/About.js';
import Faq from './files/IndexPage/Faq.js';
// import DBTopPanel from './files/Dashboard/DashboardPanels/DBTopPanel.js';
// import DBSidePanel from './files/Dashboard/DashboardPanels/DBSidePanel.js';
// import Dashboard from './files/Dashboard/Dashboard.js';

import Login from './files/Login/Login.js';
import SignUp from './files/SignUp/SignUp.js';

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";


function renderTopPanel(){
  if( window.location.pathname !== "/login" && window.location.pathname !== "/register"){
    return <TopPanel />
  } else {
    return ''
  }
}

function renderBottomPanel(){
  if( window.location.pathname !== "/login" && window.location.pathname !== "/register"){
    return <BottomPanel />
  } else {
    return ''
  }
}

function App() {
  return (
    <Router>
      {/* <DBTopPanel /> */}
      {/* <div style={{display: "flex"}}> */}
      {/* <DBSidePanel />
      <Dashboard /> */}
      {/* </div> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {renderTopPanel()}
      <Switch>
          <Route index element={<HomeContent/>}/>
          <Route exact path='/about' element={<About />} />
          <Route exact path='/faq' element={<Faq />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<SignUp />} />
      </Switch>
      {renderBottomPanel()}
    </Router>
  );
}

export default App;