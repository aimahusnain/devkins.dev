export const navLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Tools", href: "/tools" },
];

export const careers = [
  {
    title: "Flexible Work Scheduling",
    desc: "We focus on adaptable hours for balancing productivity and work life.",
  },
  {
    title: "Professional Growth Opportunities",
    desc: "Grow your career with our continuous learning and development programs.",
  },
  {
    title: "Collaborative Team Environment",
    desc: "Join a team where collaboration and teamwork are valued and encouraged.",
  },
  {
    title: "Competitive Compensation Packages",
    desc: "Receive competitive salaries and benefits packages.",
  },
  {
    title: "Innovative Projects",
    desc: "Work on cutting-edge projects and technologies.",
  },
  {
    title: "Work-Life Balance",
    desc: "We prioritize work-life balance to ensure our team members thrive both professionally and personally.",
  },
];

export const carouselItems = [
  {
    rating: "⭐⭐⭐⭐⭐",
    feedback: `Thanks to Devkins&lsquo;s efforts, our app looks great and delivers on customer needs. They&lsquo;re responsive and the client finds it easy to work with them. Their exceptional work encourages ongoing partnership, making them highly recommended.`,
    author: "Andy Crebar",
    position: "CEO, Sapling",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    feedback: `Thanks to Devkins&lsquo;s efforts, our app looks great and delivers on customer needs. They&lsquo;re responsive and the client finds it easy to work with them. Their exceptional work encourages ongoing partnership, making them highly recommended.`,
    author: "Andy Crebar",
    position: "CEO, Sapling",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    feedback: `Thanks to Devkins&lsquo;s efforts, our app looks great and delivers on customer needs. They&lsquo;re responsive and the client finds it easy to work with them. Their exceptional work encourages ongoing partnership, making them highly recommended.`,
    author: "Andy Crebar",
    position: "CEO, Sapling",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    feedback: `Thanks to Devkins&lsquo;s efforts, our app looks great and delivers on customer needs. They&lsquo;re responsive and the client finds it easy to work with them. Their exceptional work encourages ongoing partnership, making them highly recommended.`,
    author: "Andy Crebar",
    position: "CEO, Sapling",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    feedback: `Thanks to Devkins&lsquo;s efforts, our app looks great and delivers on customer needs. They&lsquo;re responsive and the client finds it easy to work with them. Their exceptional work encourages ongoing partnership, making them highly recommended.`,
    author: "Andy Crebar",
    position: "CEO, Sapling",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    feedback: `Thanks to Devkins&lsquo;s efforts, our app looks great and delivers on customer needs. They&lsquo;re responsive and the client finds it easy to work with them. Their exceptional work encourages ongoing partnership, making them highly recommended.`,
    author: "Andy Crebar",
    position: "CEO, Sapling",
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    feedback: `Thanks to Devkins&lsquo;s efforts, our app looks great and delivers on customer needs. They&lsquo;re responsive and the client finds it easy to work with them. Their exceptional work encourages ongoing partnership, making them highly recommended.`,
    author: "Andy Crebar",
    position: "CEO, Sapling",
  },
];

export interface Service {
  link: string;
  name: string;
  description: Array<{
    title: string;
    link: string;
    desc: string;
  }>;
}

