import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import Person from "./pages/Person";
import Movie from "./pages/Movie";
import People from "./pages/People";
import Search from "./pages/Search";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";
import "./index.css";
export default function App() {
  return (
    <main className="min-h-screen w-full font-montserrat bg-amber-50">
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
      <Footer />
    </main>
  );
}
