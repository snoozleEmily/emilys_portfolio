import { useState} from "react";
import intros from "./data.js";
import Presentation from "./Presentation.js";
import Navbar from "./Navbar.js";
import "./App.css";


function App() {
  const [language, setLanguage] = useState(intros[0]);

  // eslint-disable-next-line no-unused-vars
  const changeLanguage = (data) => {
    const currentIndex = data.indexOf(language);
    if (currentIndex !== -1 && currentIndex < data.length - 1) {
      setLanguage(data[currentIndex + 1]);
    }
  };
  
  return (
    <main>
          <Navbar setLanguage={setLanguage} />
          <section>
            <div className="container-data">
              <Presentation language={language} />
            </div>
          </section>
    </main>
  );
}

export default App;
