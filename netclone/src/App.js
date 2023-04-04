
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import PublicRoutes from './PublicRoutes';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <Header/>
    <BrowserRouter>
    <PublicRoutes/>
    </BrowserRouter>
    </>
  );
}

export default App;
