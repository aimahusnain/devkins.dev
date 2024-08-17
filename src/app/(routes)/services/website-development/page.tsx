"use client";

import ContactUs from "@/components/Webdevelopment/contactus";
import HeroSection from "@/components/Webdevelopment/Herosection";
import LatestProjects from "@/components/Webdevelopment/LatestProjects";
import Services from "@/components/Webdevelopment/Services";
import TechStack from "@/components/Webdevelopment/TechStack";

const WebsiteDevlopment = () => {
  return (
    <>
      <div>
        <HeroSection />

        <Services />

        {/* Tech Stack Section */}
        <TechStack />

        <LatestProjects />
      
      <ContactUs />
      </div>
    </>
  );
};

export default WebsiteDevlopment;
