import FullCard from "./ui/cards/FullCard";

const Projects = () => {
  return (
    <>
      <div className="flex w-full justify-center text-6xl font-sans font-bold pt-5">
        My Projects
      </div>
      <div className="flex flex-wrap w-full justify-center">
        <FullCard
          bgUrl="/healthcare.png"
          heading="Healthcare Application"
          barColor="red"
        >
          <p>React, Redux-Saga, RxJS, NodeJS, MongoDB</p>
        </FullCard>
        <FullCard
          bgUrl="/portfolioPhoto.png"
          heading="Personal Portfolio Website"
          barColor="red"
        >
          <p>Next.JS, React, Tailwind, CSS</p>
        </FullCard>
        <FullCard
          bgUrl="/realEstate.png"
          heading="Real Estate Application"
          barColor="red"
        >
          <p>React, Redux Toolkit, React Router 5, Tailwind, Firebase</p>
        </FullCard>
        <FullCard bgUrl="/discord.jpg" heading="Discord Clone">
          <p>Next.JS, React, Socket.io, Prisma, Tailwind, MySQL</p>
        </FullCard>
        <FullCard
          bgUrl="/spotify.jpg"
          heading="Spotify Clone"
          barColor="orange"
        >
          <p>Next.JS, React, Stripe, Supabase, Tailwind, PostgreSQL</p>
        </FullCard>
        <FullCard
          bgUrl="/instagram.jpg"
          heading="Instagram Clone"
          barColor="red"
        >
          <p>Next.JS, React, Tailwind, Firebase, NextAuth, Recoil</p>
        </FullCard>
      </div>
    </>
  );
};

export default Projects;
