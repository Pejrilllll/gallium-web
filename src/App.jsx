import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ROUTES } from "./data/modules";
import Landing from "./pages/Landing";
import SifatFisika from "./pages/SifatFisika";
import SifatKimia from "./pages/SifatKimia";
import Aplikasi from "./pages/Aplikasi";
import CaraPembuatan from "./pages/CaraPembuatan";
import Kelimpahan from "./pages/Kelimpahan";
import Sejarah from "./pages/Sejarah";
import Reaksi from "./pages/Reaksi";
import Simulasi3D from "./pages/Simulasi3D";

function useHashRoute() {
  const read = () => {
    const raw = window.location.hash.replace(/^#/, "") || "/";
    const path = raw.split("?")[0];
    return ROUTES[path] ? path : "/";
  };

  const [path, setPath] = useState(read);

  useEffect(() => {
    const onHash = () => {
      setPath(read());
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return path;
}

const PAGES = {
  "/": Landing,
  "/sifat-fisika": SifatFisika,
  "/sifat-kimia": SifatKimia,
  "/aplikasi": Aplikasi,
  "/cara-pembuatan": CaraPembuatan,
  "/kelimpahan": Kelimpahan,
  "/sejarah": Sejarah,
  "/reaksi": Reaksi,
  "/simulasi-3d": Simulasi3D,
};

const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3, ease: "easeOut" },
};

export default function App() {
  const path = useHashRoute();
  const Page = PAGES[path] ?? Landing;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={path} {...pageTransition}>
        <Page />
      </motion.div>
    </AnimatePresence>
  );
}
