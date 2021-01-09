
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Help Salário Maternidade",
  title: "Nós cuidamos de você",
  subTitle: emoji("Somos especialistas em Salário Maternidade, não cobramos valores antecipados, prestamos todo o auxílio necessário para concessão do salário maternidade. Desbloqueio de pagamento bloqueado, recurso e agilidade em processos parados."),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {


  instagram: "https://www.instagram.com/help.salariomaternidade/",
  gmail: "helpconsultoriajur@gmail.com",
  facebook: "https://web.facebook.com/helpsalariomaternidade",


  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Sobre nós",
  subTitle: "A Help Salário Maternidade desenvolve um trabalho diferenciado para assegurar o direito da mamãe em receber o salário maternidade. Principalmente em um período de pandemia e desinformação, levamos acesso a direitos, de forma justa, eficaz e segura. Veja o que é necessário: ",
  skills: [
    emoji("☑️ Ter trabalhado de carteira assinada ao menos um dia antes do parto;"),
    emoji("☑️ Pode ser solicitado até completar 5 anos de idade;"),
    emoji("☑️ Trabalhadoras rurais podem solicitar, desde que comprovem documentalmente a atividade exercida.")
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Salário Maternidade Urbano",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Benefício voltado para desempregadas que já trabalharam de carteira assinada ou contribuiram individualmente para o INSS.",
      duration: "Valor do benefício: De R$ 500,00 até 6.000,00.",
      desc: "Para conseguir o benefício é necessário ter trabalhado de carteira assinada ao menos um dia antes do parto.",
      descBullets: [
        "Pode solicitar até o filho completar 5 anos de idade",
        "Todo o procedimento é feito de forma online."
      ]
    },
    {
      schoolName: "Salário Maternidade Rural",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Benefício para trabalhadoras rurais, pescadoras, agricultoras.",
      duration: "Valor do benefício: R$ 4.000,00.",
      desc: "Para conseguir o benefício é necessário comprovar a atividade rural por ao menos doze meses antes do parto.",
      descBullets: [
        "É necessário uma série de documentos para comprovação junto ao INSS",
        "Todo o procedimento é feito de forma online."
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Mamães Atendidas",  //Insert stack or technology you have experience in
      progressPercentage: "100%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Beneficios Concedidos",
      progressPercentage: "90%"
    },
    {
      Stack: "Aproveitamento ",
      progressPercentage: "90%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Ana",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Valor concedido: R$ 3.500,00",
      desc: "Fui indicada por uma amiga, tive um atendimento muito profissional e rápido pelo whatsapp, meu filho já estava quase completando cinco anos, por pouco não perdi direito ao benefício, a Help deu entrada no benefício e em exatos 27 dias eu já fui ao banco e recebi, me passaram todas as orientações e tudo aconteceu tranquilamento, não imaginava que poderia receber esse valor, foi um presente de natal.",

    },
    {
      role: "Luana",
      company: "Luana",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Valor concedido: R$ 1.897,00",
      desc: "Fiquei desempregada e no mês seguinte fiquei grávida, meu filho estava com 2 anos de idade quando conheci a Help, fiquei sabendo que teria direito ao salário maternidade, solicitamos e dentro de trinta dias fui ao banco receber, tudo foi muito rápido, o valor me ajudou muito, principalmente em razão da pandemia."
    },
    {
      role: "Adeane",
      company: "Adeane",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Valor concedido: R$ 2.700,00",
      desc: "Sabia que tinha direito ao benefício e até dei entrada por conta própria, meu pedido foi concedido pelo INSS mas meu pagamento estava bloqueado, tentei desbloquear de todas as formas e não consegui, procurei a assessoria, no prazo de três dias eles tomaram as providências necessárias, fui ao Banco e finalmente consegui sacar. Pagando o justo pelo serviço."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Saiba se você tem Direito "),
  subtitle: "Preencha o formulário e tenha retorno em até 1 hora!",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contato ☎️"),
  subtitle: "Se você precisa de ajuda para conseguir seu salário maternidade, nos procure.",
  number: "(62) 4107-0842",
};

//Twitter Section

const twitterDetails = {

  userName: "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo, twitterDetails };
