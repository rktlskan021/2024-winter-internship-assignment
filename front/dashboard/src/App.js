import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './page/MainPage';
import ProjectDetailPage from './page/ProjectDetailPage';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/project-detail' element={<ProjectDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
