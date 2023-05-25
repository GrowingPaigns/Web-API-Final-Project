import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Home from "./components/homepage/Home";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import Coaches from "./components/coaches/Coaches";
import Register from "./components/register/Register";
import Contact from "./components/contact/Contact";
import AddClass from "./components/classes/AddClass";
import EditClass from "./components/editClass/EditClass";
import { AuthProvider } from "./utils/Authorize";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<Home />} path="/home" />
              <Route element={<Profile />} path="/profile" />
              <Route element={<Coaches />} path="/coaches" />
              <Route element={<Contact />} path="/contact" />
              <Route element={<AddClass />} path="/AddClass" />
              <Route element={<EditClass />} path="/editclass" />

              <Route path="/" element={<Navigate to="/home" replace />} />
            </Route>
            <Route element={<Login />} path="/login" exact />
            <Route element={<Register />} path="/register" exact />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
