// src/context/ScrollContext.jsx
import { createContext, useEffect, useState } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [headerWidth, setHeaderWidth] = useState("90%");
  const [theme, setTheme] = useState("sun");
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const width = Math.max(30, 70 - scrollY * 0.03); // من 90% إلى 70%
      setHeaderWidth(`${width}%`);
      // console.log("SCROLLY:", scrollY, "WIDTH:", width);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.scrollY]);

  return (
    <ScrollContext.Provider value={{ headerWidth, theme, setTheme }}>
      {children}
    </ScrollContext.Provider>
  );
};
