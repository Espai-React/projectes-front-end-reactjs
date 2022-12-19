import { Image, Nav, StyledHeader } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <img src="./images/logo.svg" alt="logo" />
          <Button>Try It Free</Button>
        </Nav>
        <Flex gap="40px">
          <div>
            <h1>Build The Community Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections wit your users as ou
              engage in genuine discussion.
            </p>
          <Button bg="#ff0099" color="#fff">
            Get Started For Free
          </Button>
          </div>
          <Image src="./images/illustration-mockups.svg" alt="mockup"/>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
