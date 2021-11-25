// Api route to fetch all cars

import axios from 'axios';


export default async function handler(_req:any, res:any) {
  const port = "http://localhost:3001/cars";
  console.log("PORT: ", port)
  await axios.get(port).then(({data}) => {
    res.status(200).json({data});
  }).catch(({err}) => {
    res.status(400).json({err});
  })
}
