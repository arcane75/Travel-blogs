// import './App.css';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DetailsBlog from "./components/DetailsBlog/DetailsBlog";
import Home from "./components/Home/Home";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import UserLogin from "./components/UserLogin/UserLogin";
import AuthProvider from "./context/AuthProvider";
import MyExperiencee from "./components/MyExperience/MyExperiencee";
import AdminDash from "./components/Admin/AdminDash";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";

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

            <Route path="/myexperience" element={<MyExperiencee />} />

            <Route path="/dashboard" element={
              <PrivateRoute><AdminDash /></PrivateRoute>} />

            <Route path="*" element={<Error />} />

          </Routes>
        </Router>
      </AuthProvider>
      <Footer />

    </div>
  );
}

export default App;
