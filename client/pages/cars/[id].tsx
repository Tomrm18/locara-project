import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { server } from "../../config";
import Nav from "../../components/nav/Nav";
import HomeParticles from "../../components/HomeParticles";
import { FaCarSide, FaTachometerAlt, FaCogs } from 'react-icons/fa';


const Car:NextPage = ({car}) => {

  return (
    <>
      <Nav navClass="nav-home-container" navModeBrowse={false} />
      <main className="car-item-main">
        <section>
          <img src={car.image} alt={car.title} />
        </section>
        <section className="car-item-info">
          <h2>{car.title}</h2>
          <article>
            <h4>{car.price}</h4>
            <div>
              <p><FaTachometerAlt className="icon-meter icon" />{car.odometer} km</p>
              <p><FaCarSide className="icon" />{car.body}</p>
              <p><FaCogs className="icon" />{car.transmission}</p>
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
  const res = await fetch(`${server}/api/cars/${context.params.id}`);
  const car = await res.json();
  return {
    props: {
      car,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${server}/api/cars`)
  const cars = await res.json()
  
  const ids = cars.map((car) => car.id)
  const paths = ids.map((id) => (
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
