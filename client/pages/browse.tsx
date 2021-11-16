import CarList from "../components/CarList";
import Nav from '../components/nav/Nav';
import { NextPage ,GetStaticProps } from "next";
import { server } from "../config";
import { useRouter } from "next/dist/client/router";
import { useState, useEffect } from "react";
import axios from 'axios';

interface Props {
  cars: any;
}

const Browse:NextPage<Props> = ({cars}) => {
  // declaring router object with useRouter
  const router = useRouter();
  // storing lowercase query string in query variable
  // const searchQuery = router.query.q?.toString().toLowerCase();
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    if (router.query.q) {
      setSearchQuery(router.query.q?.toString().toLowerCase())
    }
  }, []);

  // creating new array by filtering cars array where the query was in the title
  const filteredCars = cars.filter((car: any) => car.title.toLowerCase().includes(`${searchQuery.toLowerCase()}`))

  const handleSearch = (value: string):void => setSearchQuery(value);

  return (
    <div>
      <Nav navClass="nav-browse-container" navModeBrowse={true} setSearchQuery={handleSearch}/>
      <h3 className="browse-query">Search Results for 
        <span className="browse-query-span">  &quot;{searchQuery}&quot;</span>
      </h3>
      <CarList cars={filteredCars} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(`${server}/cars`);
  const cars = res.data;
  return {
    props: {
      cars,
    },
  }
}

export default Browse;
