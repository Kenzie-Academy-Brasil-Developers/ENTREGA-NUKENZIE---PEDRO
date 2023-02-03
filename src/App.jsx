import { useState } from "react";
import "./App.css";
import { Dashboard } from "./components/dashboard";
import { StartPage } from "./components/startPage";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const totalMoney = listTransactions.reduce(
    (previusValue, currentValue) => previusValue + currentValue.value,
    0
  );

  const [format, setFormat] = useState({
    description: "",
    type: "",
    value: "",
  });

  const submit = (event) => {
    event.preventDefault();
    if (
      format.description !== "" &&
      format.type !== "" &&
      format.value !== ""
    ) {
      const newFormat = { ...format, id: uuidv4() };
      setListTransactions([...listTransactions, newFormat]);
      setFormat({
        description: "",
        type: "",
        value: "",
      });
      if (newFormat.type === "Despesa") {
        newFormat.value = newFormat.value * -1;
      }
    } else {
      alert("Preencha todos os campos");
    }
  };

  const [page, setPage] = useState(false);

  return (
    <div className="App">
      {page == false ? (
        <StartPage setPage={setPage} />
      ) : (
        <Dashboard
          setPage={setPage}
          submit={submit}
          format={format}
          setFormat={setFormat}
          totalMoney={totalMoney}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
    </div>
  );
}

export default App;
