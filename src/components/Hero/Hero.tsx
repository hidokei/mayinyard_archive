import Navbar from "../Navbar/Navbar";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import HeroButton from "./HeroButton";

function Hero() {
  return (
    <section className="hero">

      <Navbar />

      <div className="hero-content">
        <HeroText />
        <HeroImage />
      </div>

      <HeroButton />

    </section>
  );
}

export default Hero;