import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = (props) => {
  const [navigation, setNavigation] = useState(false);

  const navigationHandler = () => {
    navigation ? setNavigation(false) : setNavigation(true)
  }

  return (
    <header className="header">
      <div className="page-width">
        <div className="row">
          <div className="logo">
            <Image
              src="/assets/images/infra-logo.png"
              layout="responsive"
              height="35"
              width="130"
            />
          </div>
          <div className={`nav-area ${navigation ? ' active' : ''}`}>
            <nav className="navigation">
              <li>
                <Link href="#">
                  <a>Buy</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Loan</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Property Trends</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Key Localities</a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="nav-right">
            <div className="navigation">
              <li>
                <a href="#">Contact Us</a>
              </li>
              {/* <li className="dropdown">
                <a href="#">Contact Us</a>
                <div className="dropdown-icon">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 1.93115L5 6.06908L9 1.93115"
                      stroke="#E7B554"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <ul className="dropdown-inner">
                  <li>
                    <Link href="#">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Buy</a>
                    </Link>
                  </li>
                </ul>
              </li> */}
            </div>
            <div className={`navbars ${navigation ? ' active' : ''}`}>
              <div onClick={navigationHandler}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
