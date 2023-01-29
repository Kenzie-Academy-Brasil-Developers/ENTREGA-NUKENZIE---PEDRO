export const TotalValue = ({ totalMoney }) => {
  return (
    <div className="total__value">
      <div className="total__value--text">
        <h4>Valor total: </h4>
        <p>O valor se refere ao saldo</p>
      </div>
      <h3>$ {totalMoney}</h3>
    </div>
  );
};
