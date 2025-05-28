import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Skills from "./pages/Skills/Skills.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Header from "./components/Header/Header.jsx";
import { AnimatePresence } from "framer-motion";

/*function LocationProvider({element}) {
    return <AnimatePresence mode="wait">{element}</AnimatePresence>;
}

function RoutesWithAnimation() {
    const location = useLocation();
    console.log(location);
    return (
        
    );
}*/

function App() {
    const location = useLocation();
    return (
        <div className="main">
            <Header />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
            <NavBar />
        </div>
    );
}

export default App;
