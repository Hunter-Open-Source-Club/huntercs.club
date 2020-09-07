import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="https://hunterosc.org/">OSC</Link>
    <Link to="https://www.hunteracm.org/">ACM</Link>
    <Link to="http://dsc.huntercs.club">DSC</Link>
    <Link to="http://discord.huntercs.club">Hunter CS Network Discord</Link>
    <Link to="http://blog.huntercs.club">Our Medium</Link>
  </nav>
  
)
