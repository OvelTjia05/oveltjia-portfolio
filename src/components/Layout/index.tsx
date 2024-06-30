import About from "../About";
import Banner from "../Banner";
import Contact from "../Contact";
import NavBar from "../NavBar";
import Projects from "../Projects";
import Skills from "../Skills";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <div className="mx-44 max-lg:mx-32 max-sm:mx-6"></div>
    </div>
  );
};

export default Layout;
