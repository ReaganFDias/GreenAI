import './App.css';
import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileLines,
  faCheck,
  faXmark,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import ImageConfigPDF from './assets/Image_configuration.pdf'
import {
  Sidebar,
  FileTemplate
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
        <Route path='management'>
          <Route index element={<FoldersManagement />} />
          <Route path='Image_configuration.pdf' element={<FileTemplate data={{
                name: "Image_configuration.pdf",
                local_src: ImageConfigPDF,
                size: "2.3 GB",
                date: "Nov 28, 2023",
                type: "application/pdf",
                department: "Tech@Lilly",
                user1: "Reagan",
                user2: "Nojus",
                user1_status: <FontAwesomeIcon size="lg" icon={faXmark} style={{ color: "#ff1a1a" }} />,
                user2_status: <FontAwesomeIcon size="lg" icon={faCheck} style={{ color: "#00ff00" }} />
              }} />}/>
          <Route path='Knowledge_article.docx' />
          <Route path='Data_protection_policy_23.pdf' />
          <Route path='DUX776_2324.xlsx' />
        </Route>
        <Route path='settings' element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
