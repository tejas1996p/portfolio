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
    dashboard,
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
        "Managed and resolved hardware and software issues as the Computer Assistant, ensuring seamless operation of the organization's computer systems.",
        "Effectively assisted users with technical support, software installations, and troubleshooting, contributing to a reliable and user-friendly computing environment.",
        "Oversaw budgetary aspects, effciently managing resources for hardware and software requirements while maintaining compliance with security standards.",
      ],
    },
    {
      title: "Web Developer - Internship",
      company_name: "iBrainer Ltd",
      icon: ibrainers,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Sep 2021",
      points: [
        "Facilitated collaborative discussions with the development team to explore innovative user interface concepts and applications.",
        "Conducted thorough reviews of applicant criteria and interface designs, ensuring adherence to project goals and standards.",
        "Demonstrated proficiency in creating application interface code in JavaScript, utilizing React.js to implement highly responsive user interface components.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "iBrainer Ltd",
      icon: ibrainers,
      iconBg: "#383E56",
      date: "Jan 2022 - Cont.",
      points: [
        "Engaged in collaborative discussions with the development team to strategize user interface concepts and applications, conducting thorough reviews of applicant criteria and interface designs.",
        "Specialized in determining and optimizing web-based user interactions by implementing highly responsive interface components using React.js.",
        "Demonstrated expertise in creating and maintaining front-end architecture, encompassing debugging, troubleshooting, performance monitoring, and meticulous documentation of application changes for routine updates.",
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
      name: "Modern Dashboard",
      description:
        "Web application that enables users can see dashboard",
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
      image: dashboard,
      source_code_link: "https://github.com/tejas1996p/Modern-Dashboard",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };