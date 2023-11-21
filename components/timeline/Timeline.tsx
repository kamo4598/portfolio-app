import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { GraduationCap, Briefcase, Layers, Users2 } from "lucide-react";

const WorkIcon = () => <></>;

const TimeLine: React.FC = () => {
  return (
    <>
      <div className="flex w-full justify-center text-6xl font-sans font-bold py-5">
        My Professional Journey
      </div>
      <div className="flex w-full max-h-[1000rem] justify-center">
        <VerticalTimeline animate={true}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#832161", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #832161" }}
            date="2023 - present"
            iconStyle={{ background: "#832161", color: "#fff" }}
            icon={<Users2 />}
            visible={true}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Freelancer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Senior Software Engineer
            </h4>
            <p>Frontend, Backend, Fullstack, MERN, MEAN, REST APIs, GraphQL</p>
            <hr className="mt-3" />
            <div className="mt-4">
              <div className="flex">
                <div>{<Layers />}</div>
                <div className="ml-2">
                  Tech Stack: Next.js, NestJS, React, Redux, Redux-Saga,
                  Redux-Observable/RxJS, Angular, TypeScript, Node.js, SQL,
                  MongoDB, Git, Atlassian (Jira, Confluence, Bitbucket)
                </div>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            iconStyle={{ background: "#273469", color: "#fff" }}
            icon={<Briefcase />}
            visible={true}
            contentStyle={{ background: "#273469", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #273469" }}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              CureMD
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software Engineer/Team Lead
            </h4>
            <p>
              Healthcare, EMR, Team Lead, Code Reviews, Application Improvement,
              Development Roadmap, Architecture, User Stories, Client Support,
              Agile Activities Management, Competitor Analysis
            </p>
            <hr className="mt-4" />
            <div className="mt-4">
              <div className="flex">
                <div>{<Layers />}</div>
                <div className="ml-2">
                  Tech Stack: React, Redux, Redux-Saga, Redux-Observable/RxJS,
                  Next.js, Angular, TypeScript, RabbitMQ, Node.js, SQL, MongoDB,
                  Azure Devops, Git
                </div>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: "#41463D", color: "#fff" }}
            icon={<Briefcase />}
            visible={true}
            contentStyle={{ background: "#41463D", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #41463D" }}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              CureMD
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Associate Software Engineer
            </h4>
            <p>
              Application Development, Client Change Requests, Communication
              with Stakeholders, Impediments Management, Pragmatic Solutions,
              Localization Project, Client Issue Resolution
            </p>
            <hr className="mt-4" />
            <div className="mt-4">
              <div className="flex">
                <div>{<Layers />}</div>
                <div className="ml-2">
                  Tech Stack: React, Angular, TypeScript, Javascript, JQuery,
                  C#, SQL Server, .NET, ASP.NET Web Forms, Windows Service,
                  ASP.NET Web Service (ASMX), TFS
                </div>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: "#034732", color: "#fff" }}
            icon={<Briefcase />}
            visible={true}
            contentStyle={{ background: "#034732", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #034732" }}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              CureMD
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Software Trainee Engineer
            </h4>
            <p>
              Supervised Development, Team Communication, Problem Understanding,
              Healthcare Training, Web Development Training
            </p>
            <hr className="mt-4" />
            <div className="mt-4">
              <div className="flex">
                <div>{<Layers />}</div>
                <div className="ml-2">
                  Tech Stack: VB Script, ASP Classic, ASP.NET Web Forms,
                  Javascript, SQL Server
                </div>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2020"
            iconStyle={{ background: "#60492C", color: "#fff" }}
            icon={<GraduationCap />}
            visible={true}
            contentStyle={{ background: "#60492C", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #60492C" }}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              National University of Sciences & Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor Of Electrical Engineering
            </h4>
            <p>
              Fundamentals of Computing, Object Oriented Programming, Data
              Structures, Digital Image Processing, Machine Learning, Computer
              Vision
            </p>
            <hr className="mt-4" />
            <div className="mt-4">
              <div className="flex">
                <div>{<Layers />}</div>
                <div className="ml-2">Tech Stack: C, C++, MATLAB, Python</div>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default TimeLine;
