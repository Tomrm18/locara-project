import Link from 'next/link';
import { FC } from 'react';

interface Props {
  href: string;
  text: string;
}

const NavLinkItem:FC<Props> = ({href, text}) => {
  return (
    <li>
      <Link href={href}>{text}</Link>
    </li>
  )
}

export default NavLinkItem
