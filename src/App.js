
import './App.css';
import Home from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Work from './pages/Work/Work';
import Navbar from './components/Navbar';
import About from './components/About/About';
import Travel from './pages/Travel/Travel';
import Contact from './pages/Contact/Contact';
function App() {
  return (

    <Router>
      <Navbar/>
    <Switch>
    <Route path='/' component={Home} exact/>
    <Route path='/about' component={About} />
    <Route path='/work' component={Work} />
    <Route path='/travel' component={Travel}/>
    <Route path='/contact' component={Contact}/>
    </Switch>
    </Router>
  );
}

export default App;
