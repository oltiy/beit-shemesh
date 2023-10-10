import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../homePage/index";

function RoutesApi() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default RoutesApi;
