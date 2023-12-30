import { useState, useEffect, createContext } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
  const [allApps, setAllApps] = useState([]);
  
  useEffect(()=> {
    fetch("/apps").then((res)=> {
      if(res.ok){
        res.json().then((data) => {
          setAllApps(data)})
      }
    })

  }, [])

  return (
    <AppContext.Provider value={{ allApps, setAllApps }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
