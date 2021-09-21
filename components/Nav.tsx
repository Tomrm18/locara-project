import { FC } from 'react';
import Link from 'next/link';

const Nav:FC = ({}) => {
  return (
    <nav className="nav-container">
      <h2 className="nav-website-title">Locara</h2>
      <div></div>
      <ul className="nav-list">
        <li className="active">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/features">Services</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
