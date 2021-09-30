import { FC } from "react"
import Image from 'next/image';

const CarAnimation:FC = ({}) => {
  return (
    <div className="car-animation-container">
      <div className="car">
        <Image className="car-image" src="/images/car3.png" alt="Car Image" width="300" height="150" />
      </div>
      <div className="wheel-container">
        <span className="wheel-front">
          <Image src="/images/wheel.png" alt="Car Wheel" width="50" height="50" />
        </span>
        <span className="wheel-back" >
          <Image src="/images/wheel.png" alt="Car Wheel" width="50" height="50" />
        </span>
      </div>
    </div>
  )
}

export default CarAnimation;
