"use client";

import Image from "next/image";
import SSS_BG_IMAGE from "@/assets/project_backgrounds/sss_bg.png";
import InTextLink from "@/components/InTextLink";
import IconRow from "@/components/main_page/IconRow";

// Tech Icons
import NodeIcon from "@/assets/tech_icons/node_icon.svg";
import SpringIcon from "@/assets/tech_icons/spring_icon.svg";
import BootstrapIcon from "@/assets/tech_icons/bootstrap_icon.svg";
import JSIcon from "@/assets/tech_icons/js_icon.svg";
//
import useCopyDimension from "@/app/hooks/useCopyDimension";
import BottomNavButton from "@/components/project_page/BottomNavButton";

// Blobs
import SSSTechBlobs from "@/assets/blobs/sss/sss_tech_blobs.svg";
import SSSAnimationBlobs from "@/assets/blobs/sss/sss_animation_blobs.svg";

export default function Home() {
  // Hooks
  const scrollAnimationHeight = useCopyDimension("ayo__scroll__animation-div");
  return (
    <main className="section-y-spacing">
      {/* Hero Section */}
      <section className="w-full">
        {/* TODO: Add a Back button */}
        <Image src={SSS_BG_IMAGE} className="w-full h-[80vh]" />
        <h1 className="hero -translate-y-1/2 grid-margin-pl">
          Some Spring Stuff
        </h1>
        {/* Description Section */}
        <div className="w-full h-fit flex-1 lg:flex mx-auto space-y-4">
          <div className="desktop:w-1/2 w-full grid-margin-pl">
            <p>
              A static website designed to introduce beginners in back-end
              development to the basics through very popular Java framework –
              Spring MVC. The website walks through all stages, from installing
              IDE to writing the last bits of code. The website includes
              snippets of code from a real project that students can use as a
              guide.
            </p>
          </div>
          <div className="tablet:w-1/2 w-full grid-margin-pr mx-auto flex flex-1 flex-row justify-center tablet:space-x-20 space-x-10 grid-gutter-pl">
            <InTextLink
              text={"Project's Code"}
              dest={"https://github.com/adtimokhin/somespringstuff"}
            />
            <InTextLink
              text={"Landing Page"}
              dest={
                "https://adtimokhin.github.io/somespringstuff/public/html/entries/01.Introduciton.html"
              }
            />
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="w-full h-fit flex-1 grid-margin-px relative space-y-10">
        <h2 className="section-title">Tech Stack</h2>
        <IconRow
          icons={[SpringIcon, JSIcon, BootstrapIcon]}
          subtexts={["Spring MVC", "JS", "Bootsrtap 5"]}
        />
        <IconRow
          icons={[NodeIcon]}
          subtexts={["NodeJS"]}
        />

        {/* Blobs */}
        <div className="absolute bottom-0 left-0 w-full h-full flex flex-1 items-center justify-center -z-50">
          <Image
            src={SSSTechBlobs}
            alt={"Tech Blobs"}
            layout="fill"
            className="blur-3xl"
          />
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="w-full h-fit grid-margin-px overflow-hidden">
        <h2 className="section-title">Overview</h2>
        <div className="w-full h-fit flex">
          <div
            className="h-fit tablet:w-1/2 w-full space-y-[300px] grid-gutter-pr"
            id="ayo__scroll__animation-div"
          >
            <div>
              <h3 className="secondary-title">Rapid Website</h3>
              <p>
                Focus of the project was to make a very simple website that
                covers most of the Spring foundations. I used Bootstrap 5, HTML,
                CSS, and NodeJS to create this project quickly.
              </p>
            </div>

            <div>
              <h3 className="secondary-title">Writing</h3>
              <p>
                I wrote 26 articles in total. Together they tell a story of
                making a very easy project with Spring, which includes all the
                main packages needed to develop a backend-app. I covered topics
                like DAO, singleton pattern, controllers, security, mail API,
                and AOP.
              </p>
            </div>

            <div/>
          </div>
          <div
            className="tablet:w-1/2 w-0 grid-gutter-pl relative tablet:flex hidden"
            style={{
              height: scrollAnimationHeight,
            }}
          >
            {/* Todo: Add animation later */}

            {/* Blobs */}
            <div className="absolute top-0 -right-[40%] flex flex-1 items-center justify-center -z-50 w-full h-full">
              <Image
                src={SSSAnimationBlobs}
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
          bottomText={"AYO"}
          arrowLeft
          dest={"/projects/ayo"}
        />
        <BottomNavButton
          topText={"Checkout"}
          bottomText={"WDS"}
          dest={"/projects/wds"}
        />
      </section>
    </main>
  );
}
