// Api route to fetch all cars

import axios from 'axios';

// import data from '../../../data.json';

export default async function handler(req:any, res:any) {
  const port = "http://localhost:3001/cars";
  await axios.get(port).then(({data}) => {
    res.status(200).json({data});
  }).catch(({err}) => {
    res.status(400).json({err});
  })
  // res.status(200).json(data);
 
}
