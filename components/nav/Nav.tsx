import Link from "next/link";
import { FC } from "react";
import NavLinks from "./NavLinks";
import NavBrowse from './NavBrowse';
import NavItem from "./NavItem";

interface Props {
  navClass: string;
  navModeBrowse: boolean;
  searchQuery?: string;
  setSearchQuery?: any;
}

const Nav:FC<Props> = ({navClass, navModeBrowse, searchQuery, setSearchQuery}) => {
  
  const handleMenuClick = (e) => {
    const nav = document.querySelector('nav');
    const toggleMenu = document.getElementsByClassName('toggle-menu')[0]

    nav?.classList.toggle('active')
  }

  return (
    <nav className={"nav " + navClass}>
      <NavItem>
        <h2 className="nav-website-title">
          <Link href="/">Locara</Link>
        </h2>
      </NavItem>

      {navModeBrowse ? 
        <>
          <NavItem>
            <NavBrowse searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </NavItem>
        </>
        :
        <>
          <NavItem>
            <div></div>
          </NavItem>
          <NavItem>
            <NavLinks />
          </NavItem>
          <a href="#" className="toggle-menu" onClick={handleMenuClick}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
        </>
      }
  </nav>
  )
}

export default Nav;
