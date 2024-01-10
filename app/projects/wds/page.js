"use client";

import Image from "next/image";
import WDS_BG_IMAGE from "@/assets/project_backgrounds/wds_bg.png";
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
import WDSTechBlobs from "@/assets/blobs/wds/wds_tech_blobs.svg";
import WDSAnimationBlobs from "@/assets/blobs/wds/wds_animation_blobs.svg";

export default function Home() {
  // Hooks
  const scrollAnimationHeight = useCopyDimension("wds__scroll__animation-div");
  return (
    <main className="section-y-spacing">
      {/* Hero Section */}
      <section className="w-full">
        {/* TODO: Add a Back button */}
        <Image src={WDS_BG_IMAGE} className="w-full h-[80vh]" />
        <h1 className="hero -translate-y-1/2 grid-margin-pl">WDS</h1>
        {/* Description Section */}
        <div className="w-full h-fit flex-1 lg:flex mx-auto space-y-4">
          <div className="desktop:w-1/2 w-full grid-margin-pl">
            <p>
              A website designed for students in D&apos;Overbroeck&apos;s College Oxford
              to schedule time when they will use communal washing machines and
              dryers in the residence halls of the school. The system allowed to
              select convenient time periods, create accounts. The system kept
              log of the bookings for the school administration to analyze the
              times machines are in use and infer if some machines are broken.
            </p>
          </div>
          <div className="tablet:w-1/2 w-full grid-margin-pr mx-auto flex flex-1 flex-row justify-center space-x-20 grid-gutter-pl">
            <InTextLink text={"Project's Code"} dest={"https://github.com/adtimokhin/washingDisasterSolver"} />
            <InTextLink text={"Outline PDF"} dest={"Nowhere"} />
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
            src={WDSTechBlobs}
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
          <div
            className="h-fit w-1/2 space-y-[300px] grid-gutter-pr"
            id="wds__scroll__animation-div"
          >
            <div>
              <h3 className="secondary-title">Storage</h3>
              <p>
                To store user data and generate logs I used PostgreSQL. Since
                the project was well structured and did not require any updates
                to the database in the future SQL-based database was a good
                choice since it was easy to implement and cheap to maintain.
              </p>
            </div>

            <div>
              <h3 className="secondary-title">My part</h3>
              <p>
                I developed a system that would track current user bookings for
                washing machines and dryers to limit the time slots that they
                are allowed to select. That was a requirement from the
                administration, so that the system would be more just to all
                users.
              </p>
            </div>

            <div>
              <h3 className="secondary-title">Using Spring MVC</h3>
              <p>
                I used multiple Spring packages to ensure that the app is
                suitable for use by many people. I used Spring Security, Spring
                DAO, Spring AOP amongst others to achieve many goals in
                development.
              </p>
            </div>
          </div>
          <div
            className="w-1/2 grid-gutter-pl relative"
            style={{
              height: scrollAnimationHeight,
            }}
          >
            {/* Todo: Add animation later */}

            {/* Blobs */}
            <div className="absolute top-0 -right-[40%] flex flex-1 items-center justify-center -z-50 w-full h-full">
              <Image
                src={WDSAnimationBlobs}
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
        <BottomNavButton
          topText={"Checkout"}
          bottomText={"SSS"}
          arrowLeft
          dest={"/projects/sss"}
        />
        <BottomNavButton topText={"Checkout"} bottomText={"Shell"} dest={"/projects/shell"} />
      </section>
    </main>
  );
}
