import './Navbar.css'

let NavBar = () => {
return(
<nav className="pb0 pt4">
  {/* <a className="grow black b f1 f-headline-ns tc db mb3 mb4-ns home" href="/" title="Home">Yesenia Marquina</a> */}
  <div className="tc pb3">
    <a className="link dim gray f6 f5-ns dib mr3" href="/" title="Home">Home</a>
    <a className="link dim gray f6 f5-ns dib mr3" href="/About" title="About">About</a>
    <a className="link dim gray f6 f5-ns dib mr3" href="/Projects" title="Store">Projects</a>
    <a className="link dim gray f6 f5-ns dib" href="/Contact" title="Contact">Contact</a>
    <div className=""></div>
  </div>
</nav>
)
}

export default NavBar;
