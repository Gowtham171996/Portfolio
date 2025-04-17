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
  title: "Gowtham Buvalli Chikkathammaiah",
  logo_name: "Gowtham BC",
  nickname: "Gowtham",
  subTitle: `A passionate individual with 6.5+ years of experience (3.5yrs in Germany) in Consulting, Artificial Intelligence and Software development experience.\n Proven expertise in designing, developing and deploying scalable, high performance Artificial Intelligence applications.\n Specialization in building end to end cloud AI applications which creates an impact. With domain experties in LLM, Computer Vision and Machine Learning. Team Leader and Ofcourse a passion for continuous learning rounds me.`,
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
        "⚡ Research and Development: Journey of Idea, Requirement Gathering, Research, Proof of Concept, Development, Deployment, Testing, Documentation and mentoring juniors.",
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
        "⚡ Dashboard: Creation of Dashboards for various Machine learning Applications.",
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
        "⚡ AWS & Azure Application Deployment & Management: Deploy, manage, and monitor applications on GCP using GKE, Cloud Functions, Cloud Monitoring, and Cloud Logging.",
        "⚡ Website and Database Management: Host and maintain websites on AI applications, integrating databases as needed.",
        "⚡ GCP Service Integration with python: Integrate GCP services like Cloud Postgres, Cloud Storage, and Pub/Sub with python applications using client libraries.",
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

