import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NouBlog from "./components/NouBlog";
import BlogDetails from "./components/BlogDetails";
import NoTrobat from "./components/NoTrobat";

function App() {
  return (
    <BrowserRouter>
      <div classNameName="App">
        <NavBar />
        <div classNameName="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="nouBlog" element={<NouBlog />} />
            <Route path="blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NoTrobat />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
