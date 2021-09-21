import { FC } from "react";
import Meta from '../components/Meta';

interface Props {
  children: any;
}

const Layout:FC<Props> = ({children}) => {
  return (
    <>
      <Meta />
      {children}
    </>
  )
}

export default Layout;