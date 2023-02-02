import { createContext, useState } from "react";

export const DarkModeContext = createContext();
//컨텍스트는 데이터를 품고 있는 역할하고
//컨텍스트를 만들때는 항상 Provider도 만들어 줘야한다. 프로바이더는 우산을 만드는거야.얘도 컴포넌트다.아래 있는 아이들을 씌어주는..
export function DarkModeProvider({ children }) {
  //이 안에는 다크모드인지 아닌지 기억하는 상태가 있을것이다.
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
