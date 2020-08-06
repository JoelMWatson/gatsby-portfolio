module.exports = {
  siteTitle: 'Joel Watson',
  siteDescription: `Joel Watson - Full-Stack Software Developer`,
  keyWords: ['gatsbyjs', 'react'],
  authorName: 'Joel Watson',
  twitterUsername: 'joel3rbear',
  githubUsername: 'joelmwatson',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Hi, I'm Joel, thanks for visiting my site. I'm a Full-Stack 
  Developer working primarily in web and mobile application development. As a life-long 
  learner, I'm always looking to expand and deepen my skill set as a developer. 
  One thing about me is I am a true team player at heart and know that is where I 
  thrive. I take an enormous amount of ownership in my team's outcomes and am always 
  willing to put in the effort to ensure we attain our goals. I don’t quit till 
  the job is done.`,
  skills: [
    {
      name: 'HTML',
      level: 70
    },
    {
      name: 'CSS',
      level: 60
    },
    {
      name: 'Javascript',
      level: 50
    },
    {
      name: 'NodeJs',
      level: 40
    },
    {
      name: 'React',
      level: 60
    },
    {
      name: 'Git',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "TourVista",
      begin: {
        month: 'dec',
        year: '2017'
      },
      duration: '6 months',
      occupation: "Intern Developer",
      description: "This was my first role in a technical position. I was mostly in charge of editing content on client websites through WordPress."

    },
    {
      company: "TourVista",
      begin: {
        month: 'jun',
        year: '2017'
      },
      duration: '2.5 years',
      occupation: "Web Developer",
      description: "After graduating I was hired on as an employee at TourVista. My responsibilities expanded to developing new tools for clients built in PHP and JS."

    },
  ],
  portifolio: [
    {
      image: "/images/dndscribe.png",
      description: "DnD Scribe Terminal App",
      url: "https://www.npmjs.com/package/dnd-scribe"
    },
    {
      image: "/images/cocktailnotes.png",
      description: "Cocktail Notes Web App",
      url: "https://watson-cocktail-notes.herokuapp.com"
    },
  ],

  social: {
    twitter: "https://twitter.com/joel3rbear",
    linkedin: "https://www.linkedin.com/in/joel3rbear",
    github: "https://github.com/joelmwatson",
    email: "joel.watson92@gmail.com"
  },

  siteUrl: 'https://joelmwatson.github.io/',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}