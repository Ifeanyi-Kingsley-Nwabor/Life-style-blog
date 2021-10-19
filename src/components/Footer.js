import React from 'react'

const Footer = () => {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Copyright B2K Lifestyle hotspot</h5>
              <p className="grey-text text-lighten-4">
                More info on www.bkk.com
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} B2K World
            <a className="grey-text text-lighten-4 right" href="#!">
              B2K Inc
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;