import './App.css'
import { createTheme, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FindJobs from './pages/FindJobs';
import FindTalent from './pages/FindTalent';
import TalentProfile from './pages/TalentProfile';
import PostJobPage from './pages/PostJobPage';
import JobDescPage from './pages/JobDescPage';

function App() {
  const theme = createTheme({
    focusRing: "never",
    fontFamily: 'Poppins, sans-serif',
    primaryColor: 'mchite',
    primaryShade: 4,
    colors:{
      'mchite': [
            '#f0fdf4',
            '#dbfde7',
            '#b9f9ce',
            '#82f3aa',
            '#45e37d',
            '#1ed760',
            '#11a847',
            '#11843b',
            '#136832',
            '#12552c',
            '#042f16',
        ],
    }
  })
  return (
    <>
      <MantineProvider defaultColorScheme='dark' theme={theme}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/find-jobs' element={<FindJobs/>}/>
            <Route path='/find-talent' element={<FindTalent/>}/>
            <Route path='/jobs' element={<JobDescPage/>}/>
            <Route path='/post-job' element={<PostJobPage/>}/>
            <Route path='/talent-profile' element={<TalentProfile/>}/>
            <Route path='/about' element={<HomePage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </MantineProvider>
    </>
  )
}

export default App
