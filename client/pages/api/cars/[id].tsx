// import data from '../../../data.json';
import axios from "axios";

export default async function handler(req: any, res: any)  {
  // Api route to fetch one specific car with an id
  const port = "http://localhost:3001/cars";
  const { data } =  await axios.get(port);
  
  const ID = req.query.id;
  const filtered = data.filter((car: { id: any; }) => car.id == ID)
  // ((car: { id: any; }) => car.id == ID)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({message: `Car with ID ${ID} not found`})
  }
}