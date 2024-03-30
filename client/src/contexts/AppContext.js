import React, { useState, useEffect, createContext } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  const [allApps, setAllApps] = useState([]);

  useEffect(() => {
    setAllApps([
      {
        id: 1,
        name: "Barter Barn",
        description: "Barter Barn is a forum-style app that encourages community bartering of services and goods.",
        link: "https://github.com/tbraeck/barter_barn_v2",
        demo: "https://youtu.be/H4KahrCLvLM",
        image: "../barterBarn.png",
        technologies: {
          frontend: "REACT",
          backend: "RUBY ON RAILS",
          database: "SQLite"
        }
      },
      {
        id: 2,
        name: "Teach Source",
        description: "Teach Source was created to be a resource database for all educators to access for their instructional needs.",
        link: "https://github.com/tbraeck/phase-3-project-tate-braeckel-frontend-react-main",
        demo: "https://youtu.be/KeARm1YrWls",
        image: "../teachSource.png",
        technologies: {
          frontend: "REACT",
          backend: "RUBY ON RAILS",
          database: "SQLite"
        }
      },
      {
        id: 3,
        name: "ART RANDOMIZER",
        description: "Drawing Ideas Now was created to inspire every artist or budding artist for drawing or creative ideas.",
        link: "https://github.com/tbraeck/PHASE4_PROJECT",
        demo: "https://youtu.be/b4JDXWqOegs",
        image: "../drawingIdeas.png",
        technologies: {
          frontend: "REACT",
          backend: "RUBY ON RAILS",
          database: "SQLite"
        }
      }
    ]);
  }, []); 

  return (
    <AppContext.Provider value={{ allApps, setAllApps }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
