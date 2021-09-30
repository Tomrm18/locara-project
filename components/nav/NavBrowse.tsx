import { FC } from 'react';
import Search from '../Search';

interface Props {
  searchQuery?: string;
  setSearchQuery?: any;
}

const NavBrowse:FC<Props> = ({searchQuery, setSearchQuery}) => {

  return (
    <span className="nav-browse-form">
      <h3>Browse our Cars</h3>
      <Search browseMode={true} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    </span>
  )
}

export default NavBrowse;
