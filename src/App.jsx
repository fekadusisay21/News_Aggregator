import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkProvider } from "./context/DarkContext";
import { AuthProvider } from "./context/AuthContext";
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Bookmark from "./pages/Bookmark";
import Signup from "./pages/Signup";
import PrivateRoute from "./utils/PrivateRoute";
import EditProfile from "./ui/EditProfile";
import VerifyEmail from "./pages/VerifyEmail";
import PageNotFound from "./ui/PageNotFound";
import "./ui/index.css";
import PageShow from "./ui/PageShow";
import Topics from "./pages/Topics";
// import News from "./ui/News";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <DarkProvider>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/verify" element={<VerifyEmail />} />
                <Route path="/editprofile" element={<EditProfile />} />
                <Route path="/news" element={<Bookmark />} />
                <Route path="/pageshow" element={<PageShow />} />
                <Route path="/topics" element={<Topics />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </DarkProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
