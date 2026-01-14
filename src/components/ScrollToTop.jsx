import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../styles/about.css'

// Functional ScrollToTop compatible with react-router v6
export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}
