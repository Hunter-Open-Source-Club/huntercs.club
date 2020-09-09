import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/contact">Discord</Link>
    <a href="https://hunterosc.org/">OSC</a>
    <a href="https://www.hunteracm.org/">ACM</a>
    <a href="http://dsc.huntercs.club">DSC</a>
    <a href="http://blog.huntercs.club">Medium</a>
    <ThemeChanger/>
  </nav>
  
)
