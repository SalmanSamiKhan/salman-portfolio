import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Salman Sami Khan',
  title: "Salman Sami Khan",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://docs.google.com/document/d/1eXWzL0jXaSAo2t6OXucTZ7XTsxurvGP--VcRV4koyqM/edit?usp=sharing",
};

export const openSource = {
  githubUserName: 'SalmanSamiKhan',
};

export const contact = {};

export const socialLinks = {
  url: 'https://salman.vercel.app/',
  linkedin: 'https://www.linkedin.com/in/salman-sami-khan-69855a1a0/',
  github: 'https://github.com/SalmanSamiKhan',
  email: 'mailto:salmansamiikhan@gmail.com',
  facebook: 'https://www.facebook.com/salmansamikhan',
  twitter: 'https://twitter.com/SalmanSamiiKhan',
};

export const skillsSection = {
  title: 'What I do',
  // subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Frontend Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Build responsive website front end using React'
        ),
        emoji('⚡ Use powerful Bootstrap and React Bootstrap'),
        emoji('⚡ Icon libraries for styling components in website'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML5',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS3',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'Bootstrap',
          fontAwesomeClassname: 'logos:bootstrap',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Redux',
          fontAwesomeClassname: 'logos:redux',
        },
        {
          skillName: 'Material UI',
          fontAwesomeClassname: 'logos:material-ui',
        },

        // {
        //   skillName: 'NPM',
        //   fontAwesomeClassname: 'logos:npm-icon',
        // },
        // {
        //   skillName: 'Yarn',
        //   fontAwesomeClassname: 'logos:yarn',
        // },
      ],
    },
    {
      title: 'Backend Development',
      lottieAnimationFile: '/lottie/skills/backend4.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Create application backend in Node, Express'
        ),
        emoji('⚡ Use node pacakage manager npm and yarn'),
        emoji('⚡ Use JSON, JWT for authentication'),
        emoji('⚡ Build and test RESTful APIs'),
      ],
      softwareSkills: [

        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'NodeJs',
          fontAwesomeClassname: 'logos:nodejs-icon',
        },
        {
          skillName: 'ExpressJs',
          fontAwesomeClassname: 'simple-icons:express',
        },


        {
          skillName: 'NPM',
          fontAwesomeClassname: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassname: 'logos:yarn',
        },
        {
          skillName: 'JSON',
          fontAwesomeClassname: 'bi:filetype-json',
        },
        {
          skillName: 'JWT',
          fontAwesomeClassname: 'logos:jwt-icon',
        },
        {
          skillName: 'REST',
          fontAwesomeClassname: 'vscode-icons:file-type-rest',
        },
        {
          skillName: 'API',
          fontAwesomeClassname: 'icon-park:api',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡Experience working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances'
        ),
        emoji(
          '⚡ Deploying websites along with integration of databases'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details

        {
          skillName: 'Heroku',
          fontAwesomeClassname: 'logos:heroku-icon',
        },
        {
          skillName: 'Render',
          fontAwesomeClassname: 'simple-icons:render',
          style: {
            color: "green",
          }
        },
        {
          skillName: 'Github',
          fontAwesomeClassname: 'akar-icons:github-fill',
        },
        {
          skillName: 'Vercel',
          fontAwesomeClassname: 'logos:vercel-icon',
        },
        {
          skillName: 'Cloud Database',
          fontAwesomeClassname: 'material-symbols:database',
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassname: 'vscode-icons:file-type-mongo',
        },
      ],
    },
    {
      title: 'Tools and Setup',
      lottieAnimationFile: '/lottie/skills/tools.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Use Git and GitHub for version controlling'
        ),
        emoji(
          '⚡ Postman and Thunder Client for testing api'
        ),
        emoji(
          '⚡ Chrome Dev Tool for testing and debugging'
        ),
        emoji('⚡ VS Code as IDE, Windows as OS'),
      ],
      softwareSkills: [
        {
          skillName: 'Git',
          fontAwesomeClassname: 'logos:git-icon',
        },
        {
          skillName: 'GitHub',
          fontAwesomeClassname: 'mdi:github',
        },
        {
          skillName: 'Bash CLI',
          fontAwesomeClassname: 'codicon:terminal-bash',
        },
        {
          skillName: 'Postman',
          fontAwesomeClassname: 'logos:postman-icon',
        },
        {
          skillName: 'Thunder Client',
          fontAwesomeClassname: 'mdi:thunder-circle',
        },
        {
          skillName: 'Chrome Dev Tool',
          fontAwesomeClassname: 'logos:chrome',
        },
        {
          skillName: 'VS Code',
          fontAwesomeClassname: 'vscode-icons:file-type-vscode',
        },
        {
          skillName: 'Windows',
          fontAwesomeClassname: 'logos:microsoft-windows',
        },
      ],
    },
  ],
};

// export const SkillBars = [
//   {
//     Stack: 'Frontend/Design', //Insert stack or technology you have experience in
//     progressPercentage: '90', //Insert relative proficiency in percentage
//   },
//   {
//     Stack: 'Backend',
//     progressPercentage: '70',
//   },
//   {
//     Stack: 'Programming',
//     progressPercentage: '60',
//   },
// ];

export const educationInfo = [
  {
    schoolName: 'Brac University',
    subHeader: 'Bachelor of Computer Science',
    duration: '2016 - 2020',
    // desc: 'Participated in the research of XXX and published 3 papers.',
    // grade: 'Grade A',
    descBullets: [
      'Studied basic software engineering subjects like OOP, DS, Algorithms, DBMS, OS, AI etc.',
      'Taken courses on Software Engineering, System Analysis, Data Science, Networking etc.',
      'Thesis on License Plate Recognition System using image processing and pattern recognition.',
    ],
  },
];

