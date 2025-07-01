import styled from "styled-components";
import { Loader } from "../../components/Loader/Loader";
import dictionary from "../../dictionary";
import { useTranslation } from "../../hooks/useTranslation";
import { theme } from "../../theme";

const ServicesWrapper = styled.section`
  width: 90%;
  max-width: 1000px;
  margin: 3rem auto;
`;

const Description = styled.div`
  margin: 2.5rem auto;
  width: 90%;
  text-align: center;
  font-size: 1.3rem;
  line-height: 2.3rem;

  @media (min-width: ${dictionary.width.tablet_plus}) {
    font-size: 1.8rem;
  }
`;

const PriceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.1rem;

  @media (min-width: ${dictionary.width.tablet_plus}) {
    font-size: 1.3rem;
  }

  th,
  td {
    padding: 1rem;
    border-bottom: 1px solid ${theme.border};
    text-align: left;
  }

  th {
    background-color: ${theme.primary};
    color: white;
  }

  th:first-child {
    border-radius: 0.5rem 0 0 0;
  }

  th:last-child {
    border-radius: 0 0.5rem 0 0;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;

  @media (min-width: ${dictionary.width.tablet_plus}) {
    font-size: 2.4rem;
  }
`;

const StyledButton = styled.button`
  position: relative;
  margin-top: 3rem;
  left: 50%;
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

export function Services() {
  const { translate } = useTranslation();

  const services = [
    { name: translate("Services", "Cut"), price: "70 zł" },
    { name: translate("Services", "BeardTrim"), price: "40 zł" },
    { name: translate("Services", "CutAndBeard"), price: "100 zł" },
    { name: translate("Services", "Shave"), price: "50 zł" },
    { name: translate("Services", "KidsCut"), price: "60 zł" },
  ];

  return (
    <>
      <Loader />
      <ServicesWrapper>
        <SectionTitle>{translate("Services", "Title")}</SectionTitle>
        <Description>{translate("Services", "DescriptionFirst")}</Description>
        <Description>{translate("Services", "DescriptionSecond")}</Description>
        <PriceTable>
          <thead>
            <tr>
              <th>{translate("Services", "Service")}</th>
              <th>{translate("Services", "Price")}</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, idx) => (
              <tr key={idx}>
                <td>{service.name}</td>
                <td>{service.price}</td>
              </tr>
            ))}
          </tbody>
        </PriceTable>
        <a href={dictionary.main_info.booksy_link} target="_blank">
          <StyledButton>{translate("Home", "Hero_Button")}</StyledButton>
        </a>
      </ServicesWrapper>
    </>
  );
}
