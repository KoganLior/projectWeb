import { Container } from "react-bootstrap";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function SiteFooter() {
  return (
    <footer class="py-5 mt-5 bg-dark">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Footer Title</h5>
            <p>Here the footer content will be.</p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="footer-link">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Link 3
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Link 4
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="footer-link">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#!" className="footer-link">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        <Container>
          <span className="icons">
            <FaInstagram></FaInstagram>
          </span>
          <span className="icons">
            <FaFacebook></FaFacebook>
          </span>
          <span className="icons">
            <FaTwitter></FaTwitter>
          </span>
        </Container>
        © 2022 Copyright:
        <p>Lior Kogan</p>
      </div>
    </footer>
  );
}
