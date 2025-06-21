import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";
import { LanguageSelect } from "../LanguageSelect/LanguageSelect";
import dictionary from "../../dictionary";
import { theme } from "../../theme";

const NavBarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${theme.navbar_background};
  border-bottom: 1px solid ${theme.border};
  font-size: 1rem;
  padding: 1rem 3rem;
  position: relative;
  padding: 1rem;
`;

const LanguageSelectWrapper = styled.span`
  position: absolute;
  font-size: 1rem;
  align-self: flex-end;
  margin-right: 3rem;
  margin-top: -0.35rem;

  @media (min-width: ${dictionary.width.tablet_plus}) {
    display: none;
  }
`;

const StyledLogoContainer = styled.div`
  align-self: flex-start;
  font-weight: bold;
`;

const NavLinkWrapper = styled.div`
  display: ${(props) => (props.active ? "block" : "none")};
  text-align: center;

  @media (min-width: ${dictionary.width.tablet_plus}) {
    display: inline-flex;
    align-items: center;
    align-self: flex-end;
    margin-bottom: -1rem;
    margin-top: -2rem;
    font-size: 1.2rem;

    img {
      margin-left: 0.5rem;
    }
  }

  @media (max-width: ${dictionary.width.tablet_plus}) {
    img {
      display: none;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  margin: 1rem auto;
  text-decoration: none;
  transition: 0.2s;
  color: ${theme.fonts};
  margin-left: 0.8rem;

  @media (min-width: ${dictionary.width.tablet_plus}) {
    display: inline;
  }

  &:hover {
    transition: 0.3s;
    color: ${theme.border};
  }

  &.active {
    pointer-events: none;
    color: ${theme.primary};
  }

  /* &:first-child {
    border-top: 1px solid pink;
    width: 90vw;
    border-radius: 1rem;
  } */

  /* &:last-child {
    border-bottom: 1px solid pink;
    width: 90vw;
    border-radius: 1rem;
  } */
`;

const StyledFontIcon = styled.span`
  display: block;
  position: absolute;
  right: 1.5rem;
  top: -0.1rem;
  color: ${theme.fonts};
  font-size: 2.6rem;
  cursor: pointer;

  &:hover {
    color: ${theme.border};
    transition: 0.3s;
  }

  @media (min-width: ${dictionary.width.tablet_plus}) {
    display: none;
  }
`;

export function NavBar() {
  const [active, setActive] = useState(false);
  const { translate } = useTranslation();

  return (
    <NavBarWrapper>
      <StyledLogoContainer>
        {/* <Logo to={"/"} /> */} <NavLink to={"/"}>LOGO</NavLink>
      </StyledLogoContainer>
      <LanguageSelectWrapper>
        <LanguageSelect />
      </LanguageSelectWrapper>
      <StyledFontIcon onClick={() => setActive(!active)}>
        &equiv;
      </StyledFontIcon>
      <NavLinkWrapper active={active} onClick={() => setActive(!active)}>
        <StyledNavLink to="/">{translate("NavBar", "home")}</StyledNavLink>
        <StyledNavLink to="/services">
          {translate("NavBar", "services")}
        </StyledNavLink>
        <StyledNavLink to="/team">{translate("NavBar", "team")}</StyledNavLink>
        <StyledNavLink to="/gallery">
          {translate("NavBar", "gallery")}
        </StyledNavLink>
        <StyledNavLink to="/contact">
          {translate("NavBar", "contact")}
        </StyledNavLink>
        <StyledNavLink to="/blog">{translate("NavBar", "blog")}</StyledNavLink>
        <LanguageSelect />
      </NavLinkWrapper>

      {/* <NavLink to="/alert">Alert</NavLink> */}
    </NavBarWrapper>
  );
}
