import React from 'react'

//import logo from '../assets/images/logo.svg';

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
            <a class="navbar-brand scroll" href="#top"><img src="{{ site.logo_url }}" alt="{{ site.title }}" /></a>
        </div>

         {/*  Collect the nav links, forms, and other content for toggling */}
        <div class="collapse navbar-collapse scrollspy" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
                <li><a class="scroll" href="#top">Home</a></li>
                <li><a class="scroll" href="#about">About</a></li>
                <li><a class="scroll" href="#treatments">Treatments</a></li>
                <li><a class="scroll" href="#team">Team</a></li>
                <li><a class="scroll" href="#testimonials">Testimonials</a></li>
                <li><a class="scroll" href="#gallery">Gallery</a></li>
                <li><a class="scroll" href="#location">Location</a></li>
            </ul>
        </div>

    </header>
)

export default Header
