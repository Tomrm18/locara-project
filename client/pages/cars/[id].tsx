import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { server } from "../../config";
import Nav from "../../components/nav/Nav";
import HomeParticles from "../../components/HomeParticles";
import { FaCarSide, FaTachometerAlt, FaCogs } from 'react-icons/fa';
import axios from 'axios';

interface Props {
  car: any;
}

const Car:NextPage<Props> = ({car}) => {

  return (
    <>
      <Nav navClass="nav-home-container" navModeBrowse={false} />
      <main className="car-item-main">
        <section>
          <img src={car[0].image} alt={car[0].title} />
        </section>
        <section className="car-item-info">
          <h2>{car[0].title}</h2>
          <article>
            <h4>{car[0].price}</h4>
            <div>
              <p><FaTachometerAlt className="icon-meter icon" />{car[0].odometer} km</p>
              <p><FaCarSide className="icon" />{car[0].body}</p>
              <p><FaCogs className="icon" />{car[0].transmission}</p>
            </div>
          </article>
          <div>
            <button>Inquire</button>
          </div>
        </section>
      </main>
      <HomeParticles />
    </>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  // const res = await fetch(`${server}/cars/${context.params!.id}`);
  const res = await axios.get(`${server}/cars/${context.params!.id}`);
  const car = await res.data;
  return {
    props: {
      car,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get(`${server}/cars/`);
  const cars = await res.data;
  
  const ids = cars.map((car:any) => car.id)
  const paths = ids.map((id:any) => (
    {
      params: {
        id: id.toString()
      }
    }
  ))

  return {
    paths,
    fallback: false,
  }
}

export default Car;
