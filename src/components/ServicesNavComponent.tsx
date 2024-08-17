'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';

interface Service {
  link:string;
  name: string;
  description: Array<{
    title: string;
    link: string;
    desc: string;
  }>;
}




const services: Service[] = [
  {
    link: "/design-and-branding",
 
    name: 'Design & Branding',
    description: [
      {
        title: 'Wireframing and Prototyping',
        link: "/",
        desc: 'Creating wireframes and prototypes to visualize the website\'s layout, structure, and user flow before development begins.'
      },
      {
        title: 'Responsive Design',
        link: "/",
        desc: 'Ensuring that website designs are responsive and adapt seamlessly to various screen sizes and devices, providing an optimal viewing experience for users.'
      },
      {
        title: 'User Interface (UI) Design',
        link: "/",
        desc: 'Designing the visual elements of the website interface, including typography, color schemes, icons, buttons, and other interactive elements.'
      },
      {
        title: 'UI/UX Audits',
        link: "/",
        desc: 'Assessing existing website designs to identify areas for improvement in terms of usability, accessibility, and overall user experience.'
      },
      {
        title: 'Website Design',
        link: "/",
        desc: 'Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.'
      },
      {
        title: 'User Experience (UX) Design',
        link: "/",
        desc: 'Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.'
      },
    ]
  },


  {
    link: "/website-development",
    name: 'Website Development',
    description: [
      {
        title: 'Wireframing and Prototyping',
        link: "/",
        desc: 'Creating wireframes and prototypes to visualize the website\'s layout, structure, and user flow before development begins.'
      },
      {
        title: 'Responsive Design',
        link: "/",
        desc: 'Ensuring that website designs are responsive and adapt seamlessly to various screen sizes and devices, providing an optimal viewing experience for users.'
      },
      {
        title: 'User Interface (UI) Design',
        link: "/",
        desc: 'Designing the visual elements of the website interface, including typography, color schemes, icons, buttons, and other interactive elements.'
      },
      {
        title: 'UI/UX Audits',
        link: "/",
        desc: 'Assessing existing website designs to identify areas for improvement in terms of usability, accessibility, and overall user experience.'
      },
      {
        title: 'Website Design',
        link: "/",
        desc: 'Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.'
      },
      {
        title: 'User Experience (UX) Design',
        link: "/",
        desc: 'Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.'
      },
    ]
  },

  {
    link: "/ui-ux-design-for-web",
    name: 'UI/UX Design For Web',
    description: [
      {
        title: 'Wireframing and Prototyping',
        link: "/",
        desc: 'Creating wireframes and prototypes to visualize the website\'s layout, structure, and user flow before development begins.'
      },
      {
        title: 'Responsive Design',
        link: "/",
        desc: 'Ensuring that website designs are responsive and adapt seamlessly to various screen sizes and devices, providing an optimal viewing experience for users.'
      },
      {
        title: 'User Interface (UI) Design',
        link: "/",
        desc: 'Designing the visual elements of the website interface, including typography, color schemes, icons, buttons, and other interactive elements.'
      },
      {
        title: 'UI/UX Audits',
        link: "/",
        desc: 'Assessing existing website designs to identify areas for improvement in terms of usability, accessibility, and overall user experience.'
      },
      {
        title: 'Website Design',
        link: "/",
        desc: 'Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.'
      },
      {
        title: 'User Experience (UX) Design',
        link: "/",
        desc: 'Crafting visually appealing and user-friendly website designs tailored to your clients brand identity and target audience.'
      },
    ]
  },
  



  {
    
    link: "/",
    name: 'UI/UX Design For Mobile',
    description: [
      {
        title: 'Mobile App Design',
        link: "/",
        desc: 'Designing intuitive and engaging mobile app interfaces for iOS and Android platforms, considering platform-specific guidelines and best practices.'
      },
      {
        title: 'Responsive Mobile Design',
        link: "/",
        desc: 'Adapting website designs for mobile devices, optimizing layouts and interactions for touchscreens and smaller screens.'
      },
      {
        title: 'Mobile Prototyping',
        link: "/",
        desc: 'Creating interactive prototypes for mobile apps to simulate user interactions and test usability before development.'
      },
      {
        title: 'Mobile Usability Testing',
        link: "/",
        desc: 'Conducting usability testing sessions with real users to gather feedback and refine mobile app designs based on user insights.'
      },
      {
        title: 'Cross-Platform Design',
        link: "/",
        desc: 'Designing mobile apps that work seamlessly across different devices and operating systems, ensuring a consistent user experience.'
      },
      {
        title: 'Mobile UI Patterns',
        link: "/",
        desc: 'Implementing mobile UI design patterns and conventions to create familiarity and improve usability for users.'
      },
    ]
  },

  

  {
    link: "/",
 
    name: 'Mobile Application Development',
    description: [
      {
        title: 'iOS App Development',
        link: "/",
        desc: 'Specializing in creating applications specifically for Apple\'s iOS platform.'
      },
      {
        title: 'Android App Development',
        link: "/",
        desc: 'Focusing on building applications tailored for Android devices.'
      },
      {
        title: 'Cross-Platform App Development',
        link: "/",
        desc: 'Offering development solutions that work seamlessly across multiple platforms, such as iOS, Android, and web.'
      },
      {
        title: 'App Maintenance and Support',
        link: "/",
        desc: 'Offering ongoing maintenance services to keep mobile applications up-to-date with the latest technologies and to address any issues or bugs that arise post-launch.'
      },
      {
        title: 'App Store Optimization (ASO)',
        link: "/",
        desc: 'Optimizing mobile applications for better visibility and ranking in app stores, including keyword optimization, metadata enhancement, and performance monitoring.'
      },
      {
        title: 'Backend Development',
        link: "/",
        desc: 'Building robust backend systems to support the functionality of mobile applications, including databases, APIs, and servers.'
      }
    ]
  },
  {
    link: "/",
 
    name: 'Graphic Design',
    description: [
        {
          title: 'Logo Design',
          link: "/",
          desc: 'Offer logo design services for businesses looking to establish their brand identity.'
        },
        {
          title: 'Print Design',
          link: "/",
          desc: 'Offer design services for printed materials such as business cards, brochures, flyers, posters, and packaging.'
        },
        {
          title: 'Digital Illustration',
          link: "/",
          desc: 'Provide custom illustrations for websites, social media, presentations, and other digital platforms.'
        },
        {
          title: 'Web Graphics',
          link: "/",
          desc: 'Design graphics specifically tailored for websites, including banners, icons, buttons, and infographics.'
        },
        {
          title: 'Social Media Graphics',
          link: "/",
          desc: 'Design visuals for social media platforms such as Facebook, Instagram, Twitter, LinkedIn, etc.'
        },
        {
          title: 'Packaging Design',
          link: "/",
          desc: 'Offer design services for product packaging, labels, and product branding.'
        },
        {
          title: 'Infographic Design',
          link: "/",
          desc: 'Create visually appealing and informative infographics for data visualization purposes.'
        }
    ]
  },
  {
    link: "/",
 
    name: 'Digital Marketing',
    description: [
      {
        title: 'Search Engine Optimization (SEO)',
        link: "/",
        desc: 'Optimizing websites to rank higher in search engine results pages (SERPs) and attract organic traffic.'
      },
      {
        title: 'Pay-Per-Click Advertising (PPC)',
        link: "/",
        desc: 'Creating and managing paid advertising campaigns on platforms like Google Ads, Bing Ads, and social media platforms to drive targeted traffic.'
      },
      {
        title: 'Social Media Marketing (SMM)',
        link: "/",
        desc: 'Developing and executing strategies to engage audiences, build brand awareness, and drive traffic through social media platforms such as Facebook, Instagram, Twitter, LinkedIn, etc.'
      },
      {
        title: 'Content Marketing',
        link: "/",
        desc: 'Creating and distributing valuable, relevant content to attract and retain a clearly defined audience and drive profitable customer action.'
      },
      {
        title: 'Email Marketing',
        link: "/",
        desc: 'Designing and implementing email campaigns to nurture leads, engage subscribers, and drive conversions.'
      },
      {
        title: 'Influencer Marketing',
        link: "/",
        desc: 'Collaborating with influencers or industry experts to promote products or services and reach a wider audience.'
      },
      {
        title: 'Online Reputation Management (ORM)',
        link: "/",
        desc: 'Monitoring and managing online reviews, mentions, and feedback to maintain a positive brand image and address any negative sentiment.'
      },
      {
        title: 'Marketing Automation',
        link: "/",
        desc: 'Implementing tools and workflows to automate repetitive marketing tasks, personalize customer experiences, and streamline marketing operations.'
      }
    ]
  },
  {
    link: "/",
 
    name: 'Video Editing',
    description: [
      {
        title: 'QuickBooks Setup and Installation',
        link: "/",
        desc: 'Help clients set up QuickBooks software tailored to their business needs.'
      },
      {
        title: 'QuickBooks Training',
        link: "/",
        desc: 'Offer training sessions to educate clients on how to effectively use QuickBooks for their business accounting needs.'
      },
      {
        title: 'QuickBooks Integration Services',
        link: "/",
        desc: 'Integrate QuickBooks with other software solutions used by clients to streamline business operations.'
      },
      {
        title: 'QuickBooks Customization',
        link: "/",
        desc: 'Customize QuickBooks settings and reports to match the specific requirements of clients\' businesses.'
      },
      {
        title: 'QuickBooks Troubleshooting and Support',
        link: "/",
        desc: 'Offer ongoing support to troubleshoot issues and resolve any challenges clients encounter while using QuickBooks.'
      },
      {
        title: 'QuickBooks Data Migration',
        link: "/",
        desc: 'Assist clients in migrating their financial data from legacy systems to QuickBooks for seamless transition and continuity.'
      }
    ]
  },
  {
    link: "/quickbooks",
    name: 'QuickBooks',
    description: [
      {
        title: 'QuickBooks Setup and Installation',
        link: "/",
        desc: 'Help clients set up QuickBooks software tailored to their business needs.'
      },
      {
        title: 'QuickBooks Training',
        link: "/",
        desc: 'Offer training sessions to educate clients on how to effectively use QuickBooks for their business accounting needs.'
      },
      {
        title: 'QuickBooks Integration Services',
        link: "/",
        desc: 'Integrate QuickBooks with other software solutions used by clients to streamline business operations.'
      },
      {
        title: 'QuickBooks Customization',
        link: "/",
        desc: 'Customize QuickBooks settings and reports to match the specific requirements of clients\' businesses.'
      },
      {
        link: "/",
        title: 'QuickBooks Troubleshooting and Support',
        desc: 'Offer ongoing support to troubleshoot issues and resolve any challenges clients encounter while using QuickBooks.'
      },
      {
        title: 'QuickBooks Data Migration',
        link: "/",
        desc: 'Assist clients in migrating their financial data from legacy systems to QuickBooks for seamless transition and continuity.'
      }
    ]
  },
];

