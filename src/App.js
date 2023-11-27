import './App.css';
import { Route, Routes } from 'react-router-dom';
import {
  Sidebar
} from './components';
import {
  Home,
  FoldersManagement,
  Settings
} from './pages';

function App() {
  return (
    <div className="main">
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/folders' element={<FoldersManagement />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
