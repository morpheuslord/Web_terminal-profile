import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Brute-Hacking-Framework-SourceCode",
    desc: "The Brute Hacking framework is my version of PentestBox with updated tools and services but also with a few more updates of tools and updated interface.",
    url: "https://github.com/morpheuslord/Brute-Hacking-Framework-SourceCode",
  },
  {
    id: 2,
    title: "Nmap-API",
    desc: "Uses python3.10, Debian, python-Nmap, and flask framework to create a Nmap API that can do scans with a good speed online and is easy to deploy. This is a implementation for our college PCL project which is still under development and constantly updating.",
    url: "https://github.com/morpheuslord/Nmap-API",
  },
  {
    id: 3,
    title: "PassInfo",
    desc: "The early version of Brute-Hacking-Framework. Made completely using Batch Scripting",
    url: "https://github.com/morpheuslord/passinfo.cmd",
  },
  {
    id: 4,
    title: "GPT-Vuln_Analyzer",
    desc: "This is a Proof Of Concept application that demostrates how AI can be used to generate accurate results for vulnerability analysis and also allows further utilization of the already super useful ChatGPT.",
    url: "https://github.com/morpheuslord/GPT_Vuln-analyzer",
  },
];

export default Projects;
