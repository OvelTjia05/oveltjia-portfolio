import About from "../About";
import Banner from "../Banner";
import Contact from "../Contact";
import Footer from "../Footer";
import NavBar from "../NavBar";
import Projects from "../Projects";
import Skills from "../Skills";
import { Toaster } from "../ui/toaster";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
