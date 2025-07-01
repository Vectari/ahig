import { useState } from "react";
import { useForm } from "react-hook-form";
// import { dictionary } from "../../dictionary";
import styled from "styled-components";
import { theme } from "../../theme";
import { Loader } from "../../components/Loader/Loader";

// const mailtoUrl = `mail@mail`;
// const phoneNumber = `123-123-123`;

const StyledContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  padding: 3rem;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem 1rem;
    align-items: center;
  }
`;

const StyledLeftWrapper = styled.div`
  flex: 1;
  min-width: 280px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  font-size: 1rem;
  color: ${theme.text};

  h3 {
    margin: 1.5rem 0 0.5rem;
    font-size: 1.2rem;
    text-align: center;
  }

  a {
    color: ${theme.primary};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const StyledMapWrapper = styled.div`
  margin-top: 1.5rem;
`;

const StyledGoogleMap = styled.iframe`
  display: block;
  width: 100%;
  max-width: 450px;
  height: 400px;
  border-radius: 1rem;
  border: 0.2rem solid ${theme.border};
  margin: 0 auto;
`;

const StyledFormWrapper = styled.div`
  flex: 2;
  box-sizing: border-box;
  width: 100%;
  max-width: 600px;
  background-color: ${theme.border};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledInput = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${theme.border};
  font-size: 1rem;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: ${theme.primary};
  }
`;

const StyledTextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${theme.border};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: ${theme.primary};
  }
`;

const StyledButton = styled.button`
  background-color: ${theme.navbar_text_hover};
  color: ${theme.navbar_text};
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: ${theme.section_one_btn_background};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.p`
  color: ${theme.alert_red};
  font-size: 0.9rem;
  margin: -0.5rem 0 0.5rem;
`;

const StatusMessage = styled.p`
  font-size: 0.95rem;
  color: ${(props) =>
    props.status === "sent"
      ? `${theme.alert_green}`
      : props.status === "error"
      ? `${theme.alert_red}`
      : theme.text};
`;

const StyledContact = styled.a`
  color: pink;
`;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [status, setStatus] = useState("idle");

  const onSubmit = async (data) => {
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mgvanryo", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("sent");
        reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Błąd podczas wysyłania formularza:", err);
      setStatus("error");
    }
  };

  return (
    <>
      <Loader />
      <StyledContactWrapper>
        <StyledLeftWrapper>
          <div>
            <h3>Adres:</h3>
            Nazwa
            <p>&quot;Nazwa&quot;</p>
            ul. Ulica 66/6
            <br /> 12-222 Miasto
            <h3>Kontakt:</h3>
            {/* <StyledContact href={mailtoUrl}>
        {dictionary.main_info.email}
      </StyledContact>
      <br />
      <br />
      <StyledContact href={`tel:${phoneNumber}`}>
        {dictionary.main_info.phone_numer}
      </StyledContact> */}
          </div>

          <StyledMapWrapper>
            <StyledGoogleMap
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.8923383023093!2d17.974213977071763!3d53.13007819088285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470313ddf5c01c35%3A0x7620de7c507b6267!2sSerduszka%20Dwa%20-%20Biuro%20partnersko%20-%20matrymonialne!5e0!3m2!1spl!2spl!4v1742457533988!5m2!1spl!2spl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></StyledGoogleMap>
          </StyledMapWrapper>
        </StyledLeftWrapper>
        <StyledFormWrapper>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledInput
              type="text"
              placeholder="Imię"
              {...register("name", { required: "Imię jest wymagane" })}
            />
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

            <StyledInput
              type="tel"
              placeholder="Numer kontaktowy"
              {...register("phoneNumber", {
                pattern: {
                  value: /^\d{9}$/,
                  message: "Nieprawidłowy format numeru",
                },
              })}
            />
            {errors.phoneNumber && (
              <ErrorText>{errors.phoneNumber.message}</ErrorText>
            )}

            <StyledInput
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email jest wymagany",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Nieprawidłowy format emaila",
                },
              })}
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

            <StyledTextArea
              placeholder="Wiadomość"
              {...register("message", { required: "Wiadomość jest wymagana" })}
            />
            {errors.message && <ErrorText>{errors.message.message}</ErrorText>}

            <StyledButton type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Wysyłanie..." : "Wyślij"}
            </StyledButton>

            {status !== "idle" && (
              <StatusMessage status={status}>
                {status === "sent"
                  ? "Wiadomość wysłana!"
                  : status === "error"
                  ? "Błąd podczas wysyłania."
                  : ""}
              </StatusMessage>
            )}
          </StyledForm>
        </StyledFormWrapper>
      </StyledContactWrapper>
    </>
  );
}
