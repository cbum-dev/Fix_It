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
        <DescriptionCard
          title={"Our Goals"}
          description={
            "Our goals are to connect developers with impactful projects, promote inclusivity, and simplify the onboarding process. We aim to foster a culture of mentorship and collaboration within open source. We are committed to making open-source development accessible, rewarding, and impactful for everyone involved."
          }
        />
        <DescriptionCard
          title={"Future Updates"}
          description={
            "Continuous improvement is our commitment. Expect enhanced user experiences, advanced project management features, and seamless integration with various version control platforms."
          }
        />
        <DescriptionCard
          title={"Hqcktoberfest Issues"}
          description={
            "Dive into the world of Hacktoberfest! Discover beginner-friendly issues and join the global open source celebration by making meaningful contributions to projects."
          }
        />
        <DescriptionCard
          title={"Latest GSoC Programs"}
          description={
            "Explore the latest Google Summer of Code (GSoC) programs. Find exciting projects and opportunities to contribute to open source while gaining valuable experience."
          }
        />
        <DescriptionCard
          title={"Join Us"}
          description={
            "Embark on our journey to create a hub for innovation, collaboration, and meaningful contributions to open source. Together, let's make open-source development accessible, rewarding, and impactful for everyone involved."
          }
        />
      </div>
    </div>
  );
};

export default About;
