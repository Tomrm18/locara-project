import Link from 'next/link';
import { FC, useState } from 'react';
import { FaCarSide, FaTachometerAlt, FaCogs } from 'react-icons/fa';

interface Props {
  car: any;
}

const handleChange = () => (console.log("change!"))

const CarItem:FC<Props> = ({car}) => {

  return (
    <Link href="/cars/[id]" as={`/cars/${car.id}`}>
      <div className="car-card">
        <a>
          <span className="img-container">
            <img src={car.image} alt={car.title} />
            <p>Find out more</p>
          </span>
          <div className="car-details" onReset={handleChange}>
            <h3>{car.title}</h3>
            <p><FaTachometerAlt className="icon-meter icon" />{car.odometer} km</p>
            <p><FaCarSide className="icon" />{car.body}</p>
            <p><FaCogs className="icon" />{car.transmission}</p>
            <h4>{car.price}</h4>
          </div>
        </a>
      </div>
    </Link>
  )
}

export default CarItem;
