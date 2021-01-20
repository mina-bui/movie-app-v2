// Footer
import React from 'react';
//import { Link } from 'react-router-dom';
//import '../../styles.scss';

const d = new Date();
const year = d.getFullYear();

const Footer = () => {

    return (
        <footer>
            <hr></hr>
            <div className="footer-grid">
                <div className="contact">
                    <h3>Get in Touch</h3>
                </div>

                <div className="contact-info">
                    <h5>Email</h5>
                    <p>mbui14@my.bcit.ca<br></br>(604)-412-7773</p>
                </div>

                <div className="social">
                    <h5>Social Media</h5>
                    <span class="surround">
                        <span class="initial">
                            <a href="www.instagram.com"><img src="/../images/instagram-icon.png" id="instagram-icon"></img></a>
                        </span>
                        <span class="onhover">
                            <a href="www.instagram.com"><img src="/../images/darklilac-instagram-icon.png" id="darklilac-instagram-icon"></img></a>
                        </span>
                    </span>
                    <span class="surround">
                        <span class="initial">
                            <a href="www.facebook.com"><img src="/../images/facebook-icon.png" id="facebook-icon"></img></a>
                        </span>
                        <span class="onhover">
                            <a href="www.facebook.com"><img src="/../images/darklilac-facebook-icon.png" id="darklilac-facebook-icon"></img></a>
                        </span>
                    </span>
                    <span class="surround">
                        <span class="initial">
                            <a href="www.twitter.com"><img src="/../images/twitter-icon.png" id="twitter-icon"></img></a>
                        </span>
                        <span class="onhover">
                            <a href="www.twitter.com"><img src="/../images/darklilac-twitter-icon.png" id="darklilac-twitter-icon"></img></a>
                        </span>
                    </span>
                </div>

                <div className="location">
                    <h3>Where We Are</h3>
                </div>

                <div className="address">
                    <h5>Address</h5>
                    <p>555 Seymour Street<br></br>Vancouver, BC<br></br>V6B 3HP</p>
                </div>
            </div>

            <div className="copyright">
                <p>&copy; {year} Filmdex</p>
            </div>

        </footer>
    )
}

export default Footer;