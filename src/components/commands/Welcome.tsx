import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
 _______  __   __  ___   ______    _______  __    _      ___  _______  _______  __   __  ___  
|       ||  | |  ||   | |    _ |  |   _   ||  |  | |    |   ||       ||       ||  | |  ||   | 
|       ||  |_|  ||   | |   | ||  |  |_|  ||   |_| |    |   ||    ___||    ___||  |_|  ||   | 
|       ||       ||   | |   |_||_ |       ||       |    |   ||   |___ |   |___ |       ||   | 
|      _||       ||   | |    __  ||       ||  _    | ___|   ||    ___||    ___||       ||   | 
|     |_ |   _   ||   | |   |  | ||   _   || | |   ||       ||   |___ |   |___  |     | |   | 
|_______||__| |__||___| |___|  |_||__| |__||_|  |__||_______||_______||_______|  |___|  |___| 
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            { }
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`

          `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
