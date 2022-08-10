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
import Footer from "./components/Footer";
import SearchResults from "./screens/SearchResults";

function App() {
  const userInfo = useSelector((state) => state.userLogin.userInfo);
  console.log(process.env.REACT_APP_API_URL_LOCAL);
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/properties/:id" element={<PropertyDetailScreen />} />
          <Route path={"/login"} element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute fallback="/login" user={userInfo}>
                <Profile userInfo={userInfo} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-property"
            element={
              <ProtectedRoute fallback="/login" user={userInfo}>
                {/* <Profile info={userInfo} /> */}
                <AddPropertyForm userInfo={userInfo} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
