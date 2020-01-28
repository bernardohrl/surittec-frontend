import React from "react";
import logo from '../../assets/logo_company.svg'
import './Header.css'


export default function Header() {
   return (
    <div className="d-flex flex-column p-2 shadow-sm">
      <img src={logo} id="logo_company" alt="Logo" />
    </div>
   )
}