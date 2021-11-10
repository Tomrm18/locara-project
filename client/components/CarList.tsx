import React, { FC } from "react";
import CarItem from "./CarItem";

interface Props {
  cars: any;
}

const CarList:FC<Props> = ({cars}) => {
  return (
    <div className="car-grid-container">
      {cars.map((car: any) => (
        <CarItem car={car} key={car.id}/>
      ))}
    </div>
  )
}

export default CarList;
