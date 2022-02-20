import { Routes, Route } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

//Nav Components
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/adventures" element={<Index />}></Route>
          <Route path="/adventures/:id" element={<Show />}></Route>
          <Route path="/adventures/:id/edit" element={<Edit />}></Route>
          <Route path="/new" element={<New />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
