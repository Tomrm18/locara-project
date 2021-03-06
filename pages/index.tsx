import { NextPage } from "next";
import Search from "../components/Search";
// import HomeParticles from "../components/HomeParticles";
import Nav from '../components/nav/Nav';
import CarAnimation from '../components/CarAnimation' 
import Typing from "../components/Typing";
import SpeechBubble from "../components/SpeechBubble";

const Index:NextPage = ({}) => {
  return (
    <>
      <Nav navClass="nav-home-container" navModeBrowse={false} />
      <div className="home">
        <section className="home-title-container">
          <h1>Australia&apos;s Most Awarded<br/>Car Subscription Platform</h1>
          <p>Find your dream car with <span><em>Locara</em></span></p>
        </section>
        <Search browseMode={false} />
        <SpeechBubble>
          <Typing />
        </SpeechBubble>
        <span className="waves-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#e7008a" fillOpacity="1" d="M0,64L34.3,74.7C68.6,85,137,107,206,144C274.3,181,343,235,411,240C480,245,549,203,617,186.7C685.7,171,754,181,823,176C891.4,171,960,149,1029,144C1097.1,139,1166,149,1234,144C1302.9,139,1371,117,1406,106.7L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
          </svg>
        </span>
        <CarAnimation />
        {/* {typeof window != undefined ?? 
          <HomeParticles />
        } */}
        {/* <HomeParticles /> */}
      </div>
    </>
  )
}

export default Index;