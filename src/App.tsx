import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.tsx'

import Header from './components/core/Header.tsx'
import Footer from './components/core/Footer.tsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer  />
    </BrowserRouter>
  );
}


export default App;
