import { FC } from "react"

interface Props {
  searchQuery?: any;
  handleChange?: any;
  browseMode: boolean;
}

const Input:FC<Props> = ({browseMode, searchQuery, handleChange}) => {
  return (
    !browseMode ? 
    <input type="text" placeholder="Search by Model, Make, or Keyword"/>
    :
    <input type="text" value={searchQuery} onChange={handleChange} placeholder="Search by Model, Make, or Keyword"/>
  )
}

export default Input