const languagecertifications = {
  languagecertifications: [
    {
      title: "German Language Proficeincy ",
      subtitle: "Telc: B2 German language",
      logo_path: "telc-logo.jfif",
      certificate_link: "#",
      alt_name: "Telc: B2 German language",
      color_code: "#000000",
    },
    {
      title: "English Language Proficeincy",
      subtitle: "IELTS: C1 English language",
      logo_path: "ielts-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1GTI_wmVQlAyxhElm-JVxx-gXX2fZMVhf/view?usp=sharing",
      alt_name: "IELTS: C1 English language",
      color_code: "#FFFFFF",
    },
    {
      title: "German Language Proficeincy ",
      subtitle: "VHS: Berufbezogenes Sprachtraining Büro und Verwaltung",
      logo_path: "vhs-logo.png",
      certificate_link:
        "https://www.linkedin.com/in/gowtham-buvalli-chikkathammaiah-788b62a9/details/certifications/1736900380860/single-media-viewer/",
      alt_name: "VHS: Berufbezogenes Sprachtraining Büro und Verwaltung",
      color_code: "#000000",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "Microsoft Certified: Azure AI Fundamentals",
      logo_path: "microsoft-certified-fundamentals-badge.svg",
      certificate_link: "#",
      alt_name: "Microsoft Certified: Azure AI Fundamentals",
      color_code: "#8C151599",
    },
    {
      title: "Scrum Product Owner",
      subtitle: "Professional Scrum Product Owner I Certification",
      logo_path: "scrum-logo.png",
      certificate_link: "#",
      alt_name: "Professional Scrum Product Owner I Certification",
      color_code: "#00000099",
    },
    {
      title: "Data Security",
      subtitle:
        "TÜV SUD: Information Security Management System based on ISO/IEC 27001:2022",
      logo_path: "tuv-logo.svg",
      certificate_link:
        "https://www.linkedin.com/in/gowtham-buvalli-chikkathammaiah-788b62a9/details/certifications/1735599183786/single-media-viewer/",
      alt_name:
        "TÜV SUD: Information Security Management System based on ISO/IEC 27001:2022",
      color_code: "#8C151599",
    },
    {
      title: "Data handling",
      subtitle: "TÜV SUD: EU General Data Protection Regulation (GDPR)",
      logo_path: "tuv-logo.svg",
      certificate_link:
        "https://www.linkedin.com/in/gowtham-buvalli-chikkathammaiah-788b62a9/details/certifications/1735599183786/single-media-viewer/",
      alt_name: "TÜV SUD: EU General Data Protection Regulation (GDPR)",
      color_code: "#00000099",
    },
    {
      title: "Software Programming",
      subtitle: "Software Programming: Source Coding Best Practices",
      logo_path: "cgi-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1033gDBlm55NuwRShGKEngWOfy2KK9Gyi/view?usp=sharing",
      alt_name: "Software Programming: Source Coding Best Practices",
      color_code: "#8C151599",
    },
    {
      title: "Machine Learning",
      subtitle: "Automation & Machine Learning",
      logo_path: "cgi-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1033gDBlm55NuwRShGKEngWOfy2KK9Gyi/view?usp=sharing",
      alt_name: "TÜV SUD: EU General Data Protection Regulation (GDPR)",
      color_code: "#00000099",
    },
  ],
};

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
          company_url:
            "https://sites.google.com/view/solventum-opc-private-limited/",
          logo_path: "solventum-logo.jpg",
          duration: "July 2024 - Current",
          location: "Hof, Bayern, Germany",
          description: [
            "Developed scalable and secure backend REST APIs using C# (.NET Core) microservices architecture for enterprise machine learning applications, improving system maintainability.",
            "Integrated Test cases, optimizing queries and improving response times by 25%.",
            "Implemented Terraform-based Azure infrastructure, reducing deployment time by 35%.",
            "Mentored junior team members, knowledge sharing technical excellence in solution deployment, problem solving algorithms, software engineering best practices Benchmarking, technical documentations, code reviews.",
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
            "Collaborated with cross-functional teams to integrate computer vision & ML models into scalable, real-world applications for ecommerce automobile products for 2100+ image analysis categories.",
            "Implemented Angular and TypeScript-based frontends, improving usability and performance.",
            "Coordinate in API integration &Test between industrial applications and third-party IoT platforms.",
            "Developed User friendly dashboard (MERN Mongodb, ExpressJS, Reactjs, NodeJS) stack to user access.",
            "Created automated CI/CD pipelines using Azure DevOps, improving deployment efficiency by 40%.",
            "Designed and Developed a Scalable Crawling Platform: A cloud-based infrastructure capable of processing 5 million web pages daily.",
            "Optimized Data Storage Architecture: Collaborated with a team to achieve a 10% reduction in storage costs.",
            "Conducted code reviews and mentored junior developers, improving code quality and team productivity.",
          ],
          color: "#0879bf",
        },
        {
          title: "SENIOR SOFTWARE ENGINEER",
          company: "MINDTREE",
          company_url: "https://www.ltimindtree.com/",
          logo_path: "mindtree-logo.jfif",
          duration: "Jan 2019 - Feb 2020",
          location: "Bengaluru, India",
          description: [
            "C# and Node js Developer: Specialized in DB Crawling and enterprise solution platforms",
            "Migrated Legacy pages: Successfully migrated 20 stores to a generic configuration-based crawler, replacing customized scripts",
            "Developed a secure, scalable backend using .NET Core and PostgreSQL for a real-time international project monitoring system UI UX Designs and test automation as priority.",
            "Integrated continuous monitoring with cloud services, ensuring seamless, data flow and advanced analysis for software development.",
            "Built data pipelines for smart iot devices development, Customer recommendation system incorporating sentiment analysis and named entity recognition for enriched user interactions.",
          ],
          color: "#0879bf",
        },
        {
          title: "ASSOCIATE SOFTWARE ENGINEER",
          company: "CGI",
          company_url: "https://www.cgi.com/en",
          logo_path: "cgi-logo.png",
          duration: "July 2017 - Dec 2018",
          location: "Bengaluru, India",
          description: [
            "Sharepoint Developer: Handled minor feature requests from clients on the sharepoint platform",
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
            "3D reconstruction of Objects: Explored various possibilites scenarios and state of the art of 3D reconstruction",
            "Recieved the Best thesis award from the City Hof, Germany.",
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
            "Built CV pipelines with TensorFlow for machine learning development, Customer recommendation incorporating sentiment analysis and named entity recognition for enriched user interactions.",
            "Designed edge AI models for real-time applications on NVIDIA Jetson, reducing latency by 30%.",
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
      "I am available on LinkedIn. I will reply within 24 hours. Or Contact me over e-mail ",
    email: "bcgowtham17@gmail.com",
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
    subtitle: "Wilhelmshavener str. 48, 10552 Berlin",
    region: "Berlin, Germany",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Wilhelmshavener+Str.,+10551+Berlin/@52.531156,13.3373439,16.42z",
  },
  phoneSection: {
    title: "Mobile:",
    subtitle: "+49 17667460202",
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
  languagecertifications,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
