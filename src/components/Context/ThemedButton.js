import React, { useContext } from "react";
import { ThemeContext } from "./Context";

const ThemedButton = () => {
  const theme = useContext(ThemeContext);
  const newTheme = theme.themes;

  return (
    <button
      style={
        theme.count == 0
          ? {
              background: newTheme.light.background,
              color: newTheme.light.foreground,
              cursor: "pointer",
              margin: "300px",
            }
          : {
              background: newTheme.dark.background,
              color: newTheme.dark.foreground,
              cursor: "pointer",
              margin: "300px",
            }
      }
      onClick={theme.themeChange}
    >
      I am styled by theme context!
    </button>
  );
};

export default ThemedButton;
