import styles from "./App.module.css";
import { Hero } from "./components/Hero/hero";
import { Navbar } from "./components/Navbar/navbar";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Projects } from "./components/Projects/Project";

function App(){
    return <div className={styles.App}>
        <Navbar  />
        <Hero  />
        <About />
        <Contact />
        <Projects />
    </div>
}
export default App;