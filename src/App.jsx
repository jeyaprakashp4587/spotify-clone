import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Songs from './components/Songs';
// import { Routes, Route } from 'react-router-dom';
import { SongProvider } from './playlist/Songexport';

function App() {
  return (
    
     <div className="App">
      <SongProvider>
      <div className='Sidebar'>
        <Sidebar />
      </div>
      <div className='Main-wrapper'>
       <Main />
      </div>
      <div className='Songs'> 
       <Songs />
      </div>
      </SongProvider>
    </div>
    
  );
}
export default App;
