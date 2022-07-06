import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import PropertyDetailScreen from "./screens/PropertyDetailScreen";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./screens/Profile";
import AddPropertyForm from "./screens/AddPropertyForm";

function App() {
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  console.log(userInfo);
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/properties/:id" element={<PropertyDetailScreen />} />
          <Route path={"/login"} element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute fallback="/login" user={userInfo}>
                <Profile info={userInfo} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-property"
            element={
              <ProtectedRoute fallback="/login" user={userInfo}>
                {/* <Profile info={userInfo} /> */}
                <AddPropertyForm />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
