import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/img/hero.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
//import GoogleMap from '../components/GoogleMaps'
import Maps from '../components/Maps'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Optimus Dental" >

        </Helmet>
        <Header />
           
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        
      <section id="form" className="main">

        <div class="hero-image">
          <div class="hero-content">
              <div class="container-fluid">
                  <div class="hero-content-inner">
                      <h1>Optimus Dental</h1>
                      <p>Najbolje rješenje za Vaš osmijeh</p>
                  </div>
              </div>
        </div>

            <div class="container-fluid">
                
                <div class="col-sm-6 col-sm-offset-6 col-md-4 col-md-offset-8 form">
                    <h3><svg class="icon icon-envelope-o"></svg>Zakažite termin</h3>
                    <form action="https://getsimpleform.com/messages?form_api_token={{ site.api_token }}" method="post">
                        <div class="form-field">
                            <input name="name" type="text" placeholder="Name" required />
                        </div>
                        <div class="form-field">
                            <input name="phone" type="tel" placeholder="Phone" required />
                        </div>
                        <div class="form-field">
                            <input name="email" type="email" placeholder="Email" required />
                        </div>
                        <div class="form-field">
                            <textarea name="comments" placeholder="Message" required></textarea>
                        </div>
                        <input type="submit" class="btn btn-default" value="Send" />
                    </form>
                </div>

            </div>
         </div>
      </section>


      <section id="3 columns">
      <div class="three-shade-col">
    <div class="col-sm-4">
        <svg class="icon icon-envelope-o"></svg>
        <h3>Contact Us</h3>
        <ul>
          Email
        </ul>
    </div>
    <div class="col-sm-4">
        <svg class="icon icon-clock-o"></svg>
        <h3>Opening Hours</h3>
        <table>
            <tbody>
                <tr>
                    <td>Ponedjeljak – Petak</td>
                    <td>887887</td>
                </tr>
                <tr>
                    <td>Subota</td>
                    <td>5353535</td>
                </tr>
                <tr>
                    <td>Nedjelja</td>
                    <td>7756757</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="col-sm-4">
        <svg class="icon icon-map-marker"></svg>
        <h3>Location</h3>
            <p>
                address
            </p>
    </div>
    </div>
</section>

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Ipsum sed adipiscing</h2>
                </header>
                <p>
                  Sed lorem ipsum dolor sit amet nullam consequat feugiat
                  consequat magna adipiscing magna etiam amet veroeros. Lorem
                  ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem
                  ipsum dolor sit amet aliquam.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/generic" className="button">
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Magna veroeros</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3>Ipsum consequat</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3>Amed sed feugiat</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
              <li>
                <span className="icon major style5 fa-diamond"></span>
                <h3>Dolor nullam</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Ipsum consequat</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>5,120</strong> Etiam
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>8,192</strong> Magna
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>2,048</strong> Tempus
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>4,096</strong> Aliquam
              </li>
              <li className="style5">
                <span className="icon fa-diamond"></span>
                <strong>1,024</strong> Nullam
              </li>
            </ul>
            <p className="content">
              Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl
              eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum
              ac arcu sit amet, fermentum pellentesque et purus. Integer maximus
              varius lorem, sed convallis diam accumsan sed. Etiam porttitor
              placerat sapien, sed eleifend a enim pulvinar faucibus semper quis
              ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer
              eget purus nec nulla mattis et accumsan ut magna libero. Morbi
              auctor iaculis porttitor. Sed ut magna ac risus et hendrerit
              scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras
              eu ornare dui curabitur lacinia.
            </p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>
                Donec imperdiet consequat consequat. Suspendisse feugiat congue
                <br />
                posuere. Nulla massa urna, fermentum eget quam aliquet.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button special">
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>

         <Maps />


          
    </Layout>
    )
  }
}

export default Index
