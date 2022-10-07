import Image from "next/image";
import Link from "next/link";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="page-width container">
        <div className="row">
          <div className="footer-company-info">
            <div className="footer-logo">
              <Image src="/assets/images/footer-logo.png" layout="fill" />
            </div>
            <div className="footer-about">
              <p>
                InfraMantra is a Real Estate Firm that helps to Build Value on
                Commercial and Residential properties. We work with the top
                Builders in Delhi/NCR
              </p>
              <div className="social-icon">
                <div className="social">
                  <Link href="#">
                    <a>
                      <Image src="/assets/images/fb-icon.png" layout="fill" />
                    </a>
                  </Link>
                </div>
                <div className="social">
                  <Link href="#">
                    <a>
                      <Image
                        src="/assets/images/twitter-icon.png"
                        layout="fill"
                      />
                    </a>
                  </Link>
                </div>
                <div className="social">
                  <Link href="#">
                    <a>
                      <Image
                        src="/assets/images/insta-icon.png"
                        layout="fill"
                      />
                    </a>
                  </Link>
                </div>
                <div className="social">
                  <Link href="#">
                    <a>
                      <Image
                        src="/assets/images/linkedIn-icon.png"
                        layout="fill"
                      />
                    </a>
                  </Link>
                </div>
                <div className="social">
                  <Link href="#">
                    <a>
                      <Image
                        src="/assets/images/youtube-icon.png"
                        layout="fill"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <Link href="#">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>About Us</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Careers</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#">
                  <a>Home Loan</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Blogs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Buy</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Rent</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#">
                  <a>News</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>FAQ’s</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Our Team</a>
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#">
                  <a>Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Terms & Conditions</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>User Agreement</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Disclaimer</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row other-links">
          <ul>
            <li>
              <Link href="#">
                <a>Studio apartments in Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Resale flats in Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Ready to move flats in Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Fully furnished apartments in Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Resal apartments Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Townships in Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Apartment for sale in Gurgaon</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="#">
                <a>Studio apartments in Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Resale flats in Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Ready to move flats in Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Fully furnished apartments in Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Resal apartments Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Townships in Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Apartment for sale in Gurgaon</a>
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="#">
                <a>Studio apartments in Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Resale flats in Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Ready to move flats in Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Fully furnished apartments in Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Resal apartments Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Townships in Gurgaon</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Apartment for sale in Gurgaon</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="copyright">
        © 2022 Inframantra.com. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
