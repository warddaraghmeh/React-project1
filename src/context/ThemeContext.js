import { createContext, useReducer } from "react";

const ThemeContext = createContext();
const initalData = {
  theme: "light",
};

const reducer = (firstState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...firstState,
        theme: action.newValue,
      };
    default:
      return firstState;
  }
};

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initalData);
  const toggleTheme = (ChangeTheme) =>
    dispatch({
      type: "TOGGLE_THEME",
      newValue: ChangeTheme,
    });
  return (
    <ThemeContext.Provider value={{ ...firstState, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeContext;