// export const experience = [
//   {
//     role: 'Frontend Developer',
//     company: 'Duseca Software',
//     companylogo: '/img/icons/common/dusecaSoftware.jpg',
//     date: 'Apr 2022 – Jun 2022',
//     desc: 'I worked as frontend web developer to design web based admin dashboards for mulitple apps using Django, Bootstrap, jQuery, Chart.js and some other libraries.',
//   },
//   {
//     role: 'API Engineer',
//     company: 'Duseca Software',
//     companylogo: '/img/icons/common/dusecaSoftware.jpg',
//     date: 'Jan 2022 – Mar 2022',
//     desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
//     // descBullets: [
//     // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
//     // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//     // ],
//   },
//   {
//     role: 'Full Stack Developer',
//     company: 'Bleed-AI',
//     companylogo: '/img/icons/common/bleedAI.jpg',
//     date: 'Sept 2021 - Oct 2021',
//     desc: 'Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.',
//   },
//   {
//     role: 'Backend Developer',
//     company: 'Wapidu',
//     companylogo: '/img/icons/common/wapidu.jpg',
//     date: 'Sept 2021',
//     desc: 'Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.',
//   },
// ];

export const projects = [
  {
    name: 'Bookmania',
    desc: 'A fully functional ecommerce book shop website',
    softwareSkills: [
      
      {
        skillName: 'NodeJs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'ExpressJs',
        fontAwesomeClassname: 'simple-icons:express',
      },
      {
        skillName: 'Reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'Bootstrap',
        fontAwesomeClassname: 'logos:bootstrap',
      },
      {
        skillName: 'JWT',
        fontAwesomeClassname: 'logos:jwt-icon',
      },
      {
        skillName: 'MongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
    ],
    github: 'https://github.com/SalmanSamiKhan/bookmania',
    link: 'https://bookmania.onrender.com',
  },
  {
    name: 'Notebook',
    desc: 'An online note taking app with user authentication',
    softwareSkills: [

      {
        skillName: 'NodeJs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'ExpressJs',
        fontAwesomeClassname: 'simple-icons:express',
      },
      {
        skillName: 'Reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'Bootstrap',
        fontAwesomeClassname: 'logos:bootstrap',
      },
      {
        skillName: 'JWT',
        fontAwesomeClassname: 'logos:jwt-icon',
      },
      {
        skillName: 'MongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
    ],
    github: 'https://github.com/SalmanSamiKhan/notebook',
    link: 'https://notebook-ooxp.onrender.com'
  },
  {
    name: 'Online Todolist',
    desc: 'A fully functional beautiful Todolist app',
    softwareSkills: [

      {
        skillName: 'NodeJs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'ExpressJs',
        fontAwesomeClassname: 'simple-icons:express',
      },
      {
        skillName: 'EJS',
        fontAwesomeClassname: 'vscode-icons:file-type-ejs',
      },
      {
        skillName: 'HTML5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'CSS3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'MongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
    ],
    github: 'https://github.com/SalmanSamiKhan/Online-Todolist',
    link: 'https://online-todolist.onrender.com'
  },
  {
    name: 'Blog Website',
    desc: 'An online journal website',
    softwareSkills: [

      {
        skillName: 'NodeJs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'ExpressJs',
        fontAwesomeClassname: 'simple-icons:express',
      },
      {
        skillName: 'EJS',
        fontAwesomeClassname: 'vscode-icons:file-type-ejs',
      },
      {
        skillName: 'HTML5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'CSS3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'MongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
    ],
    github: 'https://github.com/SalmanSamiKhan/blog-db',
    link: 'https://blog-8c4l.onrender.com'
  },
  {
    name: 'Keeper',
    desc: 'Google Keep clone using react',
    softwareSkills: [
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'Reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'Bootstrap',
        fontAwesomeClassname: 'logos:bootstrap',
      },
      {
        skillName: 'HTML5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'CSS3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
    ],
    github: 'https://github.com/SalmanSamiKhan/keeper',
    link: 'https://keeper-grhd.onrender.com'
  },
  {
    name: 'Bookshelf',
    desc: 'Online library for managing books',
    softwareSkills: [
      {
        skillName: 'NodeJs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'ExpressJs',
        fontAwesomeClassname: 'simple-icons:express',
      },
      {
        skillName: 'Reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'Bootstrap',
        fontAwesomeClassname: 'logos:bootstrap',
      },
      {
        skillName: 'JWT',
        fontAwesomeClassname: 'logos:jwt-icon',
      },
      {
        skillName: 'MongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
    ],
    github: 'https://github.com/SalmanSamiKhan/book-shelf',
    link: '',
  },
];

// export const feedbacks = [
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
//   {
//     name: 'John Smith',
//     feedback:
//       'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
//   },
// ];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
  title: 'Salman Sami Khan',
  description:
    'A passionate Full Stack Web Development enthusiast.',
  author: 'Salman Sami Khan',
  image: 'https://avatars3.githubusercontent.com/u/81870466?v=4',
  url: 'https://github.com/SalmanSamiKhan',
  keywords: [
    'Salman',
    'Salman Sami Khan',
    '@SalmanSamiKhan',
    'SalmanSamiKhan',
    'Portfolio',
    'Salman Portfolio ',
    'Salman Sami Khan Portfolio',
  ],
};
