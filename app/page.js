"use client";

// Components
import Image from "next/image";
import LargeButton from "@/components/main_page/LargeButton";
import Card from "@/components/main_page/Card";

// Icons
import DownIcon from "@/assets/icons/down_arrow.svg";

// Preview Images for the projects
import AyoPreview from "@/assets/project_previews/AYO_Preview_Image_Mesh.png";
import WDSPreview from "@/assets/project_previews/WDS_Preview_Image_Mesh.png";
import SSSPreview from "@/assets/project_previews/SSS_Preview_Image_Mesh.png";
import ShellPreview from "@/assets/project_previews/Shell_Preview_Image_Mesh.png";
import InTextLink from "@/components/InTextLink";

// Social Media Icons
import InstagramIcon from "@/assets/icons/social/instagram_icon.svg";
import LinkedInIcon from "@/assets/icons/social/linked_in_icon.svg";
import EmailIcon from "@/assets/icons/social/mail_icon.svg";
import IconRow from "@/components/main_page/IconRow";

// Tech Icons
import JavaIcon from "@/assets/tech_icons/java_icon.svg";
import ReactIcon from "@/assets/tech_icons/react_icon.svg";
import SpringIcon from "@/assets/tech_icons/spring_icon.svg";
import PythonIcon from "@/assets/tech_icons/python_icon.svg";
import MongoIcon from "@/assets/tech_icons/mongo_icon.svg";
import PostgresIcon from "@/assets/tech_icons/postgres_icon.svg";
import JSIcon from "@/assets/tech_icons/js_icon.svg";

// Blobs SVGs
import HeroBlbobs from "@/assets/blobs/hero_blobs.svg";
import TechBlobs from "@/assets/blobs/tech_blobs.svg";

// Hooks
import useCopyDimension from "./hooks/useCopyDimension";
import { useState } from "react";

