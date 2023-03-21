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

const Research: React.FC = () => {
    const { arg, history, rerender } = useContext(termContext);

    /* ===== get current command ===== */
    const currentCommand = getCurrentCmdArry(history);

    /* ===== check current command is redirect ===== */
    useEffect(() => {
        if (checkRedirect(rerender, currentCommand, "research")) {
            research.forEach(({ id, url }) => {
                id === parseInt(arg[1]) && window.open(url, "_blank");
            });
        }
    }, [arg, rerender, currentCommand]);

    /* ===== check arg is valid ===== */
    const checkArg = () =>
        isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
            <Usage cmd="research" />
        ) : null;

    return arg.length > 0 || arg.length > 2 ? (
        checkArg()
    ) : (
        <div data-testid="research">
            <ProjectsIntro>
                My Currently Published Research Papers <br />
                There are more to come..
            </ProjectsIntro>
            {research.map(({ id, title, desc, url }) => (
                <ProjectContainer key={id}>
                    <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
                    <ProjectDesc>{desc}</ProjectDesc>
                    <ProjectDesc>{url}</ProjectDesc>
                </ProjectContainer>
            ))}
            <Usage cmd="research" marginY />
        </div>
    );
};

const research = [
    {
        id: 1,
        title: "AI Based Enumeration and Exploit Suggester",
        desc: "A paper suggesting the usage of AI in Enumeration generally a network scanner",
        url: "https://www.jetir.org/papers/JETIRFM06037.pdf",
    }
];

export default Research;