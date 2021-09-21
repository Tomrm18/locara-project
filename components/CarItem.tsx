import Link from 'next/link';
import { FC } from 'react';

interface Props {
  car: any;
}

const CarItem:FC<Props> = ({car}) => {
  return (
    <Link href="/api/cars/[id]" as={`/api/cars/${car.id}`}>
      <a>
        <h3>{car.id} &rarr;</h3>
        <p>{car.title}</p>
        <p>{car.image}</p>
      </a>
    </Link>
  )
}

export default CarItem;
