const en = {
  navbar: {
    linkHome: 'Home',
    linkAbout: 'About Us & Mission',
    linkRoadmap: 'Roadmap',
    linkTeam: 'Team',
    linkAdvisers: 'Advisers',
    linkPartners: 'Partners',
    linkCareers: 'Careers',
    mobileSocialMedia: 'Our social media'
  },
  announcement: {
    header: 'Team Recruitment is Open',
    info: 'Join our mission to Mars and be a part of history in the making!',
    action: 'Send application',
    full_action: 'Recruitment Application'
  },
  hero: {
    home: {
      typedArr: ['Central Asia', 'Kazakhstan'],
      headline: 'Nazarbayev University Rover Team',
      infoStatic: 'First ever rover team from '
    },
    careers: {
      typedArr: ['Hard Work', 'Ambitious Goals'],
      headline: 'Careers at NU Rover',
    }
  },
  careers: {
    header: 'Available job positions',
    searchbar: 'Search for jobs',
    positionsList: {
      title: "Position",
      department: "Department",
      actionHeader: "Action",
      action: "See more",
    },
    modal: {
      action: "Apply"
    }
  },
  about: {
    header: 'Who are we?',
    para: `The NU Rover Team is a group of space enthusiasts who are working to build the first Martian Rover in Central Asia. 
          The team includes dedicated individuals from various backgrounds - engineering, science, computer science, finance, 
          economics, business management - with a common passion for space and a desire to push the boundaries of their capabilities. 
          The team divisions are as follows: Team Coordination, Mechanical (Roboarm, Body and Mobility System), Science, Nuclear Reactor, 
          Automatization & Console System, Marketing and Resource Management.`
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
    departments: {
      leads: "Team Leads",
      me: "Mechanics & Electronics",
      sc: "Software & Control",
      mc: "Marketing & Coordination",
      sn: "Science & Nuclear",
    },
    infoHeghine: {
      fullname: 'Heghine Aghajanyan',
      position: 'Team Leader/Mechanical Team',
      achievements: ['2nd place Microsoft International AI Hackathon',
        '"Cosmothon" engineering championship organiser with over 100 participants']
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
    infoBatyrkhan: {
      fullname: 'Batyrkhan Sharipbay',
      position: 'Co-head of Software/Control System Team',
      achievements: ['Lead the team which won first place in Software Hackathon by StepIT Academy',
        'Awarded for the contribution in presenting Science Project in the Republican Physics Olympiad']
    },
    infoTomiris: {
      fullname: 'Tomiris Zhumagaliyeva',
      position: 'Head of Nuclear Reactor Team',
      achievements: ['Research Assistant at Biomaterials and Regenerative Engineering Laboratory',
        'Top 1 CGPA in class (Chemical Engineering-2025) with 3 consecutive Dean’s List Awards']
    },
    infoAlikhan: {
      fullname: 'Alikhan Kalmakhanbet',
      position: 'Head of Nuclear Reactor Team',
      achievements: ['Gold medal on President Olympiad VII', 
        'Involvement in Chemistry Olympiads']
    },
    infoMuslim: {
      fullname: 'Muslim Adedamola Alaran',
      position: 'Co-head of Software/Control System Team',
      achievements: ['Top 1% graduating class of 2021, University of Ilorin', 'President of National Society of Black Engineers - University of Ilorin']
    },
    infoSymbat: {
      fullname: 'Symbat Akkulova',
      position: 'Head of Marketing/Branding Team',
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
      position: 'Head of Science Team',
      achievements: ['Top 2 CGPA in class of 2026', 'Volunteered in many areas under the Republican Development Program Elbasy Medal']
    },
    infoDenis: {
      fullname: 'Denis Ten',
      position: 'Software/Control System Team',
      achievements: ['World Robot Olympiad Coach', 'FIRST Global Challenge Coach']
    },
    infoZhamila: {
      fullname: 'Zhamila Azizbekova',
      position: 'Head of Quality Assurance Team',
      achievements: ['UniSat Project 2022 by UNICEF Graduate', '2nd place at Microsoft Imagine Cup Junior Local Hackathon']
    },
    infoZhuldyz: {
      fullname: 'Zhuldyz Karamatdinova',
      position: 'Resource and Finance Team',
      achievements: ['Winner of the silver award in IYMC 2021', 
      '3rd and 2nd places in Phystech International Olympiad in Mathematics and Physics']
    },
    infoYerkebulan: {
      fullname: 'Tazabek Yerkebulan',
      position: 'Head of Coordination Team',
      achievements: ['IGeo Istanbul 2021 Silver, IGeo Paris 2022 Bronze medal winner', 'National Geographic Qazaqstan intern writer-contributor']
    },
    infoAruzhan: {
      fullname: 'Aruzhan Akimkhan',
      position: 'Head of Resource and Finance Team',
      achievements: ['IEOx WiC Bronze’21, FBLA 2020 Kazakhstani Delegation', 'Internship as Research Assistant at NU SSH, Physics Department']
    },
    infoAlisher: {
      fullname: 'Alisher Sabigaliyev',
      position: 'Mechanical Team',
      achievements: ['Founder of NIS VOLUNTEERS SEMEY Organisation', 
        '3rd degree Diploma at the XVI International Scientific Competition in Space Research "Opening the World of Science"']
    },
    infoSultan: {
      fullname: 'Sultan Kasenov',
      position: 'Software/Control System Team',
      achievements: ['3rd place winner in the Machine Learning Hackathon organized by Quantori and GDSC in NU', 
        '1st place in the Republican Astrophysics Olympiad']
    },
    infoAibat: {
      fullname: 'Aibat Mukametkali',
      position: 'Head of Mechanical Team',
      achievements: ['2nd place in the engineering hackathon orgnaized by NU IMechE', 'Python Tech Orda grant owner']
    },
    infoSanzhar: {
      fullname: 'Sanzhar Kosshybay',
      position: 'Mechanical Team',
      achievements: ['Team leader, Cosmothon by SEDS chapter, 2nd place', 'Republican Olympiad during the high school year in physics, 2nd place']
    },
    infoZhangir: {
      fullname: 'Zhangir Zhumadilov',
      position: 'Science Team',
      achievements: ['Research Assistant in IMPT project', 'Chemistry olympiads winner (NIS Net, Republican Olympiad of Science projects, KBO, Shoqan Ecology)']
    },
    infoAssylzat: {
      fullname: 'Assylzat Ashirbayeva',
      position: 'Mechanical Team',
      achievements: ['Organized the "Engineering case championship" for 150 people', 'Winner of many mathematics Olympiads']
    },
    infoBauyrzhan: {
      fullname: 'Duisenbay Bauyrzhan',
      position: 'Mechanical Team',
      achievements: ['Member of the first FSAE team in Kazakhstan', 'Top 3 CGPA of the class']
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
  partners: {
    header: 'Partners & Sponsors',
    support: {
      header: 'Want to support our mission?',
      para: `
          <orange_text>By making a donation to our project, </orange_text>you can directly contribute to the progress and success of this groundbreaking mission.
          Your generosity will help us to: develop prototypes, buy materials, sponsor the participation and other fees in competitions`,
      action: 'Support now',
      form: {
        header: 'Donation and Support',
        bankHeader: '"NU Rover" bank details',
        phone: 'Phone number',
        card: 'Card number',
        action: 'Go back'
      }
    }
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