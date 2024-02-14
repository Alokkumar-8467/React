# React Router

By using React Router we can navigate between multiple pages without refreshing it.

For using react we use run ```npm install react-router-dom```

we use browser router tag  ```<BrowserRouter> ``` inside index.js 

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>

);

```

Index become our default route 

```
import './App.css';
import {NavLink, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import MainHeader from './components/MainHeader';


function App() {
  return (
    <div >

      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/labs">Labs</NavLink></li>
          <li><NavLink to="*">Not Found</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<MainHeader />}>
        <Route index element={<Home />} />
        <Route path = "/support" element={<Support/>} />
        <Route path = "/about" element={<About />} />
        <Route path = "/labs" element={<Labs />} />
        <Route path = "*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;


```

# useNavigate hook

```
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {

  const navigate = useNavigate;

  function clickHandler(){
    navigate("/about");
  }
  return (
    <div>
    <div>This is Labs page</div>
    <button onClick={clickHandler}>Move to About page</button>
    </div>
  )
}

export default Labs;

```