export const Header = ({ setPage }) => {
  const switchToStart = () => {
    setPage(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <img src="/src/assets/Nu Kenzie second.svg" alt="Nu Kenzie" />
        <button onClick={switchToStart}>Início</button>
      </nav>
    </header>
  );
};
