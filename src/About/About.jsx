import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center text-white px-2">
      <h1 className="text-3xl mt-2 mb-4 md:text-5xl">About Us</h1>
      <h1 className="text-5xl mb-4"> [Fix It]</h1>
      <h1 className="text-xl text-center md:text-3xl mb-4 font-mono">Why Search, When You Can Pull And Merge...</h1>
      <div className="border-b-2 border-b-slate-700 py-2 mb-2 border-t-2 border-t-slate-700">
        <h1 className="text-xl text-center text-blue-300  underline mb-2 md:text-3xl ">
          Our Mission
        </h1>
        <p className="text-center md:text-lg">
          Welcome to "fix it", A place for all the issues for your ease.Foster
          collaboration within open source by connecting developers with
          impactful projects, promoting inclusivity, and simplifying the
          onboarding process.
        </p>

        <h1 className="text-xl text-center text-blue-300 underline mb-2 mt-2 md:text-3xl">
          Our Goals
        </h1>
        <p className="text-center md:text-lg">
          {" "}
          1. Connect Developers: Facilitate seamless connections between
          developers and projects aligned with their skills.
          <br />
          2. Simplify Onboarding: Make it easy for organizations to welcome new
          contributors and for individuals to find projects they are passionate
          about.
          <br />
          3. Promote Mentorship: Cultivate a culture of mentorship, encouraging
          experienced developers to guide and support newcomers.
        </p>

        <h1 className="text-xl text-center text-blue-300 underline mb-2 mt-2 md:text-3xl">
          Future Updates
        </h1>
        <p className="text-center md:text-lg">
          Continuous improvement is our commitment. Expect enhanced user
          experiences, advanced project management features, and seamless
          integration with various version control platforms.
        </p>
        <h1 className="text-xl text-blue-300 underline text-center mb-2 mt-2 md:text-3xl">
          Join Us
        </h1>
        <p className="text-center md:text-lg">
          Embark on our journey to create a hub for innovation, collaboration,
          and meaningful contributions to open source. Together, let's make
          open-source development accessible, rewarding, and impactful for
          everyone involved.
        </p>
      </div>
    </div>
  );
};

export default About;
