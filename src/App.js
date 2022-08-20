import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import User from './pages/User';
import Settings from './pages/Settings';
import Payments from './pages/Payments';
import Ratings from './pages/Ratings';
import Cancellations from './pages/Cancellations';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route path="/users" element={<User />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/cancellations" element={<Cancellations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