export default function Home() {

  const cards = {
    ayo: (
      <Card
        title={"Preview"}
        description={
          "This is a mobile application that is designed to make introducing yourself to people at parties easier through a system similar to Tinder, but which enforces real-life talks."
        }
        tags={["React JS", "React Native", "Firebase", "AWS"]}
        previewImage={AyoPreview}
      />
    ),
    sss: (
      <Card
        title={"Preview"}
        description={
          "A website for people starting in web development to learn basics of a popular Java framework called Spring MVC by building a simple project."
        }
        tags={["Bootstrap 5", "Java", "Spring MVC"]}
        previewImage={SSSPreview}
      />
    ),
    wds: (
      <Card
        title={"Preview"}
        description={
          "An online booking system for students in D’Overbroeck’s College to reserve time periods for washing machines and dryers at school’s residence buildings."
        }
        tags={["Spring MVC", "PostgreSQL", "FTL"]}
        previewImage={WDSPreview}
      />
    ),
    shell: (
      <Card
        title={"Preview"}
        description={
          "A copy of a Linux shell process with support of redirections and multi-command input lines. The system also integrates a custom redirection type – append redirect."
        }
        tags={["C", "Linux"]}
        previewImage={ShellPreview}
      />
    ),
    null:(
      <div className="w-[80%] h-full border-text-color border-[1px] rounded-3xl px-4 py-2 space-y-3 bg-bg-color relative">
        <div className="flex flex-1 justify-center items-center align-middle h-full">
        <p className="icon-subtext text-center">
          hover on the buttons
          <br />
          for preview
        </p>
        </div>
      </div>
    )
  };

  // Hooks
  const projectButtonHeight = useCopyDimension("project__buttons-div");
  const [selectedProject, setSelectedProject] = useState("null");

  return (
    <main className="section-y-spacing">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen relative">
        <h1 className="hero text-center md:w-1/2 w-[80%] pb-12">
          Developer. I Craft <span className="font-outline-1">Mobile</span> &{" "}
          <span className="font-outline-1">Web</span> Solutions
        </h1>
        <h2 className="body text-center text-text-color/50 lg:w-1/4 sm:w-1/3 w-[70%]">
          CS student @ UChicago, a software developer bringing concepts to life.
        </h2>
        <div className="bottom-3 absolute justify-center items-center flex flex-col">
          <p className="icon-subtext">scroll for more</p>
          <Image src={DownIcon} alt={"Down Icon"} height={26} />
        </div>

        {/* Animation div */}
        <div
          id="hero_animation"
          className="absolute top-0 left-0 w-full h-full -z-50"
        >
          <Image
            src={HeroBlbobs}
            alt={"Hero Blobs"}
            layout="fill"
            objectFit="contain"
            objectPosition="bottom"
            className="blur-2xl tablet:blur-3xl desktop:blur-3xl"
          />
        </div>
      </section>

      {/* Project Section */}
      <section id="projects" className="w-full h-fit flex mx-auto" onMouseLeave={() => setSelectedProject("null")}>
        <div
          className="tablet:w-1/2 w-full grid-margin-pl relative "
          id="project__buttons-div"
        >
          <h2 className="section-title">Projects</h2>
          <ul
            className="h-fit button-block pb-2"
          >
            <li id="ayo_button">
              <LargeButton
                title={"AYO"}
                description={"Social platform for bars and clubs"}
                dest={"/projects/ayo"}
                hoverBgImage={"linear-gradient(90deg, #e0575d, #702eba)"}
                whenHover={() => setSelectedProject("ayo")}
              />
            </li>
            <li id="sss_button">
              <LargeButton
                title={"Some Spring Stuff"}
                description={"Site for learning Spring MVC"}
                dest={"/projects/sss"}
                hoverBgImage={"linear-gradient(90deg, #2e62e5, #8ebbf4)"}
                whenHover={() => setSelectedProject("sss")}
              />
            </li>
            <li id="wds_button">
              <LargeButton
                title={"Washing Disaster Solver"}
                description={"Booking system for washing machines"}
                dest={"/projects/wds"}
                hoverBgImage={"linear-gradient(90deg, #235394, #1e848b)"}
                whenHover={() => setSelectedProject("wds")}
              />
            </li>
            <li id="shell_button">
              <LargeButton
                title={"Shell Copy"}
                description={"Copy of Linux Shell"}
                dest={"/projects/shell"}
                hoverBgImage={"linear-gradient(90deg, #69a8e3, #a26e82)"}
                whenHover={() => setSelectedProject("shell")}
              />
            </li>
          </ul>
          <InTextLink
            text={"Other Projects"}
            dest={"https://github.com/adtimokhin"}
          />
        </div>

        {/* Preview Part */}
        <div
          className="tablet:w-1/2 w-0 grid-margin-pr relative tablet:flex hidden"
          style={{
            height: projectButtonHeight,
          }}
        >
          {cards[selectedProject]}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full h-fit flex-1 lg:flex mx-auto">
        <div className="lg:w-1/2 w-full pb-9 lg:pb-0 grid-margin-px order-last">
          <h2 className="section-title">My Skills</h2>
          <p className="grid-gutter-px">
            I am proficient in a range of programming languages, including C,
            Java, Python, and JavaScript. My expertise extends to full-stack web
            development and mobile applications, where I specialize in tools
            like ReactJS and employ frameworks such as Spring MVC. Currently, I
            am actively engaged in expanding my knowledge, exploring areas such
            cross-platform mobile development with tools like React Native and
            Flutter. As part of this learning journey, I delve into UX and
            product design, aiming to enhance user experiences in every project
            I undertake.
          </p>
        </div>
        <div className="lg:w-1/2 w-full pb-9 lg:pb-0 space-y-10 grid-margin-px order-first relative">
          <IconRow
            icons={[PythonIcon, JavaIcon, JSIcon]}
            subtexts={["Python", "Java", "JS"]}
          />
          <IconRow icons={[PostgresIcon]} subtexts={["PostgreSQL"]} />
          <IconRow
            icons={[SpringIcon, ReactIcon, MongoIcon]}
            subtexts={["Spring MVC", "React JS", "Mongo DB"]}
          />

          {/* Blobs */}
          <div className="absolute bottom-0 left-0 w-full h-full flex flex-1 items-center justify-center -z-50">
            <Image
              src={TechBlobs}
              alt={"Tech Blobs"}
              layout="fill"
              className="blur-3xl"
            />
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="w-full h-fit flex-1 lg:flex mx-auto">
        <div className="lg:w-1/2 w-full pb-9 lg:pb-0 grid-margin-pl">
          <h2 className="section-title">Contact Me</h2>
          <p className="grid-gutter-pr">
            Please feel free to contact me for various reasons, including
            expressing your interest in having me join your project. I am
            enthusiastic about discussing any project ideas you may have,
            exploring potential collaborations, or simply staying in touch.
            Whether you&apos;re looking to strengthen your team, brainstorm new
            project concepts, or keep up with the latest updates I share, I
            welcome any communication.
          </p>
        </div>
        <div className="lg:w-1/2 w-full grid-margin-pr">
          <ul className="h-fit button-block">
            <li>
              <LargeButton
                title={
                  <span className="flex-row flex items-center">
                    <Image
                      src={InstagramIcon}
                      className="pr-3"
                      alt="instagram icon"
                    />
                    Instagram
                  </span>
                }
                description={"/adtimokhin"}
                dest={"https://www.instagram.com/adtimokhin"}
                target={"_blank"}
                hoverBgImage={"linear-gradient(90deg, #0D56AA, #0D56AA)"}
              />
            </li>
            <li>
              <LargeButton
                title={
                  <span className="flex-row flex items-center">
                    <Image
                      src={LinkedInIcon}
                      className="pr-3"
                      alt="linkedIn icon"
                    />
                    LinkedIn
                  </span>
                }
                description={"/adtimokhin"}
                dest={"https://www.linkedin.com/in/adtimokhin"}
                target={"_blank"}
                hoverBgImage={"linear-gradient(90deg, #0D56AA, #0D56AA)"}
              />
            </li>
            <li>
              <LargeButton
                title={
                  <span className="flex-row flex items-center">
                    <Image src={EmailIcon} className="pr-3" alt="gmail icon" />
                    Email
                  </span>
                }
                description={"adtimokhin@gmail.com"}
                dest={"mailto:adtimokhin@gmail.com"}
                target={"_blank"}
                hoverBgImage={"linear-gradient(90deg, #0D56AA, #0D56AA)"}
              />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
