import heroImage from "../../assets/hero.jpg";

function HeroImage() {
  return (
    <div className="hero-image">
      <img src={heroImage} alt="Hero" />
    </div>
  );
}

export default HeroImage;