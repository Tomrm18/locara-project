import { useState, FC } from "react";
import { FiSearch } from 'react-icons/fi';
import CircleLoader from "./CircleLoader";
import Error from "./Error";
import { useRouter } from "next/dist/client/router";

const Search:FC = () => {
  // declaring router object
  const router = useRouter();
  // declaring state variables and functions
  // action state to store where the form submits to
  const [action] = useState('/browse')
  // searchQuery to store to user enter query
  // setSearchQuery function to update the user inputted query string
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e:any):void => {
    e.preventDefault();
    
    if (!searchQuery) {
      handleError();
    } else {
      loading ? null : setLoading(!loading);
      router.push({
        pathname: action,
        query: {
          q: searchQuery
        }
      })
    }
  }

  const handleChange = (e:any) => setSearchQuery(e.target.value);

  const handleError = ():void => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 9000)
  }

 
  return (
    <>
      <div className="search-form-container">
        <form className="search-form-home" onSubmit={handleSubmit}>
          <input type="text" value={searchQuery} onChange={handleChange} placeholder="Search by Model, Make, or Keyword"/>
        {loading ? 
          <button className="button-loader" type="submit"><CircleLoader/></button>
        :
          <button className="button" type="submit"><FiSearch className="search-icon"/></button>
        }
        </form>
      </div>
      {error ? <Error /> : null}
    </>
  )
}

export default Search;
