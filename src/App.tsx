import { HashRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.tsx'

import Header from './components/core/Header.tsx'
import Footer from './components/core/Footer.tsx'

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer  />
    </HashRouter>
  );
}


export default App;
