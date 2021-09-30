import { FC } from "react";
import Input from './Input';
import Button from './Button';

interface Props {
  browseMode: boolean;
  searchQuery: string;
  loading: boolean;
  handleChange: any;
  handleSubmit: any;
}

const Form:FC<Props> = ({browseMode, searchQuery, loading, handleSubmit, handleChange}) => {

  const handleEmptySubmit = (e:any): void => {
    e.preventDefault();
    if (!e.target[0].value) {
      const input = document.getElementsByTagName('input')[0]
      const button = document.getElementsByTagName('button')[0]
      const icon = document.getElementsByTagName('svg')[0]

      input.classList.add('input-error');
      button.classList.add('button-error');
      icon.classList.add('search-icon-error');

      setTimeout(() => {
        input.classList.remove('input-error');
        button.classList.remove('button-error');
        icon.classList.remove('search-icon-error');
      }, 1500)

    } else {
      handleSubmit(e)
    }
  }

  return (
    <div className="search-form-container">
      {browseMode ? 
        <form className="form-search form-search-browse" onSubmit={handleEmptySubmit}>
          <Input browseMode={browseMode} searchQuery={searchQuery} handleChange={handleChange} />   
          <Button />
        </form>
      :
        <form className="form-search form-search-home" onSubmit={handleSubmit}>
          <Input browseMode={browseMode} />   
          <Button loading={loading} />
        </form>      
      }  


    </div>
  )
}

export default Form
