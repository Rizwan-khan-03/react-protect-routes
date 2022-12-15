import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

function SideBar() {
    return (
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span class="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li class="nav-item">
                <NavLink to="link1">
                         <div className="">
                             <p>link1</p>
                         </div>
                     </NavLink>
                  
                </li>
                <li>
                <NavLink to="link2">
                         <div className="">
                             <p>link2</p>
                         </div>
                     </NavLink>
                </li>
                <li>
                    
                </li>
                <li>
                <NavLink to="link3">
                         <div className="">
                             <p>link3</p>
                         </div>
                     </NavLink>
                </li>
              
            </ul>
            <hr />
            <div class="dropdown pb-4">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                    <span class="d-none d-sm-inline mx-1">loser</span>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a class="dropdown-item" href="#">New project...</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    </div>
       
    )
}

export default SideBar