const ServicesDropdown = () => {
  const [hoveredService, setHoveredService] = useState<Service | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const handleLinkClick = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button variant="ghost">
        Services <ChevronDown className='w-4 ml-1' />
      </Button>
      <div
        className={`fixed top-12 left-0 w-full h-[70vh] p-4 bg-white z-50 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex h-full">
          <div className="w-1/4 bg-gray-200 p-4 rounded-lg mr-4">
            {services.map((service, index) => (
              <Link
              key={index}
              onClick={handleLinkClick}
              href={`services/${service.link}`}>
              <div
                key={index}
                onMouseEnter={() => setHoveredService(service)}
                className="p-2 my-2 text-lg w-full font-semibold cursor-pointer hover:bg-gray-300 rounded-lg"
              >
                {service.name}
              </div>
              </Link>
            ))}
          </div>
          <div className="w-3/4 p-4 rounded-lg bg-gray-100 overflow-y-auto max-h-[70vh]">
            {hoveredService ? (
              <div className=''>
                <h2 className="text-2xl font-bold">{hoveredService.name}</h2>
                <div className="flex flex-col">
                  {hoveredService.description.map((desc, idx) => (
                    <Link                 onClick={handleLinkClick}
                    href={desc.link} key={idx} className="my-6">
                      <h3 className="text-xl font-semibold">{desc.title}</h3>
                      <p>{desc.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-gray-500">Hover over a service to see the details.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
