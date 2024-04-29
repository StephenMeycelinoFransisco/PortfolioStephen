"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap - Tailwind CSS</li>
        <li>Javascript - Typescript</li>
        <li>React js - Next js</li>
      </ul>
    ),
  },
  {
    title: "SoftSkills",
    id: "softskills",
    content: (
      <ul className="list-disc pl-2">
        <li>Problem-Solving</li>
        <li>Team Work</li>
        <li>Time Management</li>
        <li>Critical Thingking</li>
        <li>Attention to Detail</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Alterra Academy, Indonesia</li>
        <li>MySkill.id, Indonesia</li>
        <li>Dinamika Bangsa University, Indonesia</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Figma for UI/UX Design - MySkill.id</li>
        <li>
          Informatics Technology Specialist Artificial Intelligent - Certiport
        </li>
        <li>Frontend Engineer React js - Alterra Academy</li>
        <li>Introduction to Backend Engineering - MySkill.id</li>
        <li>TOELF English Course - Dinamika Bangsa University</li>
        <li>Online Course Microsoft VI - Virtual Education Academy</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="about"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a frontend developer with a passion for creating interactive
            and responsive web applications. I have experience studying with
            JavaScript, React js, Redux, Axios, Typescript, Next js, HTML, CSS,
            and Git. I am a quick learner and I am always looking to expand my
            knowledge and skill set. I am a team player and I am excited to work
            with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Hard Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("softskills")}
              active={tab === "softskills"}
            >
              {" "}
              Soft Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
