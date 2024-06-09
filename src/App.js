import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {SearchFeed, Feed, ChannelDetail, VideoDetail, Navbar, SearchBar, Sidebar, Videos, VideoCard, ChannelCard} from './components';
// import ChannelDetail from './components/ChannelDetail';
// import Feed from './components/Feed';
// import VideoDetail from './components/VideoDetail';
// import Navbar from './components/Navbar';

const App =()=> (

  <BrowserRouter >
  
    <Box sx={{backgroundColor: '#000'}}>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Feed />}/> 
        <Route path='/video/:id' element={<VideoDetail />}/>
        <Route path='/channel/:id' element={<ChannelDetail />}/>
        <Route path='/search/:searchTerm' element={<SearchFeed />}/>
      </Routes>
    </Box>
  
  </BrowserRouter>

)


export default App;
