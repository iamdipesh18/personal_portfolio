import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/footer";

/*
  Scroll handling across routes:
  - "/#about" style links scroll to that section once the page has rendered
  - any other navigation starts at the top of the page
*/
const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash, key]);

  return null;
};

export const SiteLayout = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <ScrollManager />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
