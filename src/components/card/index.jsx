export const Card = ({
  transaction,
  listTransactions,
  setListTransactions,
}) => {
  const removeTrasaction = (index) => {
    const newList = [...listTransactions];
    newList.splice(index, 1);
    setListTransactions(newList);
  };

  return (
    <li className="card__container">
      <div className="div__title">
        <h4 className="card__description">{transaction.description}</h4>
        <p className="card__type">{transaction.type}</p>
      </div>
      <div className="div__value">
        <span className="card__value">R$ {transaction.value}</span>
        <button className="card__btn" onClick={removeTrasaction}>
          <img src="/src/assets/trash.svg" alt="" />
        </button>
      </div>
    </li>
  );
};
