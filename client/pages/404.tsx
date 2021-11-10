import { NextPage } from "next"
import Nav from '../components/nav/Nav';

const NotFound:NextPage = ({}) => {
  return (
    <>  
      <Nav navClass="nav-home-container" navModeBrowse={false} />
      <main className="not-found-main">
        <h2><span>404</span> - This Page could not be found</h2>
      </main>
    </>
  )
}

export default NotFound;
