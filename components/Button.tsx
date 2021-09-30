import { FC } from "react"
import { FiSearch } from 'react-icons/fi';
import CircleLoader from "./CircleLoader";


interface Props {
  loading?: boolean;
}

const Button:FC<Props> = ({loading}) => {
  return (
    loading ? 
      <button className="button-loader" type="submit"><CircleLoader/></button>
    :
      <button className="button" type="submit"><FiSearch className="search-icon"/></button>
  )
}

export default Button;
