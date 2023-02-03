import { Button } from "../button";
import trash from "../../assets/trash.svg";

export const Card = ({
  transaction,
  listTransactions,
  setListTransactions,
}) => {
  const removeTrasaction = () => {
    const newList = listTransactions.filter(
      (item) => item.id !== transaction.id
    );
    setListTransactions(newList);
  };

  return (
    <>
      {transaction.type == "Entrada" ? (
        <li className="card__container">
          <div className="div__title">
            <h4 className="card__description">{transaction.description}</h4>
            <p className="card__type">{transaction.type}</p>
          </div>
          <div className="div__value">
            <span className="card__value">R$ {transaction.value}</span>
            <Button className={"card__btn"} func={() => removeTrasaction()}>
              <img src="/src/assets/trash.svg" alt="" />
            </Button>
          </div>
        </li>
      ) : (
        <li className="card__container-expense">
          <div className="div__title">
            <h4 className="card__description">{transaction.description}</h4>
            <p className="card__type">{transaction.type}</p>
          </div>
          <div className="div__value">
            <span className="card__value">R$ {transaction.value}</span>
            <Button className={"card__btn"} func={() => removeTrasaction()}>
              <img src={trash} alt="Lixinho" />
            </Button>
          </div>
        </li>
      )}
    </>
  );
};
