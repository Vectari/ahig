import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";
import styled from "styled-components";
import dictionary from "../../dictionary";

const StyledFooterWrapper = styled.div`
  display: block;
  border-top: 2px solid black;
  margin-top: 3rem;
  padding: 0 1rem;
  justify-content: space-between;

  @media (min-width: ${dictionary.width.tablet_plus}) {
    display: flex;
    text-align: center;
  }
`;

const StyledLogoWrapper = styled.div`
  text-align: center;
`;

const StyledLeftSide = styled.div`
  @media (min-width: ${dictionary.width.tablet_plus}) {
  }
`;

const StyledPhoneMailWrapper = styled.div`
  text-align: center;
  font-size: 1.2rem;
`;

const StyledRightSide = styled.div`
  margin-top: 1rem;
`;

const StyledSocial = styled.div`
  color: pink;
  text-align: center;

  svg {
    scale: 1.5;
    padding: 0.7rem;
  }
`;

const StyledNavLinkWrapper = styled.div`
  display: grid;
  text-align: center;

  @media (min-width: ${dictionary.width.tablet_plus}) {
    text-align: right;
  }

  a {
    text-decoration: none;
    color: yellow;

    &:hover {
      color: red;
      transition: 0.3s;
    }

    &.active {
      pointer-events: none;
      color: green;
    }
  }

  .creator {
    border-top: 1px solid pink;
    color: red;
    margin-top: 2rem;
    font-size: 0.5rem;
  }
`;

export function Footer() {
  const location = useLocation();
  const { translate } = useTranslation();
  // const [active, setActive] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scrolls to the top when route changes
  }, [location.pathname]);

  return (
    <StyledFooterWrapper>
      <StyledLeftSide>
        <StyledLogoWrapper>
          {/* <Logo /> */}
          LOGO
        </StyledLogoWrapper>
        <StyledPhoneMailWrapper>
          <p>123-123-123</p>
          <p>mail@mail.com</p>
        </StyledPhoneMailWrapper>
      </StyledLeftSide>
      <StyledRightSide>
        <StyledSocial>
          {/* <FaFacebook /> */}
          {/* <FaGoogle /> */}
        </StyledSocial>
        <StyledNavLinkWrapper>
          <NavLink to="/">{translate("NavBar", "home")}</NavLink>
          <NavLink to="/services">{translate("NavBar", "services")}</NavLink>
          <NavLink to="/team">{translate("NavBar", "team")}</NavLink>
          <NavLink to="/gallery">{translate("NavBar", "gallery")}</NavLink>
          <NavLink to="/contact">{translate("NavBar", "contact")}</NavLink>
          <NavLink to="/blog">{translate("NavBar", "blog")}</NavLink>
          <p className="creator">
            <a href="https://github.com/vectari" target="_blank">
              Created by Mateusz Majer
            </a>
          </p>
        </StyledNavLinkWrapper>
      </StyledRightSide>
    </StyledFooterWrapper>
  );
}
