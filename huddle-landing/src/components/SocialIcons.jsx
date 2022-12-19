import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styles/SocialIcons.styled";

const SocialIcons = () => (
  <StyledSocialIcons>
    <li>
      <a href="http://twitter.com">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="http://facebook.com">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="http://lnkedin.com">
        <FaLinkedin />
      </a>
    </li>
  </StyledSocialIcons>
);

export default SocialIcons;
