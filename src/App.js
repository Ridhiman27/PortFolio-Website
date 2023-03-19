import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layouts from "./components/Layouts/index"
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Layouts/>}>
          <Route index element={<Home/>} />
          <Route index path='about' element={<About/>} />
          <Route index path='contact' element={<Contact/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
