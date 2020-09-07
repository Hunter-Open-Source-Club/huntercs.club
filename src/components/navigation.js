import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="https://hunterosc.org/">OSC</Link>
    <ThemeChanger/>
    <Link to="https://www.hunteracm.org/">ACM</Link>
    <ThemeChanger/>
    <Link to="http://dsc.huntercs.club">DSC</Link>
    <ThemeChanger/>
    <Link to="http://discord.huntercs.club">Hunter CS Network Discord</Link>
    <ThemeChanger/>
    <Link to="http://blog.huntercs.club">Our Medium</Link>
    <ThemeChanger/>
  </nav>
  
)
