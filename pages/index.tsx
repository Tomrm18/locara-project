import { FC } from "react";
import Search from "../components/Search";
import HomeParticles from "../components/HomeParticles";
import Nav from "../components/Nav";


interface Props {
  cars: any;
}

const Index:FC<Props> = ({cars}) => {
 

  return (
    <>
      <Nav/>
      <div className="home">
        <section className="home-title-container">
          <h2>Australia's Most Awarded<br/>Car Subscription Platform</h2>
          <p>Find your dream car with <span>Locara</span></p>
        </section>
        <Search />
        <HomeParticles />
      </div>
    </>
  )
}

export default Index;