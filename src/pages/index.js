import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
//import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import heartsvg from '../assets/svg/heart-o.svg'
import gl1 from '../assets/img/gallery/thumb/gl1.jpg'
import gl2 from '../assets/img/gallery/thumb/gl2.jpg'
import tm1 from '../assets/img/team/team1.jpg'
import tm2 from '../assets/img/team/team2.jpg'
//import pic02 from '../assets/img/hero.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
//import Nav from '../components/Nav'
//import GoogleMap from '../components/GoogleMaps'
import Maps from '../components/Maps'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }
/*
  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }
*/
  render() {
    return (
      <Layout>
        <Helmet title="Optimus Dental" >
        </Helmet>
        <Header />
{/*
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />
 */}
        
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
                                <input name="name" type="text" placeholder="Ime i prezime" required />
                            </div>
                            <div class="form-field">
                                <input name="phone" type="tel" placeholder="Telefon" required />
                            </div>
                            <div class="form-field">
                                <input name="email" type="email" placeholder="Email" required />
                            </div>
                            <div class="form-field">
                                <textarea name="comments" placeholder="Poruka" required></textarea>
                            </div>
                            <input type="submit" class="btn btn-default" value="Pošalji" />
                        </form>
                    </div>

                </div>
            </div>
          </section>


          <section id="3 columns">
          <div class="three-shade-col">
            <div class="col-sm-4">
                <svg class="icon icon-envelope-o"></svg>
                <h3>Kontaktirajte nas</h3>
                <ul>
                  Email
                </ul>
            </div>
            <div class="col-sm-4">
                <svg class="icon icon-clock-o"></svg>
                <h3>Radno vrijeme</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Ponedjeljak – Petak</td>
                            <td>12-20h</td>
                        </tr>
                        <tr>
                            <td>Subota</td>
                            <td>Ne radimo</td>
                        </tr>
                        <tr>
                            <td>Nedjelja</td>
                            <td>Ne radimo</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-sm-4">
                <svg class="icon icon-map-marker"></svg>
                <h3>Lokacija</h3>
                    <p>
                        Poljicka 28a, Split
                    </p>
            </div>
          </div>
      </section>
      
      <section id="treatments">

      <div id="treatments" class="treatments">
    <div class="container-fluid">
        <h2 class="section-title">Treatments</h2>

        <div class="row">
            
                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        
                        <h4>Invisible braces</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam minima, itaque molestiae ut ratione unde?</p>
                    </div>
                </div>
            
                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        <h4>Cosmetic Dentistry</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam minima, itaque molestiae ut ratione unde?</p>
                    </div>
                </div>
            
                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        <h4>Stain removal</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            
                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        <h4>Dentures</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam minima, itaque molestiae ut ratione unde?</p>
                    </div>
                </div>
            
                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        <h4>Emergency Calls</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam minima, itaque molestiae ut ratione unde?</p>
                    </div>
                </div>
            
                <div class="col-sm-6 col-md-4">
                    <div class="icon-box">
                        <h4>Sedation</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam minima, itaque molestiae ut ratione unde?</p>
                    </div>
                </div>
            
        </div>
    </div>
</div>
</section>

      <section id="team">
  <div id="team" class="team"> 
    <h2 class="section-title">Naš tim</h2> 
    <div id="team-carousel" class="owl-carousel owl-theme">
       <div class="owl-wrapper-outer">
          <div class="owl-wrapper">
          <div class="owl-item"><div class="expandable-box">
            <div class="expandable-box-top">
                <img src={tm1} alt="Britta Perry"/>
                <h4>Britta Perry</h4>
            </div>
            <div class="expandable-box-bottom">
                <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="email@gmail.com"></span>
                <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="9659 43 21"></span>
            </div>
        </div>
       </div>
      <div class="owl-item">
        <div class="expandable-box">
            <div class="expandable-box-top">
                <img src="/dentistsmile/img/team2.jpg" alt="Troy Barnes"/>
                <h4>Troy Barnes</h4>
            </div>
            <div class="expandable-box-bottom">
                <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="email@gmail.com"></span>
                <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="9659 43 21"></span>
            </div>
        </div>
      </div>
      <div class="owl-item">
        <div class="expandable-box">
           <div class="expandable-box-top">
               <img src="/dentistsmile/img/team1.jpg" alt="Annie"/>
               <h4>Annie</h4>
           </div>
           <div class="expandable-box-bottom">
               <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="email@gmail.com"></span>
               <span data-toggle="tooltip" data-placement="bottom" title="" data-original-title="9659 43 21"></span>
           </div>
        </div>
      </div>
      
      </div>
      </div>
      </div>
      </div>
        
      </section>
        
    
        
    
        
    

      <div id="gallery" class="gallery">
        
        <h2 class="section-title">Galerija</h2>
    
        
            <a href="assets/img/gallery/large/gl1.jpg" class="gallery-item expandable-box image-link">
                <div class="expandable-box-top">
                    <img src={gl1} alt="something meaningful" />
                </div>
                <div class="expandable-box-bottom">
                    <span><img src={heartsvg}></img></span>
                </div>
            </a>
        
            <a href="assets/img/gallery/large/gl2.jpg" class="gallery-item expandable-box image-link">
                <div class="expandable-box-top">
                    <img src={"assets/img/gallery/thumb/gl2.jpg"} alt="something meaningful" />
                </div>
                <div class="expandable-box-bottom">
                    <span><img src={heartsvg}></img></span>
                </div>
            </a>
        
            <a href="assets/img/gallery/large/gl3.jpg" class="gallery-item expandable-box image-link">
                <div class="expandable-box-top">
                    <img src="assets/img/gallery/thumb/gl3.jpg" alt="something meaningful" />
                </div>
                <div class="expandable-box-bottom">
                    <span><img src={heartsvg}></img></span>
                </div>
            </a>
        
            <a href="assets/img/gallery/large/gl4.jpg" class="gallery-item expandable-box image-link">
                <div class="expandable-box-top">
                    <img src={require('../assets/img/gallery/thumb/gl4.jpg')} alt="something meaningful" />
                </div>
                <div class="expandable-box-bottom">
                    <span><img src={heartsvg}></img></span>
                </div>
            </a>
        
            <a href="assets/img/gallery/large/gl5.jpg" class="gallery-item expandable-box image-link">
                <div class="expandable-box-top">
                    <img src="assets/img/gallery/thumb/gl5.jpg" alt="something meaningful" />
                </div>
                <div class="expandable-box-bottom">
                    <span><img src={heartsvg}></img></span>
                </div>
            </a>
        
            <a href="assets/img/gallery/large/gl1.jpg" class="gallery-item expandable-box image-link">
                <div class="expandable-box-top">
                    <img src="assets/img/gallery/thumb/gl1.jpg" alt="something meaningful" />
                </div>
                <div class="expandable-box-bottom">
                    <span><img src={heartsvg}></img></span>
                </div>
            </a>
        
            <a href="assets/img/gallery/large/gl2.jpg" class="gallery-item expandable-box image-link">
                <div class="expandable-box-top">
                    <img src="assets/img/gallery/thumb/gl2.jpg" alt="something meaningful" />
                </div>
                <div class="expandable-box-bottom">
                    <span><img src={heartsvg}></img></span>
                </div>  
            </a>
        
            <a href="assets/img/gallery/large/gl3.jpg" class="gallery-item expandable-box image-link">
                <div class="expandable-box-top">
                    <img src="assets/img/gallery/thumb/gl3.jpg" alt="something meaningful" />
                </div>
                <div class="expandable-box-bottom">
                    <span><img src={heartsvg}></img></span>
                </div>
            </a>
        
    
    </div>


      <section id="map" className="main special">
        <Maps />
      </section>
      
    

      
</Layout>
    )
  }
}

export default Index