export const services: Service[] = [
  {
    link: "/services/design-and-branding",
    name: "Design & Branding",
    description: [
      {
        title: "Wireframing and Prototyping",
        link: "/services/",
        desc: "Creating wireframes and prototypes to visualize the website's layout, structure, and user flow before development begins.",
      },
      {
        title: "Responsive Design",
        link: "/services/",
        desc: "Ensuring that website designs are responsive and adapt seamlessly to various screen sizes and devices, providing an optimal viewing experience for users.",
      },
      {
        title: "User Interface (UI) Design",
        link: "/services/",
        desc: "Designing the visual elements of the website interface, including typography, color schemes, icons, buttons, and other interactive elements.",
      },
      {
        title: "UI/UX Audits",
        link: "/services/",
        desc: "Assessing existing website designs to identify areas for improvement in terms of usability, accessibility, and overall user experience.",
      },
      {
        title: "Website Design",
        link: "/services/",
        desc: "Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.",
      },
      {
        title: "User Experience (UX) Design",
        link: "/services/",
        desc: "Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.",
      },
    ],
  },

  {
    link: "/services/website-development",
    name: "Website Development",
    description: [
      {
        title: "Custom Website Design",
        link: "/services/website-development/custom-website-design",
        desc: "Creating wireframes and prototypes to visualize the website's layout, structure, and user flow before development begins.",
      },
      {
        title: "Responsive Web Design",
        link: "/services/website-development/responsive-web-design",
        desc: "Ensuring that website designs are responsive and adapt seamlessly to various screen sizes and devices, providing an optimal viewing experience for users.",
      },
      {
        title: "E-commerce Website Design",
        link: "/services/website-development/e-commerce-web-design",
        desc: "Designing the visual elements of the website interface, including typography, color schemes, icons, buttons, and other interactive elements.",
      },
      {
        title: "CMS Integration",
        link: "/services/website-development/cms-integration",
        desc: "Assessing existing website designs to identify areas for improvement in terms of usability, accessibility, and overall user experience.",
      },
      {
        title: "SEO-friendly Design",
        link: "/services/website-development/seo-friendly-design",
        desc: "Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.",
      },
      {
        title: "Website Redesign",
        link: "/services/website-development/website-redesign",
        desc: "Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.",
      },
      {
        title: "Maintenance and Support",
        link: "/services/website-development/maintenance-and-support",
        desc: "Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.",
      },
      {
        title: "Performance Optimization",
        link: "/services/website-development/performance-optimization",
        desc: "Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.",
      },
    ],
  },

  {
    link: "/services/ui-ux-design-for-web",
    name: "UI/UX Design For Web",
    description: [
      {
        title: "Wireframing and Prototyping",
        link: "/services/",
        desc: "Creating wireframes and prototypes to visualize the website's layout, structure, and user flow before development begins.",
      },
      {
        title: "Responsive Design",
        link: "/services/",
        desc: "Ensuring that website designs are responsive and adapt seamlessly to various screen sizes and devices, providing an optimal viewing experience for users.",
      },
      {
        title: "User Interface (UI) Design",
        link: "/services/",
        desc: "Designing the visual elements of the website interface, including typography, color schemes, icons, buttons, and other interactive elements.",
      },
      {
        title: "UI/UX Audits",
        link: "/services/",
        desc: "Assessing existing website designs to identify areas for improvement in terms of usability, accessibility, and overall user experience.",
      },
      {
        title: "Website Design",
        link: "/services/",
        desc: "Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.",
      },
      {
        title: "User Experience (UX) Design",
        link: "/services/",
        desc: "Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.",
      },
    ],
  },

  {
    link: "/services/",
    name: "UI/UX Design For Mobile",
    description: [
      {
        title: "Mobile App Design",
        link: "/services/",
        desc: "Designing intuitive and engaging mobile app interfaces for iOS and Android platforms, considering platform-specific guidelines and best practices.",
      },
      {
        title: "Responsive Mobile Design",
        link: "/services/",
        desc: "Adapting website designs for mobile devices, optimizing layouts and interactions for touchscreens and smaller screens.",
      },
      {
        title: "Mobile Prototyping",
        link: "/services/",
        desc: "Creating interactive prototypes for mobile apps to simulate user interactions and test usability before development.",
      },
      {
        title: "Mobile Usability Testing",
        link: "/services/",
        desc: "Conducting usability testing sessions with real users to gather feedback and refine mobile app designs based on user insights.",
      },
      {
        title: "Cross-Platform Design",
        link: "/services/",
        desc: "Designing mobile apps that work seamlessly across different devices and operating systems, ensuring a consistent user experience.",
      },
      {
        title: "Mobile UI Patterns",
        link: "/services/",
        desc: "Implementing mobile UI design patterns and conventions to create familiarity and improve usability for users.",
      },
    ],
  },

  {
    link: "/services/",

    name: "Mobile Application Development",
    description: [
      {
        title: "iOS App Development",
        link: "/services/",
        desc: "Specializing in creating applications specifically for Apple's iOS platform.",
      },
      {
        title: "Android App Development",
        link: "/services/",
        desc: "Focusing on building applications tailored for Android devices.",
      },
      {
        title: "Cross-Platform App Development",
        link: "/services/",
        desc: "Offering development solutions that work seamlessly across multiple platforms, such as iOS, Android, and web.",
      },
      {
        title: "App Maintenance and Support",
        link: "/services/",
        desc: "Offering ongoing maintenance services to keep mobile applications up-to-date with the latest technologies and to address any issues or bugs that arise post-launch.",
      },
      {
        title: "App Store Optimization (ASO)",
        link: "/services/",
        desc: "Optimizing mobile applications for better visibility and ranking in app stores, including keyword optimization, metadata enhancement, and performance monitoring.",
      },
      {
        title: "Backend Development",
        link: "/services/",
        desc: "Building robust backend systems to support the functionality of mobile applications, including databases, APIs, and servers.",
      },
    ],
  },
  {
    link: "/services/",

    name: "Graphic Design",
    description: [
      {
        title: "Logo Design",
        link: "/services/",
        desc: "Offer logo design services for businesses looking to establish their brand identity.",
      },
      {
        title: "Print Design",
        link: "/services/",
        desc: "Offer design services for printed materials such as business cards, brochures, flyers, posters, and packaging.",
      },
      {
        title: "Digital Illustration",
        link: "/services/",
        desc: "Provide custom illustrations for websites, social media, presentations, and other digital platforms.",
      },
      {
        title: "Web Graphics",
        link: "/services/",
        desc: "Design graphics specifically tailored for websites, including banners, icons, buttons, and infographics.",
      },
      {
        title: "Social Media Graphics",
        link: "/services/",
        desc: "Design visuals for social media platforms such as Facebook, Instagram, Twitter, LinkedIn, etc.",
      },
      {
        title: "Packaging Design",
        link: "/services/",
        desc: "Offer design services for product packaging, labels, and product branding.",
      },
      {
        title: "Infographic Design",
        link: "/services/",
        desc: "Create visually appealing and informative infographics for data visualization purposes.",
      },
    ],
  },
  {
    link: "/services/",

    name: "Digital Marketing",
    description: [
      {
        title: "Search Engine Optimization (SEO)",
        link: "/services/",
        desc: "Optimizing websites to rank higher in search engine results pages (SERPs) and attract organic traffic.",
      },
      {
        title: "Pay-Per-Click Advertising (PPC)",
        link: "/services/",
        desc: "Creating and managing paid advertising campaigns on platforms like Google Ads, Bing Ads, and social media platforms to drive targeted traffic.",
      },
      {
        title: "Social Media Marketing (SMM)",
        link: "/services/",
        desc: "Developing and executing strategies to engage audiences, build brand awareness, and drive traffic through social media platforms such as Facebook, Instagram, Twitter, LinkedIn, etc.",
      },
      {
        title: "Content Marketing",
        link: "/services/",
        desc: "Creating and distributing valuable, relevant content to attract and retain a clearly defined audience and drive profitable customer action.",
      },
      {
        title: "Email Marketing",
        link: "/services/",
        desc: "Designing and implementing email campaigns to nurture leads, engage subscribers, and drive conversions.",
      },
      {
        title: "Influencer Marketing",
        link: "/services/",
        desc: "Collaborating with influencers or industry experts to promote products or services and reach a wider audience.",
      },
      {
        title: "Online Reputation Management (ORM)",
        link: "/services/",
        desc: "Monitoring and managing online reviews, mentions, and feedback to maintain a positive brand image and address any negative sentiment.",
      },
      {
        title: "Marketing Automation",
        link: "/services/",
        desc: "Implementing tools and workflows to automate repetitive marketing tasks, personalize customer experiences, and streamline marketing operations.",
      },
    ],
  },
  {
    link: "/services/",

    name: "Video Editing",
    description: [
      {
        title: "QuickBooks Setup and Installation",
        link: "/services/",
        desc: "Help clients set up QuickBooks software tailored to their business needs.",
      },
      {
        title: "QuickBooks Training",
        link: "/services/",
        desc: "Offer training sessions to educate clients on how to effectively use QuickBooks for their business accounting needs.",
      },
      {
        title: "QuickBooks Integration Services",
        link: "/services/",
        desc: "Integrate QuickBooks with other software solutions used by clients to streamline business operations.",
      },
      {
        title: "QuickBooks Customization",
        link: "/services/",
        desc: "Customize QuickBooks settings and reports to match the specific requirements of clients' businesses.",
      },
      {
        title: "QuickBooks Troubleshooting and Support",
        link: "/services/",
        desc: "Offer ongoing support to troubleshoot issues and resolve any challenges clients encounter while using QuickBooks.",
      },
      {
        title: "QuickBooks Data Migration",
        link: "/services/",
        desc: "Assist clients in migrating their financial data from legacy systems to QuickBooks for seamless transition and continuity.",
      },
    ],
  },
  {
    link: "/services/quickbooks",
    name: "QuickBooks",
    description: [
      {
        title: "QuickBooks Setup and Installation",
        link: "/services/",
        desc: "Help clients set up QuickBooks software tailored to their business needs.",
      },
      {
        title: "QuickBooks Training",
        link: "/services/",
        desc: "Offer training sessions to educate clients on how to effectively use QuickBooks for their business accounting needs.",
      },
      {
        title: "QuickBooks Integration Services",
        link: "/services/",
        desc: "Integrate QuickBooks with other software solutions used by clients to streamline business operations.",
      },
      {
        title: "QuickBooks Customization",
        link: "/services/",
        desc: "Customize QuickBooks settings and reports to match the specific requirements of clients' businesses.",
      },
      {
        link: "/services/",
        title: "QuickBooks Troubleshooting and Support",
        desc: "Offer ongoing support to troubleshoot issues and resolve any challenges clients encounter while using QuickBooks.",
      },
      {
        title: "QuickBooks Data Migration",
        link: "/services/",
        desc: "Assist clients in migrating their financial data from legacy systems to QuickBooks for seamless transition and continuity.",
      },
    ],
  },
];