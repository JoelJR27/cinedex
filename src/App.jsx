import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import Person from "./pages/Person";
import Movie from "./pages/Movie";
import People from "./pages/People";
import Search from "./pages/Search";
import "./index.css";
import BackToTopButton from "./components/BackToTopButton";
// import Teste from "./Test";
export default function App() {
  return (
    // <Teste />
    <div className="h-screen w-full font-montserrat bg-amber-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/people" element={<People />} />
          <Route path="/person/:id" element={<Person />} />
        </Routes>
      </BrowserRouter>
      <BackToTopButton />
    </div>
  );
}
