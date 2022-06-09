import './App.css';
import { Route, Routes } from 'react-router';
import { HomePages } from './pages/HomePages';


function App() {
  
  
  return (
      <Routes>
        <Route path='/' element={<HomePages/>}/>
      </Routes>
  );
}

export default App;