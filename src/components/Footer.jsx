import React from 'react';

const Footer = () => {
  return (
    <div className=" ">
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#1c2331" }}>
        <section className="d-flex justify-content-between p-4" style={{ backgroundColor: "#1c2331" }}>
          <div className="me-5">
            <span></span>
          </div>

         
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">READERSSTORE</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p>
                  Here you can find any book you want to read and buy.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p>
                  <a href="#!" className="text-white">MDBook</a>
                </p>
                <p>
                  <a href="#!" className="text-white">all of us are dead</a>
                </p>
                <p>
                  <a href="#!" className="text-white">bran home</a>
                </p>
                <p>
                  <a href="#!" className="text-white">why it's always me?</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p>
                  <a href="#!" className="text-white">Mohamed Idrissi</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Help</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p><i className="fas fa-home mr-3"></i> Laayoune Texes,Maroc</p>
                <p><i className="fas fa-home mr-3"></i> Mohamed Moudden-Idrissi</p>
                <p><i className="fas fa-home mr-3"></i> Amine Gharradi</p>


                <p><i className="fas fa-phone mr-3"></i> +212 16885638</p>
                <p><i className="fas fa-print mr-3"></i> +212 617-468071</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2024 Copyright:
          <a className="text-white" href="https://facebook.com/">Readersstore.com</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
