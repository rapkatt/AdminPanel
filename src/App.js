import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Home from './components/Home';




class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
            <Route exact path='/' component={Home} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          
        </BrowserRouter>
      </div>
    );
  }
}

export default App;