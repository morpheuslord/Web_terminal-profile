import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>visitor</User>@<WebsiteName>chiranjeevi.profile</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
