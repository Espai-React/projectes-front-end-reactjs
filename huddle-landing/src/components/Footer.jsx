import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => (
  <StyledFooter>
    <Container>
      <img src="./images/logo_white.svg" alt="white logo" />
      <Flex alignItems="start" gap="10px">
        <ul>
          <li>Gran Via, 2337, 08022 - BARCELONA</li>
          <li>+34 123 45 67 </li>
          <li>exemple@huddle.cat</li>
        </ul>
        <ul>
          <li>About us</li>
          <li>What we do</li>
          <li>FAQ</li>
        </ul>
        <ul>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>
        <SocialIcons/>
      </Flex>
      <p>&copy; 2022 Huddle. All rights reserved</p>
    </Container>
  </StyledFooter>
);

export default Footer;
