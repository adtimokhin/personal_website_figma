"use client";

import Image from "next/image";
import SHELL_BG_IMAGE from "@/assets/project_backgrounds/shell_bg.png";
import InTextLink from "@/components/InTextLink";
import IconRow from "@/components/main_page/IconRow";

// Tech Icons
import CIcon from "@/assets/tech_icons/c_icon.svg";
import LinuxIcon from "@/assets/tech_icons/linux_icon.svg";
// 
import useCopyDimension from "@/app/hooks/useCopyDimension";
import BottomNavButton from "@/components/project_page/BottomNavButton";

// Blobs
import SSSTechBlobs from "@/assets/blobs/shell/shell_tech_blobs.svg";
import SSSAnimationBlobs from "@/assets/blobs/shell/shell_animation_blobs.svg";

export default function Home() {
  // Hooks
  const scrollAnimationHeight = useCopyDimension("ayo__scroll__animation-div");
  return (
    <main className="section-y-spacing">
      {/* Hero Section */}
      <section className="w-full">
        {/* TODO: Add a Back button */}
        <Image src={SHELL_BG_IMAGE} className="w-full h-[80vh]" />
        <h1 className="hero -translate-y-1/2 grid-margin-pl">Shell Copy</h1>
        {/* Description Section */}
        <div className="w-full h-fit flex-1 lg:flex mx-auto space-y-4">
          <div className="desktop:w-1/2 w-full grid-margin-pl">
            <p>
              A copy of Linux Shell process that allows interacting with a
              computer in a more detailed manner through terminal. The project
              supports all the commands that a regular bash or shell would, as
              well as provides support for redirections, multicommand lines of
              input. Also, the project adds a support for a custom redirection
              command called &apos;prepend redirection&apos;. It allows appending the
              output to the start of the file.
            </p>
          </div>
          <div className="tablet:w-1/2 w-full grid-margin-pr mx-auto flex flex-1 flex-row justify-center tablet:space-x-20 space-x-10 grid-gutter-pl">
            <InTextLink text={"Project's Code"} dest={"Nowhere"} />
          </div>
        </div>
      </section>

      {/* Tech Section */}
      <section className="w-full h-fit flex-1 grid-margin-px relative space-y-10">
        <h2 className="section-title">Tech Stack</h2>
        
        <IconRow
          icons={[ LinuxIcon]}
          subtexts={[ "Linux"]}
        />
        <IconRow
          icons={[CIcon]}
          subtexts={["C"]}
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
              <h3 className="secondary-title">Variable Size Arrays</h3>
              <p>
                I used C to create a software that makes system calls to the
                operating system to carry out most basic instructions that
                regular shell would. My implementation allowed for the
                parameterization of the commands using the variable size arrays
                that were used for parsing user input.
              </p>
            </div>

            <div>
              <h3 className="secondary-title">Custom Redirection</h3>
              <p>
                The implementation supported a custom redirection of output
                called prepending redirection (&apos;&gt;+&apos;). It allowed users to append
                the output of a command to a start of a file rather than the end
                of it. This allowed me to learn how to create and delete
                temporary files with unique names to store data previously
                stored in a redirection file. That was necessary, since C does
                not allow direct support of prepend writes.
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
          bottomText={"WDS"}
          arrowLeft
          dest={"/projects/wds"}
        />
        <BottomNavButton
          topText={"Checkout"}
          bottomText={"AYO"}
          dest={"/projects/ayo"}
        />
      </section>
    </main>
  );
}
