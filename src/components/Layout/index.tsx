import Banner from "../Banner";
import NavBar from "../NavBar";
import Skills from "../Skills";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <div className="mx-44 max-lg:mx-32 max-sm:mx-6"></div>
    </div>
  );
};

export default Layout;
