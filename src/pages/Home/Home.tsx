import { useEffect, useState } from "react";

import Splash from "../../components/Splash/Splash";
import Hero from "../../components/Hero/Hero";
import Archive from "../../components/Archive/Archive";
import "../../data/photoLoader";

function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <Splash />;
  }

  return (
    <>
      <Hero />
      <Archive />
    </>
  );
}

export default Home;