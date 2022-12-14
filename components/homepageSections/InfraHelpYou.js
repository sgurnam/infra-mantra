import Image from "next/image";
import Section from "../UI/Section";

const InfraHelpYou = (props) => {
  const helpList = [
    {
      id: "infra-help--1",
      title: "Searching & Shortlisting Property",
      description:
        "With the precise details of your requirement you can search the available properties.",
      image: "Searching-Shortlisting-Property.png",
    },
    {
      id: "infra-help--2",
      title: "Organizing Site Visit",
      description:
        "Organizing site visit, where Inframantra will assist you in visiting multiple project sites based on your selection.",
      image: "Organizing-Site-Visit-1.png",
    },
    {
      id: "infra-help--3",
      title: "Home Loan",
      description:
        "We provide Home loan facilitation through major banks across India and help you with documentations.",
      image: "Home-Loan.png",
    },
    {
      id: "infra-help--4",
      title: "Post - Sales Assistance",
      description:
        "We help our customers with all necessary documentation and address all project related queries.",
      image: "Post-Sales-Assistance.png",
    },
  ];
  return (
    <Section classes="infra-help-you-section" pageWidth="container">
      <div className="section-head">
        <h2>How Inframantra Helps You</h2>
        <p>We provide end to end assistance from finding your dream home to handing you over the keys</p>
      </div>
      <div className="infra-help-grids-row">
        {helpList.map((element) => (
          <div className="infra-help-grid" key={element.id}>
            <div className="image">
              <Image src={`/assets/images/${element.image}`} layout="fill" />
            </div>
            <div className="content">
              <h5>{element.title}</h5>
              <p>{element.description}</p>
            </div>
          </div>
        ))} 
      </div>
      <div className="floating-svg-left">
        <svg width="276" height="244" viewBox="0 0 276 244" fill="none">
          <g opacity="0.3">
            <g clipPath="url(#clip0_560_258)">
              <path
                d="M256 115.533L228.116 144.905L151.225 70.9001L-82 131.905V90.4052L162.637 26.0051L162.661 26.1175L162.885 25.9052L256 115.533Z"
                fill="url(#paint0_linear_560_258)"
              />
            </g>
            <rect
              width="168.746"
              height="134.63"
              transform="matrix(-0.594181 0.804331 -0.600659 -0.799506 275.521 107.637)"
              fill="url(#paint1_linear_560_258)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_560_258"
              x1="-97"
              y1="85.3989"
              x2="256"
              y2="85.3989"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F2D874" />
              <stop offset="0.01" stopColor="#F0D571" />
              <stop offset="0.15" stopColor="#DCB74E" />
              <stop offset="0.27" stopColor="#D0A438" />
              <stop offset="0.35" stopColor="#CB9D30" />
              <stop offset="0.43" stopColor="#CDA034" />
              <stop offset="0.52" stopColor="#D4AB3F" />
              <stop offset="0.6" stopColor="#DFBC53" />
              <stop offset="0.68" stopColor="#EED46E" />
              <stop offset="0.71" stopColor="#F5DF7B" />
              <stop offset="0.78" stopColor="#E8CC67" />
              <stop offset="1" stopColor="#C3972F" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_560_258"
              x1="102.414"
              y1="23.2526"
              x2="101.45"
              y2="124.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_560_258">
              <rect
                width="262.978"
                height="119"
                fill="white"
                transform="translate(-2 25.9052)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      
      <div className="floating-svg-left right">
        <svg width="276" height="244" viewBox="0 0 276 244" fill="none">
          <g opacity="0.3">
            <g clipPath="url(#clip0_560_258)">
              <path
                d="M256 115.533L228.116 144.905L151.225 70.9001L-82 131.905V90.4052L162.637 26.0051L162.661 26.1175L162.885 25.9052L256 115.533Z"
                fill="url(#paint0_linear_560_258)"
              />
            </g>
            <rect
              width="168.746"
              height="134.63"
              transform="matrix(-0.594181 0.804331 -0.600659 -0.799506 275.521 107.637)"
              fill="url(#paint1_linear_560_258)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_560_258"
              x1="-97"
              y1="85.3989"
              x2="256"
              y2="85.3989"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F2D874" />
              <stop offset="0.01" stopColor="#F0D571" />
              <stop offset="0.15" stopColor="#DCB74E" />
              <stop offset="0.27" stopColor="#D0A438" />
              <stop offset="0.35" stopColor="#CB9D30" />
              <stop offset="0.43" stopColor="#CDA034" />
              <stop offset="0.52" stopColor="#D4AB3F" />
              <stop offset="0.6" stopColor="#DFBC53" />
              <stop offset="0.68" stopColor="#EED46E" />
              <stop offset="0.71" stopColor="#F5DF7B" />
              <stop offset="0.78" stopColor="#E8CC67" />
              <stop offset="1" stopColor="#C3972F" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_560_258"
              x1="102.414"
              y1="23.2526"
              x2="101.45"
              y2="124.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_560_258">
              <rect
                width="262.978"
                height="119"
                fill="white"
                transform="translate(-2 25.9052)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </Section>
  );
};

export default InfraHelpYou;
