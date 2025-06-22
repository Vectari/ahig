import PL_FLG from "/pl_flag.svg";
import UK_FLAG from "/uk_flag.svg";
import { useEffect } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import styled from "styled-components";

const StyledLanguageSelect = styled.span`
  cursor: pointer;

  img {
    padding-left: 0.5rem;
    width: 1.7rem;
  }
`;

export function LanguageSelect() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "pl";
    setLanguage(storedLanguage);
  }, [setLanguage]);

  return (
    <StyledLanguageSelect>
      {language === "pl" ? (
        <img
          src={UK_FLAG}
          onClick={() => {
            setLanguage("en");
            localStorage.setItem("language", "en");
          }}
          alt="uk flag icon"
        />
      ) : (
        <img
          src={PL_FLG}
          onClick={() => {
            setLanguage("pl");
            localStorage.setItem("language", "pl");
          }}
          alt="pl flag icon"
        />
      )}
    </StyledLanguageSelect>
  );
}
