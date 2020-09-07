import React from "react"
import {Link as a} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <a href="http://discord.huntercs.club">Discord</a>
    <a href="https://hunterosc.org/">OSC</a>
    <a href="https://www.hunteracm.org/">ACM</a>
    <a href="http://dsc.huntercs.club">DSC</a>
    <a href="http://blog.huntercs.club">Medium</a>
    <ThemeChanger/>
  </nav>
  
)
