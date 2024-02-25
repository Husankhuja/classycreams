import LayoutPage from "./LayoutPage";
import hero from "../assets/hero.jpg";

const HomePage = () => {

  return (
    <LayoutPage>
      <main>
        <section>
          <img src={hero} alt="hero" className="hero" />
          
        </section>
      </main>
    </LayoutPage>
  );
};

export default HomePage;