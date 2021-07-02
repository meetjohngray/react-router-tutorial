import './App.css'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import { useState } from 'react'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Post from './pages/Post'

function App() {

  const [login, setLogin] = useState(false)

  
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <button onClick={() => setLogin(!login)}>{login?'logout' : 'login'}</button>
        <Switch>
          <Route path='/' component={ Home } exact />
          <Route path='/about' component={ About } />
          <Route path='/profile'>
            <Profile login={ login } />
          </Route>
          {/* Here's one way to have a protected route */}
          {/* <Route path='/profile'>
            {login ? <Profile /> : <Redirect to='/' />}
          </Route>   */}
          <Route path='/post/:id' component={ Post } />
          <Route component={ NotFound } />
        </Switch>  
      </div>
    </BrowserRouter>
  );
}

export default App;
