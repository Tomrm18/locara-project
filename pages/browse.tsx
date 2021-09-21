import CarList from "../components/CarList";
import { GetStaticProps } from "next";
import { server } from "../config";
import { useRouter } from "next/dist/client/router";
import { FC } from "react";

interface Props {
  cars: any;
}

const Browse:FC<Props> = ({cars}) => {
  
  // declaring router object with useRouter
  const router = useRouter();
  // storing lowercase query string in query variable
  const query = router.query.q?.toString().toLowerCase();

  // creating new array by filtering cars array where the query was in the title
  const filteredCars = cars.filter((car: any) => car.title.toLowerCase().includes(`${query}`))

  return (
    <div>
      <CarList cars={filteredCars} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch(`${server}/api/cars`);
  const cars = await res.json();

  return {
    props: {
      cars,
    },
  }
}

export default Browse;
