import styled from "styled-components";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";
import { LanguageSelect } from "../LanguageSelect/LanguageSelect";

const NavBarWrapper = styled.nav``;

const StyledLogoContainer = styled.div``;

const NavLinkWrapper = styled.div``;

const StyledNavLink = styled(NavLink)`
  &:hover {
    transition: 0.3s;
  }

  &.active {
    pointer-events: none;
  }
`;

const StyledFontIcon = styled.span``;

export function NavBar() {
  const [active, setActive] = useState(false);
  const { translate } = useTranslation();

  return (
    <NavBarWrapper>
      <StyledLogoContainer>{/* <Logo to={"/"} /> */}</StyledLogoContainer>
      <StyledFontIcon onClick={() => setActive(!active)}>
        &equiv;
      </StyledFontIcon>
      <NavLinkWrapper active={active} onClick={() => setActive(!active)}>
        <StyledNavLink to="/">{translate("NavBar", "home")}</StyledNavLink>
        <StyledNavLink to="/team">{translate("NavBar", "team")}</StyledNavLink>
        <StyledNavLink to="/pricelist">
          {translate("NavBar", "price")}
        </StyledNavLink>
        <StyledNavLink to="/gallery">
          {translate("NavBar", "gallery")}
        </StyledNavLink>
        <StyledNavLink to="/contact">
          {translate("NavBar", "contact")}
        </StyledNavLink>
        <LanguageSelect display={false} />
      </NavLinkWrapper>

      {/* <NavLink to="/alert">Alert</NavLink> */}
    </NavBarWrapper>
  );
}
