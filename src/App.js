
import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Work from './pages/Work/Work';
import Navbar from './components/Navbar';
import About from './components/About/About';
function App() {
  return (

    <Router>
      <Navbar/>
    <Switch>
    <Route path='/' component={Home} exact/>
    <Route path='/about' component={About} />
    <Route path='/work' component={Work} />
    </Switch>
    </Router>
  );
}

export default App;
