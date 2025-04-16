/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Gowtham BC Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Gowtham B C Portfolio",
    type: "website",
    url: "https://gowthamportfolio.streamlit.app/",
  },
};

//Home Page
const greeting = {
  title: "Gowtham BC",
  logo_name: "Gowtham BC",
  nickname: "Gowtham",
  subTitle: `A passionate individual with 6.5 years of experience in Consulting, Artificial Intelligence and Software development experience.\n Proven expertise in designing, developing and deploying scalable, high performance applications.\n Specialization in building end to end cloud AI applications which creates an impact. With domain experties in  Web-data crawling, processing of eCommerce platforms, and Catalog Platforms. Strong problem-solving skills and a passion for continuous learning.`,
  resumeLink:
    "https://drive.google.com/file/d/1iP3M1RcW1g37HhWygH7KQwW_fITdPas8/view?usp=sharing",
  portfolio_repository: "https://gowthamportfolio.streamlit.app/",
  githubProfile: "https://github.com/Gowtham171996",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Gowtham171996",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link:
      "https://www.linkedin.com/in/gowtham-buvalli-chikkathammaiah-788b62a9/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:bcgowtham17@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Artificial Intelligence",
      fileName: "BackendImg",
      skills: [
        "⚡ Computer Vision Engineer: Designed, develop, and maintain scalable Aritificial Intelligence cloud-based applications.",
        "⚡ Machine Learning Development: Creating application backend in Datascience, Medical Imaging, Time series Dataset.",
        "⚡ Data Storage and Optimization: Manage and optimize data storage with relational databases and caching strategies.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "devicon:python",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#15B622",
          },
        },
        {
          skillName: "MicroServices",
          imageSrc: "microservices.png",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Openapi",
          fontAwesomeClassname: "devicon:openapi",
          style: {
            color: "#CB3837",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "devicon:mysql",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Pytorch",
          fontAwesomeClassname: "devicon:pytorch",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Amazon web services",
          fontAwesomeClassname: "simple-icons:amazonwebservices",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "devicon:azure",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "devicon:plotly",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Ubuntu",
          fontAwesomeClassname: "devicon:ubuntu",
          style: {
            color: "#663399",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Full-Stack Application Development: Builds seamless applications, connecting Node.js/Express.js backends with Angular frontends and deploying in GCP.",
        "⚡ RESTful API Design: Proficient in designing and building RESTful APIs, adhering to best practices for resource management and data exchange.",
        "⚡ Security Implementation: Skilled in implementing security measures, including authentication and authorization.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "skill-icons:expressjs-dark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Dotnet",
          fontAwesomeClassname: "simple-icons:dotnet",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ GCP Application Deployment & Management: Deploy, manage, and monitor applications on GCP using GKE, Cloud Functions, Cloud Monitoring, and Cloud Logging.",
        "⚡ VM Website and Database Management: Host and maintain websites on virtual machine instances, integrating databases as needed.",
        "⚡ GCP Service Integration with Java: Integrate GCP services like Cloud Postgres, Cloud Storage, and Pub/Sub with Java applications using client libraries.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Cloud Functions",
          fontAwesomeClassname: "logos:google-cloud-functions",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "PubSub",
          imageSrc: "pubsub.png",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Google Cloud Storage",
          imageSrc: "googlecloudstorage.png",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Google Big Query",
          imageSrc: "googlebigquery.png",
          style: {
            color: "#47A248",
          },
        },

        {
          skillName: "Cloud Memory Store",
          imageSrc: "cloudmemorystore.png",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Google Kubernetes Engine",
          imageSrc: "googlekubernetesengine.png",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/nikki_nimbalkar/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/nikki_nimbalkar",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/nikki_nimbalkar",
    },
  ],
};

