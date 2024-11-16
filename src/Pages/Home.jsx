import About from "../Components/about";
import ContactForm from "../Components/contact";
import Header from "../Components/Header";
import Projects from "../Components/projects";

const Home = () => {
  return (
    <div className="container">
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
