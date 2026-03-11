// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Collection from "./components/Collection";
import { Navigate } from "react-router-dom";  
import Nav from "./components/Nav";


function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Routes>
          <Route path="/Search" element={<Search />} /> 
          <Route path="/Collection" element={<Collection />} /> 

          {/* Redirect for any unmatched paths */}
          <Route path="*" element={<Navigate to="/Collection" replace />} />  
        </Routes>
      </Router>
    </div>
  )
}

export default App