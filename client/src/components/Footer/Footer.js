import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="d-flex justify-content-center">   
                <a className="btn btn-outline-dark btn-social mx-1" 
                    href="https://facebook.com/roystersnc" target="blank">
                        <i className="fab fa-fw fa-facebook fa-lg"></i></a>
                <a className="btn btn-outline-dark btn-social mx-1" 
                    href="https://www.instagram.com/in/roystersnc" target="blank">
                        <i className="fab fa-fw fa-instagram fa-lg"></i></a>
                       
            </div>
            <span className="d-flex justify-content-center text-muted mx-auto">
              Follow us on Social Media
            </span>
        </footer>
    )
}

export default Footer;