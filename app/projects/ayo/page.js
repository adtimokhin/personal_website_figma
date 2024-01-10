"use client"

import Image from "next/image";
import AYO_BG_IMAGE from "@/assets/project_backgrounds/ayo_bg.png";
import InTextLink from "@/components/InTextLink";
import IconRow from "@/components/main_page/IconRow";

// Tech Icons
import JavaIcon from "@/assets/tech_icons/java_icon.svg";
import ReactIcon from "@/assets/tech_icons/react_icon.svg";
import SpringIcon from "@/assets/tech_icons/spring_icon.svg";
import PythonIcon from "@/assets/tech_icons/python_icon.svg";
import MongoIcon from "@/assets/tech_icons/mongo_icon.svg";
import PostgresIcon from "@/assets/tech_icons/postgres_icon.svg";
import JSIcon from "@/assets/tech_icons/js_icon.svg";
import useCopyDimension from "@/app/hooks/useCopyDimension";
import BottomNavButton from "@/components/project_page/BottomNavButton";

// Blobs
import AYOTechBlobs from "@/assets/blobs/ayo/ayo_tech_blobs.svg";
import AYOAnimationBlobs from "@/assets/blobs/ayo/ayo_animation_blobs.svg";


export default function Home() {
  // Hooks
  const scrollAnimationHeight = useCopyDimension("ayo__scroll__animation-div");
  return (
    <main className="section-y-spacing">
      {/* Hero Section */}
      <section className="w-full">
        {/* TODO: Add a Back button */}
        <Image src={AYO_BG_IMAGE} className="w-full h-[80vh]" />
        <h1 className="hero -translate-y-1/2 grid-margin-pl">AYO</h1>
        {/* Description Section */}
        <div className="w-full h-fit flex-1 lg:flex mx-auto space-y-4">
          <div className="desktop:w-1/2 w-full grid-margin-pl">
            <p>
              A mobile application for IOS and Android designed to finding
              people to chat with when going to a bar or a club. At the party
              user matches to other users that are physically at the party and
              then matches signal them who they can talk to. Vision behind the
              project is to make people less socially anxious and facilitate
              activities beyond home.
            </p>
          </div>
          <div className="tablet:w-1/2 w-full grid-margin-pr mx-auto flex flex-1 flex-row justify-center space-x-20 grid-gutter-pl">
            <InTextLink text={"Project's Code"} dest={"https://github.com/adtimokhin/ayo-mobie-app"} />
            <InTextLink text={"Landing Page"} dest={"Nowhere"} />
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="w-full h-fit flex-1 grid-margin-px relative">
        <h2 className="section-title">Tech Stack</h2>
        <IconRow
          icons={[SpringIcon, ReactIcon, MongoIcon, MongoIcon]}
          subtexts={["Spring MVC", "React JS", "Mongo DB", "Mongo DB"]}
        />
        <IconRow
          icons={[MongoIcon, MongoIcon]}
          subtexts={["Spring MVC", "React JS"]}
        />

         {/* Blobs */}
         <div className="absolute bottom-0 left-0 w-full h-full flex flex-1 items-center justify-center -z-50">
            <Image
              src={AYOTechBlobs}
              alt={"Tech Blobs"}
              layout="fill"
              className="blur-3xl"
            />
          </div>


      </section>

      {/* Accomplishments Section */}
      <section className="w-full h-fit grid-margin-px overflow-hidden">
        <h2 className="section-title">Overview</h2>
        <div className="w-full h-fit flex-row flex justify-between items-center">
          <div className="h-fit w-1/2 space-y-[300px] grid-gutter-pr" id="ayo__scroll__animation-div">
            <div>
              <h3 className="secondary-title">Expo</h3>
              <p>
                To save time on the development I developed a cross-platform
                mobile app using React Native, and Expo. That lead to creating a
                portable solution that was developed twice as fast as it would
                usually take.
              </p>
            </div>

            <div>
              <h3 className="secondary-title">Firebase</h3>
              <p>
                To perform matching system, handle user data securely, and send
                notifications, I used two very popular SaaS tools for backend
                development: Firebase and AWS. Such a decision allowed to create
                a system that it is easy to manage, easy to keep track of user
                engagement and resulted in cutting costs of service.
              </p>
            </div>

            <div>
              <h3 className="secondary-title">MVP</h3>
              <p>
                To test the idea for a project a website prototype was
                created, that testers could use to point out what inconveniences
                that experience while using the app. Based on this, I
                implemented multiple features into the application, including a
                setting to change profile picture and a map that shows bars that
                currently AYO can be used in.
              </p>
            </div>
          </div>
          <div className="w-1/2 grid-gutter-pl relative" style={{
            height:scrollAnimationHeight
          }}>

          {/* Todo: Add animation later */}

          {/* Blobs */}
          <div className="absolute top-0 -right-[40%] flex flex-1 items-center justify-center -z-50 w-full h-full">
            <Image
              src={AYOAnimationBlobs}
              alt={"Animation Blobs"}
              layout="fill"
              className="blur-3xl"
            />
          </div>

          </div>
        </div>
      </section>

      {/* Bottom Navigation Buttons */}
      <section className="w-full h-fit flex-row flex justify-between items-center grid-margin-px">
          <BottomNavButton topText={"Checkout"} bottomText={"Shell"} arrowLeft dest={"/projects/shell"}/>
          <BottomNavButton topText={"Checkout"} bottomText={"SSS"} dest={"/projects/sss"}/>
      </section>
    </main>
  );
}
