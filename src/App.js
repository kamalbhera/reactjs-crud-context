import './App.css';
import { Home } from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CreateModal } from './components/CreateModal';
function App() {
  return (
    <div className="">
      <Router>
        <div className="col-md-12">
          <h1 className="text-center"></h1>
          <Routes>
            <Route path="/" exact element={<Home />}  />
            <Route path="/create" exact element={<CreateModal />} />
            <Route path="/home" component={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
