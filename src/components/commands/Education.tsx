import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Sc in computer applications (Cybersecurity)",
    desc: "Jain Deemed To Be University ",
  },
  {
    title: "Pre-University (SEBA)",
    desc: "Presidency PU college",
  },
  {
    title: "SSLC / 10th",
    desc: "Sri Chaitanya",
  },
];

export default Education;
