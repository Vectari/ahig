import styled from "styled-components";
import dictionary from "../../dictionary";
import { Loader } from "../../components/Loader/Loader";
import { theme } from "../../theme";
import { useTranslation } from "../../hooks/useTranslation";
import hero from "../../media/hero.jpg";
import home_one from "../../media/home_one.jpg";
import home_two from "../../media/home_two.jpg";
import home_three from "../../media/home_three.jpg";

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

const FirstDescription = styled.div`
  margin: 3rem auto;
  width: 90%;
  text-align: center;
  font-size: 1.3rem;

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

  @media (min-width: ${dictionary.width.tablet_plus}) {
    margin-bottom: 0;
    margin-right: 1.5rem; /* odstęp między zdjęciami w rzędzie */
  }
`;

export function Home() {
  const { translate } = useTranslation();

  return (
    <>
      <Loader />
      <HomePageWrapper>
        <HeroWrapper>
          <HeroImg img={hero} />
          <HeroLogo />
          <a href="https://booksy.com/pl-pl/" target="_blank">
            <HeroButton>{translate("Home", "Hero_Button")}</HeroButton>
          </a>
        </HeroWrapper>

        <FirstDescription>
          {translate("Home", "FirstDescription")}
        </FirstDescription>

        <PhotosWrapper>
          <PhotoItem>
            <img src={home_one} alt="" />
            <p>{translate("Home", "PhotoSloganOne")}</p>
          </PhotoItem>
          <PhotoItem>
            <img src={home_two} alt="" />
            <p>{translate("Home", "PhotoSloganTwo")}</p>
          </PhotoItem>
          <PhotoItem>
            <img src={home_three} alt="" />
            <p>{translate("Home", "PhotoSloganThree")}</p>
          </PhotoItem>
        </PhotosWrapper>
      </HomePageWrapper>
    </>
  );
}
