const en = {
  navbar: {
    linkHome: 'Home',
    linkAbout: 'About Us & Mission',
    linkRoadmap: 'Roadmap & Progress',
    linkTeam: 'Team',
    linkAdvisers: 'Advisers',
    mobileSocialMedia: 'Our social media'
  },
  announcement: {
    header: 'Team Recruitment is Open',
    info: 'Join our mission to Mars and be a part of history in the making!',
    action: 'Send application',
    full_action: 'Recruitment Application'
  },
  hero: {
    typedArr: ['Central Asia', 'Kazakhstan'],
    headline: 'Nazarbayev University Rover Team',
    infoStatic: 'First ever rover team from '
  },
  about: {
    header: 'Who are we?',
    para: `The NU Rover Team is a group of space enthusiasts who are working to build the first Martian Rover in Central Asia. 
          The team includes dedicated individuals from various backgrounds - engineering, science, computer science, finance, 
          economics, business management - with a common passion for space and a desire to push the boundaries of their capabilities. 
          The team divisions are as follows: Quality Assurance, Roboarm, Body & Mobility System, Science & Lab, Nuclear Reactor, 
          Automatization & Console System, Finance & Resource Management.`
  },
  mission: {
    header: 'Our Mission',
    para: `<p>
          Not only is our primary goal to build the first <orange_text>Martian Rover</orange_text> in Central Asia, but to make it a cost-effective,
          model predictive, autonomous and maneuvarable rover of a new generation by the cutting edge technology and design decisions.
          </p>
          <p>
          We also want to represent Kazakhstan and Nazarbayev University in the international
          competition University Rover Challenge, where annually the 36 best teams from around
          the world compete in the Utah desert, USA.
          </p>`
  },
  roadmap: {
    header: 'Team Roadmap',
    caption: 'TRL - Technology Readiness Level of the Rover',
    milestones: [
      {
        date: 'March, 2023',
        description: 'Team Set Up'
      },
      {
        date: 'April, 2023',
        description: 'TRL 1'
      },
      {
        date: 'May, 2023',
        description: 'TRL 2'
      },
      {
        date: 'October, 2023',
        description: 'TRL 3 and Team Registration to URC'
      },
      {
        date: 'November, 2023',
        description: 'TRL 4 and Preliminary Design Review Report'
      },
      {
        date: 'February, 2024',
        description: 'TRL 5 and System Acceptance Review'
      },
      {
        date: 'May, 2024',
        description: 'TRL 6 and Science Plan Financial Report'
      },
      {
        date: 'June, 2024',
        description: 'TRL 7 and URC Finals'
      },
      {
        date: 'Future',
        description: 'Further Development...'
      }
    ],
    roverTRL1: {
      header: 'Meet TRL 1 Rover',
      body: {
        name: 'Body skeleton',
        description: 'From aluminum with a side width of 30 mm'
      },
      wheels: {
        name: 'Wheels',
        description: '6 wheels with the differential designed to keep soil traction and evenly distribute the load'
      },
      controls: {
        name: 'Controls',
        description: 'Manually controlled by the Console over the internet'
      },
      moreInfo: 'Find more info here'
    },
    roverTRL5: {
      header: 'Main objective: TRL 5 Rover',
      size: {
        name: 'Size',
        width: '1.2 m',
        height: '1.2 m',
        depth: '1.2 m',
      },
      weight: {
        name: 'Weight',
        inKg: '70 kg'
      },
      parameters: {
        name: 'Parameters',
        description: 'fully autonomous, model-predictive, and maneuverable'
      },
      tools: {
        name: 'Tools',
        description: 'roboarm, in-suit biolab, and soil collecting mechanism'
      }
    }
  },
  team: {
    header: 'Meet our team',
    achievements: 'Achievements',
    caption: 'Hover or click to see more info',
    infoHeghine: {
      fullname: 'Heghine Aghajanyan',
      position: 'Team Leader/Mechanical Team',
      achievements: ['2nd place Microsoft International AI Hackathon',
        '"Cosmothon" engineering championship organiser with over 100 participants']
    },
    infoNurzhan: {
      fullname: 'Nurzhan Rakhimgaliyev',
      position: 'Science Team',
      achievements: ['Research Assistant in the laboratory of producing pharmaceuticals from the biomass',
        'Contributor to Nobel Fest']
    },
    infoYussuf: {
      fullname: 'Yussuf Shakhin',
      position: 'Electronics Team',
      achievements: ['President of Robotics in Ala-Too International University',
        'Research Assistant in PCMC and Smart Energy laboratories']
    },
    infoLeila: {
      fullname: 'Leila Akisheva',
      position: 'Software/Control System Team',
      achievements: ['Research selection at MIT', "Summer internship'22 in machine learning in Coruna, Spain"]
    },
    infoTemirkul: {
      fullname: 'Temirkul Umetaliev',
      position: 'Software/Control System Team',
      achievements: ["Research Assistant in two projects with Dana Alina & Constantinos Valagiannopolous",
        "Working with Prof. Dana Alina in filament detection and orientation in the ISM"]
    },
    infoAlmat: {
      fullname: 'Almat Orazali',
      position: 'Software Team',
      achievements: ["Backend developer at CaliforniaRP GTA V server", "2 year freelance frontend developer"]
    },
    infoBatyrkhan: {
      fullname: 'Batyrkhan Sharipbay',
      position: 'Software Team',
      achievements: ['Lead the team which won first place in Software Hackathon by StepIT Academy',
        'Awarded for the contribution in presenting Science Project in the Republican Physics Olympiad']
    },
    infoMadi: {
      fullname: 'Madi Lukmanov',
      position: 'Resource and Finance team',
      achievements: ['Ex-President of NU Student Investment Fund',
        'Research Assistant for Dr. Andrey Tkachenko and Dr. Dana Bazarkulova']
    },
    infoMagzhan: {
      fullname: 'Magzhan Balken',
      position: 'Resource and Finance team',
      achievements: ['Had multiple sole proprietor businesses starting from age of 18',
        'Ex-member of Ministry of Residential Life & Security, improving the life of the Nazarbayev University students']
    },
    infoTomiris: {
      fullname: 'Tomiris Zhumagaliyeva',
      position: 'Nuclear Reactor Team',
      achievements: ['Research Assistant at Biomaterials and Regenerative Engineering Laboratory',
        'Top 1 CGPA in class (Chemical Engineering-2025) with 3 consecutive Dean’s List Awards']
    },
    infoMuslim: {
      fullname: 'Muslim Adedamola Alaran',
      position: 'Software/Control System Team',
      achievements: ['Top 1% graduating class of 2021, University of Ilorin', 'President of National Society of Black Engineers - University of Ilorin']
    },
    infoVladimir: {
      fullname: 'Vladimir Ussoltsev',
      position: 'Software/Control System Team',
      achievements: ['Deputy Head of Competitive Robotics Department at ROBOTEK', 
        'Coach of Kazakhstan national team at World Robot Olympiad 2022']
    },
    infoSymbat: {
      fullname: 'Symbat Akkulova',
      position: 'Marketing/Branding Team',
      achievements: ['Creator of instagram videos and posts targeted towards NU community with over 14k views and thousands of likes',
        'SMM manager, photographer and videographer of a business company for over 3 years']
    },
    infoDana: {
      fullname: 'Dana Kurmangali',
      position: 'Marketing/Branding Team',
      achievements: ['Member of "Unisat Nano-satellite Educational Programme for Girls" (UNEPG), successfully launched nano-satellite into the stratosphere', 
        'Ex-head of the PR department of NU Student Awards 2023']
    },
    infoZhaniya: {
      fullname: 'Zhaniya Kali',
      position: 'Science Team',
      achievements: ['Top 2 CGPA in class of 2026', 'Volunteered in many areas under the Republican Development Program Elbasy Medal']
    },
    infoDenis: {
      fullname: 'Denis Ten',
      position: 'Software/Control System Team',
      achievements: ['World Robot Olympiad Coach', 'FIRST Global Challenge Coach']
    },
    infoZhamila: {
      fullname: 'Zhamila Azizbekova',
      position: 'Quality Assurance Team',
      achievements: ['UniSat Project 2022 by UNICEF Graduate', '2nd place at Microsoft Imagine Cup Junior Local Hackathon']
    },
    infoAidana: {
      fullname: 'Aidana Kenzhebayeva',
      position: 'Resource and Finance Team',
      achievements: ['5 years in project development', 'Won 2,5 million tenge on Samsumg Solve for tomorrow 2021']
    },
    infoYerkebulan: {
      fullname: 'Tazabek Yerkebulan',
      position: 'Quality Assurance Team',
      achievements: ['IGeo Istanbul 2021 Silver, IGeo Paris 2022 Bronze medal winner', 'National Geographic Qazaqstan intern writer-contributor']
    },
    infoAizhar: {
      fullname: 'Aizhar Kudenova',
      position: 'Resource and Finance Team',
      achievements: ['Semifinalist of Technovation Girls 2021', 'Winner of international math olympiad from MSTU']
    }
  },
  advisers: {
    header: 'Advisory board',
    caption: 'Hover or click to see more info',
    infoElhadidi: {
      fullname: 'Basman Elhadidi',
      achievements: ['Designed challenges for very low earth orbit satellite design', 'University of Notre Dame Award']
    },
    infoSpitas: {
      fullname: 'Christos Spitas',
      achievements: ['Principal Investigator of projects with partners Paramount Engineering, etc.',
      '15 major projects funded by the European Commission, ESA, CERN, Toyota and others']
    },
    infoVarol: {
      fullname: 'Huseyin Atakan Varol',
      achievements: ['Over 60 published paper on Robotics', 'Senior member and technical editor of IEEE']
    },
    infoBagheri: {
      fullname: 'Mehdi Bagheri',
      achievements: ['Scopus Award holder (prestigious scientific award)', 'World’s top 2% of scientists according to the publications']
    },
    infoKostas: {
      fullname: 'Konstantinos Kostas',
      achievements: ['International conferences on Pedestrian and Evacuation Dynamics', 'Author of the book “3D Design & Computations in Rhino3D”']
    },
    infoZhao: {
      fullname: 'Yong Zhao',
      achievements: ['HPC 2002 The Blue Challenge Bronze Award, by IBM Corp/ihpc', 'CrayQuest 2000 Gold Award, by Silicon Graphics Inc./ihpc']
    },
    infoJamwal: {
      fullname: 'Prashant Jamwal',
      achievements: ['Jewel of India Award holder', 'Won two grants from the World Bank and has launched the startup companies']
    },
  },
  contact: {
    shortInfo: `
      <p>The NU Rover Team is a group of space enthusiasts who are working to build the first Martian Rover in Central Asia.</p>
      <p>Not only is our primary goal to build the first <orange_text>Martian Rover</orange_text> in Central Asia, but to make it a cost-effective,
      model predictive, autonomous and maneuvarable rover of a new generation by the cutting edge technology and design desicions.</p>
    `,
    header: 'Contact us',
    phone: {
      name: 'Phone',
    },
    email: {
      name: 'Email'
    },
    address: {
      name: 'Address',
      description: 'Kabanbai batyr avenue, 53, Astana, Kazakhstan'
    },
    social: {
      name: 'Social media',
      info: 'Do not forget to subscribe to our accounts on these social media'
    }
  }
};

export default en;