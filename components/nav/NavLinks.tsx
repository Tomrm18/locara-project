import NavLinkItem from "./NavLinkItem"

const NavLinks = () => {
  return (
    <>
      <ul className="nav-list">
        <NavLinkItem href="/" text="Home" />
        <NavLinkItem href="/about" text="About" />
        <NavLinkItem href="/services" text="Services" />
      </ul>
    </>
  )
}

export default NavLinks
