import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from './components/Page';
import Aboutme from './components/Aboutme'
import Carousel from './components/Carousel';
import { ContactUs } from './components/Contact';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Page}/>
        <Route path='/aboutme' component={Aboutme} />
        <Route path='/skills' component={Carousel} />
        <Route path='/contact' component={ContactUs} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
