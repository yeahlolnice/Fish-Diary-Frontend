import './styles.css'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import SignUpPage from './pages/Register'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


function App() {

  const urlDomain = 'http://localhost'

  return (
    <Router>
      <div>
        <Navbar />
      </div>

  
      <Switch>
  
        <Route exact path="/register" render={() => <SignUpPage />}></Route>

        <Route exact path="/" render={() => <HomePage urlDomain={urlDomain} />}></Route>

      </Switch>
    </Router>
    
  );
}

export default App;
