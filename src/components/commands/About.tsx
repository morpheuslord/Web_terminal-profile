import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Chiranjeevi G</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a highly motivated cybersecurity researcher with expertise in red team operations and security testing.</HighlightAlt>
        I have a passion for staying up to date with the latest advancements in the field and continuously improving my skills and knowledge.
        My expertise extends to programming languages such as C++, C, and Python, and I have a solid understanding of website hacking and application testing.
        I believe in the power of learning and acquiring new skills to stay ahead in the field of cybersecurity. In addition to my technical skills,
        I am an active blogger and write thought-provoking articles and blog posts on topics related to cybersecurity.
      </p>
      <p>
        I am passionate about writing Automation Scripts for hacking and <br />
        On research related to cybersecuroty based concepts
      </p>
    </AboutWrapper>
  );
};

export default About;
