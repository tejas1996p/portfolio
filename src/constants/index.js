import {
    mobile,
    frontend,
    creator,
    web,
    javascript,
    c,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    cplusplus,
    git,
    figma,
    ue4,
    dpd,
    ibrainers,
    rk,
    bankpayment,
    restaurant,
    portfolio,
    threejs,
    megha,
    jaypal,
    snehal,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Front End Developer",
      icon: frontend,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C Language",
      icon: c,
    },
    {
      name: "C++ Language",
      icon: cplusplus,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Unreal Engine 4",
      icon: ue4,
    },
  ];
  
  const experiences = [
    {
      title: "Computer Assistant",
      company_name: "D P Desai HighSchool",
      icon: dpd,
      iconBg: "#E6DEDD",
      date: "Sep 2018 - Dec 2019",
      points: [
        "Ran School’s IT, dealing with hardware/software issues and upgrading as required.",
        "Managed budget for hardware/ software requirements for school’s computer laboratory.",
      ],
    },
    {
      title: "Web Developer - Remote",
      company_name: "R.K. WebSoft Technology",
      icon: rk,
      iconBg: "#383E56",
      date: "Sep 2018 - Dec 2019",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Solving the errors and Provided technical support for application related issues on client workstations.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Technologies used HTML, CSS, JS.",
      ],
    },
    {
      title: "Web Developer - Internship",
      company_name: "iBrainer Ltd",
      icon: ibrainers,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Sep 2021",
      points: [
        "Discussion of user interface concepts and applications with the development team.",
        "Applicant criteria and interface designs are being reviewed.",
        "Determining web-based user interactions.",
        "Creating and implementing extremely responsive user interface components utilising react ideas.",
        "Creating application interface code in JavaScript using react.js processes.",
        "Debugging programme codes and troubleshooting interface software.",
        "Creating and implementing front-end architecture to support user interface principles.",
        "Monitoring and enhancing front-end performance.",
        "Documenting application changes and generating updates.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "iBrainer Ltd",
      icon: ibrainers,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "Discussion of user interface concepts and applications with the development team.",
        "Applicant criteria and interface designs are being reviewed.",
        "Determining web-based user interactions.",
        "Creating and implementing extremely responsive user interface components utilising react ideas.",
        "Creating application interface code in JavaScript using react.js processes.",
        "Debugging programme codes and troubleshooting interface software.",
        "Creating and implementing front-end architecture to support user interface principles.",
        "Monitoring and enhancing front-end performance.",
        "Documenting application changes and generating updates.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Tejas proved me wrong.",
      name: "Megha Brahmbhatt",
      designation: "Founder & CEO",
      company: "iBrainers Ltd.",
      image: megha,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Tejas does.",
      name: "Jaypal Brahmbhatt",
      designation: "Full Stack Developer",
      company: "iBrainers Ltd",
      image: jaypal,
    },
    {
      testimonial:
        "After Tejas optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Snehal Patel",
      designation: "Software Developer",
      company: "R.K. WebSoft Technology",
      image: snehal,
    },
  ];
  
  const projects = [
    {
      name: "Bank Payment UI/UX Design",
      description:
        "Web-based platform that allows users to search, transfer, controlling invoicing & billing and manage payments from various providers, providing a convenient and efficient solution for convenient needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: bankpayment,
      source_code_link: "https://github.com/tejas1996p/bank-payment-modern-UI-UX",
    },
    {
      name: "Restaurant Web Page Design",
      description:
        "Web application that enables users to see  the restaurant menu, prices, and awards.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: restaurant,
      source_code_link: "https://github.com/tejas1996p/reactjs_restaurant",
    },
    {
      name: "PortFolio",
      description:
        "Portfolio build using react js and tailwindcss.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };