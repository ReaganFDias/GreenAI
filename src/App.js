import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faXmark,
  faEllipsis
} from "@fortawesome/free-solid-svg-icons";
import ImageConfigPDF from './assets/Image_configuration.pdf'
import Policy from './assets/Data_protection_policy_23.pdf'
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
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;

  const [visible, setVisible] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
      setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
      setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
      if (!touchStart || !touchEnd) return
      const distance = touchStart - touchEnd
      const isLeftSwipe = distance > minSwipeDistance
      const isRightSwipe = distance < -minSwipeDistance
      if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
      if (isRightSwipe) {
          setVisible(true)
      } else {
        setVisible(false)
    }
  }

  return (
    <div className="main" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
      {!isMobile || (visible && isMobile) ? <Sidebar /> : null}
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
                  local_src: Policy,
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
                  local_src: DUCSV,
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
