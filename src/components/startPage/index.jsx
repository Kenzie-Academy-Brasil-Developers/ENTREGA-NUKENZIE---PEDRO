import "/src/components/startPage/start.css";
import "/src/components/button/style.css";

export const StartPage = ({ setPage }) => {
  const switchToDash = () => {
    setPage(true);
  };
  return (
    <main className="start__container">
      <div className="div__slogan">
        <img src="/src/assets/Nu Kenzie first.svg" alt="Nu Kenzie" />
        <h1>
          Centralize o <br />
          controle das suas <br />
          finanças
        </h1>
        <p>de forma rápida e segura</p>
        <button className="button" onClick={switchToDash}>
          iniciar
        </button>
      </div>
      <img src="/src/assets/Illustration.svg" alt="Ilustração" />
    </main>
  );
};
