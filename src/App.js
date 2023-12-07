import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faXmark,
  faEllipsis
} from "@fortawesome/free-solid-svg-icons";
import ImageConfigPDF from './assets/Image_configuration.pdf'
import DUCSV from './assets/DUX776_2324.csv'
import {
  Sidebar,
  FileTemplate
} from './components';
import {
  Home,
  FoldersManagement,
  Settings
} from './pages';
import './App.css';

function App() {
  return (
    <div className="main">
      <Sidebar/>
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
          <Route path='Knowledge_article.docx' element={<FileTemplate data={{
                  name: "Knowledge_article.docx",
                  size: "3 MB",
                  date: "Aug 15, 2006",
                  type: "application/docx",
                  department: "Environmental",
                  user1: "Khushi",
                  user2: "Elizabeth",
                  user1_status: <FontAwesomeIcon icon={faEllipsis} />,
                  user2_status: <FontAwesomeIcon icon={faEllipsis} />
                }} />}/>
          <Route path='Data_protection_policy_23.pdf' element={<FileTemplate data={{
                  name: "Data_protection_policy_23.pdf",
                  size: "1.6 GB",
                  date: "Sep 01, 2023",
                  type: "application/pdf",
                  department: "Legal",
                  user1: "Maisie",
                  user2: "Michelle",
                  user1_status: <FontAwesomeIcon size="lg" icon={faCheck} style={{ color: "#00ff00" }} />,
                  user2_status: <FontAwesomeIcon size="lg" icon={faCheck} style={{ color: "#00ff00" }} />
                }} />}/>
          <Route path='DUX776_2324.csv' element={<FileTemplate data={{
                  name: "DUX776_2324.csv",
                  local_Src: DUCSV,
                  size: "1.8 GB",
                  date: "Jan 13, 2021",
                  type: "text/csv",
                  department: "R&D",
                  user1: "Reagan",
                  user2: "Maisie",
                  user1_status: <FontAwesomeIcon icon={faEllipsis} />,
                  user2_status: <FontAwesomeIcon icon={faXmark} style={{ color: "#ff1a1a" }} />
                }} />}/>
        </Route>
        <Route path='settings' element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
