import Form from "./Form";
import { useState, FC } from "react";
import Error from "./Error";
import { useRouter } from 'next/router'

interface Props {
  browseMode: boolean;
  searchQuery?: string;
  setSearchQuery?: any;
}

const Search:FC<Props> = ({browseMode, searchQuery, setSearchQuery}) => {

  const router = useRouter();
  const [action] = useState('/browse')
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e:any):void => {
    e.preventDefault();
    const submitQuery = e.target[0].value
    if (!submitQuery) {
      handleError();
    } else {
      loading ? null : setLoading(!loading);
      router.push({
        pathname: action,
        query: {
          q: submitQuery
        }
      }) 
    }
  }

  const handleChange = (e:any) => {
    setSearchQuery(e.target.value)
    router.push({
      pathname: action,
      query: {
        q: e.target.value
      }
    })
  }

  const handleError = ():void => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 9000)
  }


  return (
    <>
      <Form browseMode={browseMode} searchQuery={searchQuery} loading={loading} handleSubmit={handleSubmit} handleChange={handleChange} />
      {error && !browseMode ? <Error /> : null}
    </>
  )
}

export default Search;
