import React from 'react'

import logo from '../assets/img/logo-transparent.png';

const Header = (props) => (
    <header id="header" className="alt">
         {/* Brand and toggle get grouped for better mobile display */}
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand scroll" href="#top"><img src={logo} alt="Optimus Dental" /></a>
        </div>

         {/*  Collect the nav links, forms, and other content for toggling */}
        <div class="collapse navbar-collapse scrollspy" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li><a class="scroll" href="#top">Početna</a></li>
                <li><a class="scroll" href="#about">O nama</a></li>
                <li><a class="scroll" href="#treatments">Usluge</a></li>
                <li><a class="scroll" href="#team">Naš tim</a></li>
                <li><a class="scroll" href="#testimonials">Naši pacijenti</a></li>
                <li><a class="scroll" href="#gallery">Galerija</a></li>
                <li><a class="scroll" href="#location">Lokacija</a></li>
            </ul>
        </div>

    </header>
)

export default Header
