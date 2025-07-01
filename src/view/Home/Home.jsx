import styled from "styled-components";
import dictionary from "../../dictionary";
import { Loader } from "../../components/Loader/Loader";
import { theme } from "../../theme";
import { useTranslation } from "../../hooks/useTranslation";
import hero from "../../media/hero.jpg";
import logo from "../../media/logo.png";
import home_one from "../../media/home_one.jpg";
import home_two from "../../media/home_two.jpg";
import home_three from "../../media/home_three.jpg";
import { useEffect, useRef, useState } from "react";

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroWrapper = styled.div`
  position: relative;
`;

const HeroImg = styled.div`
  width: 100%;
  height: 40vh;
  min-height: 300px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0 0 1rem 1rem;

  @media (min-width: ${dictionary.width.tablet_plus}) {
    height: 60vh;
  }
`;

const HeroLogo = styled.div`
  background-color: black;
  background-image: ${({ img }) => `url(${img})`};
  background-size: 75%;
  background-position: center;
  background-repeat: no-repeat;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);

  @media (min-width: ${dictionary.width.tablet_plus}) {
    width: 280px;
    height: 280px;
  }
`;

const HeroButton = styled.button`
  position: absolute;
  left: 50%;
  top: 75%;
  transform: translateX(-50%);
  background-color: ${theme.primary};
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  color: ${theme.fonts};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  max-width: 16rem;
  white-space: nowrap;

  @media (min-width: ${dictionary.width.tablet_plus}) {
    top: 70%;
    font-size: 1.2rem;
    padding: 1.2rem;
  }
`;

const Description = styled.div`
  margin: 3rem auto;
  width: 90%;
  text-align: center;
  font-size: 1.3rem;
  line-height: 2.3rem;

  @media (min-width: ${dictionary.width.tablet_plus}) {
    font-size: 1.8rem;
  }
`;

const PhotosWrapper = styled.div`
  display: flex;
  flex-direction: column;

  img {
    border-radius: 1rem;
    margin: 0.5rem;
    max-width: 95%;
  }

  @media (min-width: ${dictionary.width.tablet_plus}) {
    flex-direction: row;
  }
`;

const PhotoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (min-width: ${dictionary.width.tablet_plus}) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

export function Home() {
  const { translate } = useTranslation();
  const [visibleItems, setVisibleItems] = useState([false, false, false]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const photoRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observers = photoRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
            observer.unobserve(entry.target); // odsubskrybuj po pojawieniu się
          }
        },
        {
          threshold: 0.1, // gdy 10% elementu jest widoczne
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [photoRefs]);

  return (
    <>
      <Loader />
      <HomePageWrapper>
        <HeroWrapper>
          <HeroImg img={hero} />
          <HeroLogo img={logo} />
          <a href={dictionary.main_info.booksy_link} target="_blank">
            <HeroButton>{translate("Home", "Hero_Button")}</HeroButton>
          </a>
        </HeroWrapper>

        <Description>{translate("Home", "FirstDescription")}</Description>

        <PhotosWrapper>
          {[home_one, home_two, home_three].map((imgSrc, index) => (
            <PhotoItem
              key={index}
              ref={photoRefs[index]}
              className={visibleItems[index] ? "visible" : ""}
            >
              <img src={imgSrc} alt="" />
              <p>
                {translate(
                  "Home",
                  `PhotoSlogan${["One", "Two", "Three"][index]}`
                )}
              </p>
            </PhotoItem>
          ))}
        </PhotosWrapper>

        <Description>{translate("Home", "SecondDescription")}</Description>
      </HomePageWrapper>
    </>
  );
}
