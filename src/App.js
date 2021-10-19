
import './App.css';

import { BrowserRouter, Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NotFound from './NotFound/NotFound';
import Login from './Components/Login/Login';
import Authprovider from './context/Authprovider';

import Services from './Components/Service/Services';
import Register from './Components/Register/Register';

function App() {
  return (
    <div className="App">
    <Authprovider>
    <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <Home></Home>
      </Route>
      <Route path='/home'>
        <Home></Home>
      </Route>
      <Route path='/details/:serviceId'>
        <About></About>
      </Route>
      <Route path='/about'>
        <About></About>
      </Route>
      <Route path="/register">
        <Register></Register>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/service">
        <Services></Services>
      </Route>
      <Route path='*'>
        <NotFound></NotFound>
      </Route>
    </Switch>
    
    </BrowserRouter>
    </Authprovider>
    </div>
  );
}

export default App;