const degrees = {
  degrees: [
    {
      college: "Hochschule Hof",
      title: "(Msc.) Masters in Applied Research in Computer Science",
      logo_path: "hshof-logo.gif",
      alt_name: "Hoschshule Hof",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ German Grade: 2.0/4",
        "⚡ Master Thesis: Qualitative Analysis of 3D reconstruction of objects” sensor fusion of RGB & Depth lidars",
        "⚡ Projects: Edge avoider & Puzzle Solver Robot, Vehicle Tracking System, Smart agriculture",
      ],
      website_link:
        "https://www.hof-university.com/studying-at-hof-university/our-degree-programs/applied-research-in-computer-science-msc.html",
    },
    {
      college: "Visvesvaraya Technological University",
      title: "(B.E) Bachelors in Computer Science and Engineering",
      logo_path: "vtu-logo.jfif",
      alt_name: "VTU",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ Grade: First Class",
        "⚡ I have studied software engineering subjects like Data Structures, Algorithms, DBMS, C# etc.",
        "⚡ Research Paper: Buvalli Chikkathammaiah, Gowtham & Prakash, B.. (2019). I3 Bot: Empowering Small and Medium Scale Enterprises with Machine Learning. International Journal of Scientific and Research Publications (IJSRP). 9. p90108. 10.29322/IJSRP.9.06. 2019.p90108.",
      ],
      website_link: "https://vtu.ac.in/en/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// const certifications = {
//     certifications: [{
//             title: "Machine Learning",
//             subtitle: "- Andrew Ng",
//             logo_path: "stanford_logo.png",
//             certificate_link: "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//             alt_name: "Stanford University",
//             color_code: "#8C151599",
//         },
//         {
//             title: "Deep Learning",
//             subtitle: "- Andrew Ng",
//             logo_path: "deeplearning_ai_logo.png",
//             certificate_link: "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
//             alt_name: "deeplearning.ai",
//             color_code: "#00000099",
//         },
//         {
//             title: "ML on GCP",
//             subtitle: "- GCP Training",
//             logo_path: "google_logo.png",
//             certificate_link: "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
//             alt_name: "Google",
//             color_code: "#0C9D5899",
//         },
//         {
//             title: "Data Science",
//             subtitle: "- Alex Aklson",
//             logo_path: "ibm_logo.png",
//             certificate_link: "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
//             alt_name: "IBM",
//             color_code: "#1F70C199",
//         },
//         {
//             title: "Big Data",
//             subtitle: "- Kim Akers",
//             logo_path: "microsoft_logo.png",
//             certificate_link: "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
//             alt_name: "Microsoft",
//             color_code: "#D83B0199",
//         },
//         {
//             title: "Advanced Data Science",
//             subtitle: "- Romeo Kienzler",
//             logo_path: "ibm_logo.png",
//             certificate_link: "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
//             alt_name: "IBM",
//             color_code: "#1F70C199",
//         },
//         {
//             title: "Advanced ML on GCP",
//             subtitle: "- GCP Training",
//             logo_path: "google_logo.png",
//             certificate_link: "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
//             alt_name: "Google",
//             color_code: "#0C9D5899",
//         },
//         {
//             title: "DL on Tensorflow",
//             subtitle: "- Laurence Moroney",
//             logo_path: "deeplearning_ai_logo.png",
//             certificate_link: "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
//             alt_name: "deeplearning.ai",
//             color_code: "#00000099",
//         },
//         {
//             title: "Fullstack Development",
//             subtitle: "- Jogesh Muppala",
//             logo_path: "coursera_logo.png",
//             certificate_link: "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
//             alt_name: "Coursera",
//             color_code: "#2A73CC",
//         },
//         {
//             title: "Kuberenetes on GCP",
//             subtitle: "- Qwiklabs",
//             logo_path: "gcp_logo.png",
//             certificate_link: "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
//             alt_name: "GCP",
//             color_code: "#4285F499",
//         },
//         {
//             title: "Cryptography",
//             subtitle: "- Saurabh Mukhopadhyay",
//             logo_path: "nptel_logo.png",
//             certificate_link: "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
//             alt_name: "NPTEL",
//             color_code: "#FFBB0099",
//         },
//         {
//             title: "Cloud Architecture",
//             subtitle: "- Qwiklabs",
//             logo_path: "gcp_logo.png",
//             certificate_link: "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
//             alt_name: "GCP",
//             color_code: "#4285F499",
//         },
//     ],
// };

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Freelancing",
  description:
    "Diligent software engineer with 6+ years of experience in application development. Eager to build innovative and cutting-edge business solutions. I am keen on exploring and learning new technology and enhancing my skills to provide better efficiency in my work.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "TEAM LEAD SOFTWARE ENGINEER ",
          company: "Solventum OPC Private Limited",
          company_url: "https://www.ibm.com/in-en",
          logo_path: "solventum-logo.jpg",
          duration: "July 2024 - Current",
          location: "Hof, Bayern, Germany",
          description: [
            "Delivered and maintained highly scalable software applications across diverse platforms.",
            "Shared expertise through mentoring and participating in critical technical discussions.",
            "Analyzed user requirements, Streamlined system functionality through third-party APIs and developed software solutions.",
            "Developed, tested, and maintained software applications using Node.js.",
          ],
          color: "#000000",
        },
        {
          title: "SENIOR SOFTWARE ENGINEER ",
          company: "IISYS",
          company_url:
            "https://www.iisys.de/forschung/forschungsgruppen/multimodale-kuenstliche-intelligenz/",
          logo_path: "iisys-logo.png",
          duration: "Oct 2021 - June 2024",
          location: "Hof, Bayern, Germany",
          description: [
            `Designed and Developed a Scalable Crawling Platform: A cloud-based infrastructure capable of processing 5 million web pages daily.`,
            "Implemented Stream-based Microservice Architecture: Each module was a Spring Boot-based application.",
            "Optimized Data Storage Architecture: Collaborated with a team to achieve a 10% reduction in storage costs.",
            "Conducted code reviews and mentored junior developers, improving code quality and team productivity.",
          ],
          color: "#0879bf",
        },
        {
          title: "SENIOR SOFTWARE ENGINEER",
          company: "MINDTREE",
          company_url: "https://corp.rakuten.co.in/",
          logo_path: "mindtree-logo.jfif",
          duration: "Jan 2019 - Feb 2020",
          location: "Bengaluru, India",
          description: [
            "Java and Node js Developer: Specialized in Crawling and Catalog platforms",
            "Contributed to Feature Development: Developed a JAVA crawler handling over 100 stores",
            "Migrated Legacy Crawler: Successfully migrated 20 stores to a generic configuration-based crawler, replacing customized scripts",
            "Debugging and Minor Feature Development: Assisted with catalog platform, supporting around 2130 stores",
          ],
          color: "#0879bf",
        },
        {
          title: "ASSOCIATE SOFTWARE ENGINEER",
          company: "CGI",
          company_url: "https://corp.rakuten.co.in/",
          logo_path: "cgi-logo.png",
          duration: "July 2017 - Dec 2018",
          location: "Bengaluru, India",
          description: [
            "Puppeteer Crawler Development: Created Node JS Puppeteer crawler for onboarding 30 JS-enabled websites",
            "Catalog Platform Maintenance: Handled minor feature requests from clients on the catalog platform",
            "Data Quality Measurement: Designed REST APIs to assess data quality and built a dashboard for analysis across system components.",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "ARTIFICIAL INTELLIGENCE ENGINEER INTERN",
          company: "IISYS",
          company_url:
            "https://www.iisys.de/forschung/forschungsgruppen/multimodale-kuenstliche-intelligenz/",
          logo_path: "iisys-logo.png",
          duration: "Mar 2021 - Sept 2022",
          location: "Hof, Germany",
          description: [
            "Blockchain-Based KYC POC: Developed a proof of concept for a Know Your Customer (KYC) application on the blockchain",
            "Explored Various Blockchain Platforms: Researched and analyzed Ethereum and Multichain for application development",
            "Multichain P2P Token Exchange POC: Conducted research and created a proof of concept for a blockchain application facilitating P2P crypto token exchange on Multichain.",
          ],
          color: "#0879bf",
        },
        {
          title: "COMPUTER VISION AND MACHINE LEARNING ENGINEER INTERN",
          company: "Livello",
          company_url: "https://www.livello.com/",
          logo_path: "livello-logo.png",
          duration: "June 2020 - Feb 2021",
          location: "Düsseldorf, Germany",
          description: [
            "Blockchain-Based KYC POC: Developed a proof of concept for a Know Your Customer (KYC) application on the blockchain",
            "Explored Various Blockchain Platforms: Researched and analyzed Ethereum and Multichain for application development",
            "Multichain P2P Token Exchange POC: Conducted research and created a proof of concept for a blockchain application facilitating P2P crypto token exchange on Multichain.",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Freelancing",
      experiences: [
        {
          title: "Artificial Intelligence Developer",
          company: "Pentagon Space",
          company_url: "https://pentagonspace.in/",
          logo_path: "pentagonspace-logo.png",
          duration: "Jan 2022 - March 2024",
          location: "Bengaluru, India",
          description: [
            "Developed a web application to help the organization distribute excess food to the needy",
            "The web application was build with node js Backend and Angular Frontend and was deployed on firebase",
          ],
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My Projects are mostly my skill learings documented as repositories. I have worked on hand on projects building applications & deploying them. ",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "gowtham.png",
    description:
      "I am available on LinkedIn. I will reply within 24 hours. Or Contact me over e-mail",
    number: "+49 1766746 0202",
  },

  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.nikithanimbalkar.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "+49 17667460202",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
