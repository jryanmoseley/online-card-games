import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Memory from "./pages/Memory";
import CastleSinglePlayer from "./pages/CastleSinglePlayer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cards/memory/:gameType" element={<Memory />} />
          <Route
            path="cards/castle/single-player/:gameType"
            element={<CastleSinglePlayer />}
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
