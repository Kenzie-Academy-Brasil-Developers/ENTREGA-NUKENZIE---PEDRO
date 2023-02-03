import "/src/components/startPage/start.css";
import "/src/components/button/style.css";
import { Button } from "../button";
import LogoOne from "../../assets/Nu Kenzie first.svg";
import illustration from "../../assets/Illustration.svg";

export const StartPage = ({ setPage }) => {
  const switchToDash = () => {
    setPage(true);
  };
  return (
    <main className="start__container">
      <div className="div__slogan">
        <img src={LogoOne} alt="Nu Kenzie" />
        <h1>
          Centralize o <br />
          controle das suas <br />
          finanças
        </h1>
        <p>de forma rápida e segura</p>
        <Button className={"start__btn"} func={switchToDash}>
          iniciar
        </Button>
      </div>
      <img className="img__Illus" src={illustration} alt="Ilustração" />
    </main>
  );
};
