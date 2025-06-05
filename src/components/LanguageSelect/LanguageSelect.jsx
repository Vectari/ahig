import PL_FLG from "/pl_flag.svg";
import UK_FLAG from "/uk_flag.svg";
import { useEffect } from "react";
import { useLanguage } from "../../hooks/useLanguage";

export function LanguageSelect() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "pl";
    setLanguage(storedLanguage);
  }, [setLanguage]);

  return (
    <>
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
    </>
  );
}
