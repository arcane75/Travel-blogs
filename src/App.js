// import './App.css';

import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import DetailsBlog from "./components/DetailsBlog/DetailsBlog";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UserLogin from "./components/UserLogin/UserLogin";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/home" element={<Home />} />

            <Route path="/userlogin" element={<UserLogin />} />

            <Route path="/detailsblog/:blogId" element={
              <PrivateRoute><DetailsBlog /></PrivateRoute>} />
              
          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
