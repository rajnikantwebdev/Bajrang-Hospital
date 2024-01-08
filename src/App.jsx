import Hero from "./components/Hero";
import StcikyNavbar from "./components/Navbar";
import Services from "./components/Services";
import IdealandGoal from "./components/IdealandGoal";
import HorizontalCard from "./components/Cards Holder/HorizontalCard";

function App() {
  return (
    <div>
      <StcikyNavbar />
      <Hero />
      <Services />
      <IdealandGoal />
      <HorizontalCard/>
    </div>
  );
}

export default App;
