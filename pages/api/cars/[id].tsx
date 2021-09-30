import data from '../../../data.json';

export default function handler(req: any, res: any):void  {
  // Api route to fetch one specific car with an id
  
  const ID = req.query.id;
  const filtered = data.filter(car => car.id == ID)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({message: `Car with ID ${ID} not found`})
  }
}