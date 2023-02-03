import { Button } from "../button";
import LogoTwo from "../../assets/Nu Kenzie second.svg";

export const Header = ({ setPage }) => {
  const switchToStart = () => {
    setPage(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <img src={LogoTwo} alt="Nu Kenzie" />
        <Button func={switchToStart}>Início</Button>
      </nav>
    </header>
  );
};
