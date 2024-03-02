import React from "react";
import DescriptionCard from "../../Components/Description";
const About = () => {
  return (
    <div className="flex flex-col bg-black items-center text-white px-2">
      <h1 className="text-3xl mt-2 mb-4  md:text-6xl  lg:text-7xl">About Us</h1>
      <h1 className="text-5xl mb-4">Let's Fix It</h1>
      <h1 className="text-xl text-center md:text-3xl mb-4 font-mono">
        Why Search, When You Can Pull And Merge...
      </h1>
      <div className="border-b-2  border-b-slate-700 py-2 mb-2 border-t-2 border-t-slate-700">
        <DescriptionCard
          title={"Our Mission"}
          description={
            "Welcome to fix it,A place for all the issues for your ease.Foster collaboration within open source by connecting developers with impactful projects, promoting inclusivity, and simplifying the onboarding process."
          }
        />

        <div className="bg-zinc-950 rounded-lg py-6 md:px-6 px-4 my-2">
          <h1 className="text-xl text-center text-blue-300 underline mb-2 mt-2 md:text-3xl">
            Our Goals
          </h1>
          <p className="text-center text-lg md:text-xl">
            {" "}
            1. Connect Developers: Facilitate seamless connections between
            developers and projects aligned with their skills.
            <br />
            2. Simplify Onboarding: Make it easy for organizations to welcome
            new contributors and for individuals to find projects they are
            passionate about.
            <br />
            3. Promote Mentorship: Cultivate a culture of mentorship,
            encouraging experienced developers to guide and support newcomers.
          </p>
        </div>
        {/* <DescriptionCard title={"Future Updates"} /> */}
        <div className="bg-zinc-950  rounded-lg py-6 md:px-6 px-4 my-2">
          <h1 className="text-xl text-center text-blue-300 underline mb-2 mt-2 md:text-3xl">
            Future Updates
          </h1>
          <p className="text-center text-lg md:text-xl">
            Continuous improvement is our commitment. Expect enhanced user
            experiences, advanced project management features, and seamless
            integration with various version control platforms.{" "}
          </p>
        </div>

        <div className="bg-zinc-950 rounded-lg py-6 md:px-6 px-4 my-2">
          <h1 className="text-xl text-blue-300 underline text-center mb-2 mt-2 md:text-3xl">
            Hacktoberfest Issues
          </h1>
          <p className="text-center text-lg md:text-xl">
            Dive into the world of Hacktoberfest! Discover beginner-friendly
            issues and join the global open source celebration by making
            meaningful contributions to projects.
          </p>
        </div>
        <div className="bg-zinc-950 rounded-lg py-6 md:px-6 px-4 my-2">
          <h1 className="text-xl text-blue-300 underline text-center mb-2 mt-2 md:text-3xl">
            Join Us
          </h1>
          <p className="text-center text-lg md:text-xl">
            Embark on our journey to create a hub for innovation, collaboration,
            and meaningful contributions to open source. Together, let's make
            open-source development accessible, rewarding, and impactful for
            everyone involved.
          </p>
        </div>
        <div className="bg-zinc-950 rounded-lg py-6 md:px-6 px-4 my-2">
          <h1 className="text-xl text-blue-300 underline text-center mb-2 mt-2 md:text-3xl">
            Latest GSoC Programs
          </h1>
          <p className="text-center text-lg md:text-xl">
            Explore the latest Google Summer of Code (GSoC) programs. Find
            exciting projects and opportunities to contribute to open source
            while gaining valuable experience.
          </p>
        </div>
        <div className="bg-zinc-950 rounded-lg py-6 md:px-6 px-4 my-2">
          <h1 className="text-xl text-blue-300 underline text-center mb-2 mt-2 md:text-3xl">
            Hacktoberfest Issues
          </h1>
          <p className="text-center text-lg md:text-xl">
            Dive into the world of Hacktoberfest! Discover beginner-friendly
            issues and join the global open source celebration by making
            meaningful contributions to projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
