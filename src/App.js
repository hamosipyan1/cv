import Header from "./components/Header";
import Main from "./components/sections/Main";
import Skills from "./components/sections/Skills";
import Experiences from "./components/sections/Experiences";
import Education from "./components/sections/Education";
import Footer from "./components/Footer";
import Contacts from "./components/sections/Contacts";

function App() {
  return (
    <div>
        <Header/>
        <Main/>
        <Education/>
        <Skills/>
        <Experiences/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
