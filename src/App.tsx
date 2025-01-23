import './App.css'
import { createTheme, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css'
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FindJobs from './pages/FindJobs';

function App() {
  const theme = createTheme({
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
            <Route path='/find-talent' element={<HomePage/>}/>
            <Route path='/upload-job' element={<HomePage/>}/>
            <Route path='/about' element={<HomePage/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </MantineProvider>
    </>
  )
}

export default App
