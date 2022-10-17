import Image from "next/image";
import Link from "next/link";
import Disclaimer from "./Disclaimer";
import FloatingContactBtn from "./FloatingContactBtn";
import SelectLocation from "./SelectLocation";

const Footer = (props) => {
  return (
    <>
      {/* <SelectLocation /> */}
      <Disclaimer />
      <FloatingContactBtn />
      <div className="floating-whatsapp">
        <Link href="#">
          <a>
            <Image src="/assets/images/whatsapp-icon.png" layout="fill" />
          </a>
        </Link>
      </div>
      <div className="floating-call">
        <Link href="#">
          <a>
            <svg width="23" height="25" viewBox="0 0 23 25" fill="none">
              <path
                d="M16.0801 25C13.8293 24.9018 11.8259 24.1191 10.0305 22.8366C6.13546 20.0548 3.07987 16.5204 1.05918 12.1382C-0.00459522 9.83086 -0.365605 7.40687 0.434393 4.91579C0.863753 3.57788 1.62717 2.45194 2.69576 1.5438C3.13763 1.16848 3.56603 0.775664 4.0262 0.424657C4.72415 -0.107201 5.42403 -0.170402 6.04785 0.412017C7.52944 1.79465 8.62498 3.45343 9.10633 5.46127C9.28442 6.20412 9.02738 6.88279 8.48924 7.40882C8.01848 7.8697 7.51403 8.29946 6.99322 8.70297C5.99779 9.47402 5.69069 10.2431 6.19514 11.406C6.60236 12.3433 7.13858 13.2437 7.73449 14.0741C8.7251 15.4538 9.86589 16.712 11.2541 17.7047C11.6161 17.9633 12.0242 18.1685 12.4363 18.3386C13.2488 18.6741 13.966 18.4845 14.5889 17.8622C15.0221 17.4305 15.4716 17.0144 15.926 16.6031C16.7732 15.8369 17.7426 15.7008 18.7304 16.2258C20.237 17.026 21.5106 18.1422 22.5551 19.4957C23.2252 20.363 23.1251 21.1613 22.3443 21.9178C21.1005 23.1225 19.8182 24.2805 18.0642 24.6675C17.4105 24.8114 16.7424 24.8911 16.081 25H16.0801Z"
                fill="url(#paint0_linear_560_453)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_560_453"
                  x1="11.5"
                  y1="0"
                  x2="11.5"
                  y2="25"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#E7B554" />
                  <stop offset="1" stopColor="#C3972F" />
                </linearGradient>
              </defs>
            </svg>
          </a>
        </Link>
      </div>
      <footer className="footer">
        <div className="page-width container">
          <div className="row">
            <div className="footer-company-info">
              <div className="footer-logo">
                <Image src="/assets/images/footer-logo.png" layout="fill" />
              </div>
              <div className="footer-about">
                <p>
                  Inframantra is a PropTech advisory firm that helps customers -
                  search, discover, buy and manage residential and commercial
                  properties. We work with top builders across India.
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
                  <a>Ready to move flats in Gurgaon</a>
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
                  <a>Ready to move flats in Gurgaon</a>
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
                  <a>Ready to move flats in Gurgaon</a>
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
    </>
  );
};

export default Footer;
