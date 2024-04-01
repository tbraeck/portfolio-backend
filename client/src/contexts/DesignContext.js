import React, { useState, useEffect, createContext } from 'react';

const DesignContext = createContext();

function DesignProvider({ children }) {
  const [allDesigns, setAllDesigns] = useState([]);

  useEffect(() => {
    setAllDesigns([
      {
        id: 1,
        name: "Barter Barn",
        description: "Barter Barn is a forum-style app that encourages community bartering of services and goods.",
        link: "https://github.com/tbraeck/barter_barn_v2",
        demo: "https://youtu.be/H4KahrCLvLM",
        image: "../barterBarn.png",
        technologies: {
          FRONTEND: "REACT",
          BACKEND: "RUBY ON RAILS",
          DATABASE: "SQLite"
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
          FRONTEND: "REACT",
          backend: "RUBY ON RAILS",
          database: "SQLite"
        }
      }
    ]);
  }, []); 

  return (
    <DesignContext.Provider value={{ allDesigns, setAllDesigns }}>
      {children}
    </DesignContext.Provider>
  );
}

export { DesignContext, DesignProvider };
