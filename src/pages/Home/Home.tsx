import { useEffect, useState } from "react";

import Splash from "../../components/Splash/Splash";
import Hero from "../../components/Hero/Hero";

function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // потом подберем время

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? <Splash /> : <Hero />}
    </>
  );
}

export default Home;