import {Routes, Route} from 'react-router-dom';
import { ContactUs } from './Pages/ContactUs';
import Home  from './Pages/Home';
import Header from './Pages/Header';

function App() {
  return (
    <div className='bg-slate-400'>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='contactme' element={<ContactUs></ContactUs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
