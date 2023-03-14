import {
    jsdev,
    tsdev,
    reactdev,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    office,
    carrent,
    jobit,
    tripguide,
    threejs,
    socialmedia,
    forkify,
    cardgame,
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
      title: "JavaScript Developer",
      icon: jsdev,
    },
    {
      title: "TypeScript Developer",
      icon: tsdev,
    },
    {
      title: "React Developer",
      icon: reactdev,
    },
    {
      title: "Web Developer",
      icon: web,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Service Desk Agent",
      company_name: "Kontakt Home",
      icon: office,
      iconBg: "#383E56",
      date: "January 2021 - October 2021",
      points: [
        "Contacting with customers for answering their questions and addressing their concerns.",
        "Diagnosing and resolving technical issues that customers may encounter with the company's products or services.",
        "Escalating complex issues to higher-level technical support or other departments within the company and ensuring that the customer is informed of the escalation process.",
        "Documenting each customer interactions in a system for reporting, training, and quality assurance purposes.",
        'Providing excellent, empathetic customer service to all customers to ensure that their needs are met.'
      ],
    },
    {
      title: "Systems Engineer",
      company_name: "Infosys",
      icon: office,
      iconBg: "#E6DEDD",
      date: "June 2022 - Feb 2023",
      points: [
        "Writing VBA code to automate tasks, such as formatting data, sorting and filtering data, generating reports, and performing calculations.",
        "Designing and developing custom Excel macros that automate complex workflows and improve productivity.",
        "Troubleshooting and debugging code to identify and fix errors and optimize performance.",
        "Developing user-friendly interfaces and dashboards to make it easier for non-technical users to interact with the spreadsheet.",
        'Working with stakeholders to understand their requirements and developing solutions that meet their needs.',
        'Assist other staff with development activities.',
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Social Media",
      description:
        "Web-based demo platform where users can connect with friends, family, and like-minded individuals from around the world via variety of features, including customizable profiles, private messaging, photo and video sharing, groups and forums, and more. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        // {
        //   name: "mongodb",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "tailwind",
        //   color: "pink-text-gradient",
        // },
        {
          name: 'css',
          color: "pink-text-gradient",
        }
      ],
      image: socialmedia,
      source_code_link: "https://github.com/Kamilismayilzade/social-media-react",
    },
    {
      name: "Forkify ",
      description:
        "Web recipe application is an easy-to-use platform features a vast collection of delicious and nutritious recipes that are perfect for any occasion. With step-by-step instructions and helpful tips it will guide you through every recipe with ease. ",
      tags: [
        {
          name: "javascript",
          color: "yellow-text",
        },
        // {
        //   name: "restapi",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "scss",
        //   color: "pink-text-gradient",
        // },
        {
          name: 'parcel',
          color: 'pink-text-gradient',
        },
      ],
      image: forkify,
      source_code_link: "https://github.com/Kamilismayilzade/forkify-recipe-app",
    },
    {
      name: "Card Memory",
      description:
        "Fun and addictive card game that will challenge your memory and concentration. Similar to Mahjong, the objective of the game is to find matching pairs of cards and remove them from the board. With multiple levels of difficulty and a variety of themes to choose from, it offers endless hours of entertainment for players of all ages.",
      tags: [
        // {
        //   name: "nextjs",
        //   color: "blue-text-gradient",
        // },
        // {
        //   name: "supabase",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },

        {
          name: "react",
          color: "blue-text-gradient",
        },

        {
          name: "pexelsapi",
          color: "green-text-gradient",
        },
      ],
      image: cardgame,
      source_code_link: "https://github.com/Kamilismayilzade/card-memory-game-react",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };