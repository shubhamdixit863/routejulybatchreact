import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div className="App">
     <Header/>
     <Sidebar/>
     <Outlet/>
      
    </div>
  );
}

export default App;
