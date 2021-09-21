import React, { FC } from "react";
import { server } from "../../../config";

interface Props {
  car: any;
}

const car:FC<Props> = ({car}) => {

  return (
    <>  
      <h2>{car.id}</h2>
      <p>{car.title}</p>
    </>
  )
}


export const getStaticProps = async (context: any) => {
  console.log(context)

  const res = await fetch(`${server}/api/cars/${context.params.id}`);
  const car = await res.json();

  return {
    props: {
      car,
    }
  }
}


export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/cars/`);
  const cars = await res.json();

  const ids = cars.map((car: any) => car.id);
  const paths = ids.map((id: any) => ({
    params: {
      id: id.toString()
    }
  }))

  return {
    paths, 
    fallback: false
  }
}


export default car;