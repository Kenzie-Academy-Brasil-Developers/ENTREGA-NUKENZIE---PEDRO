import { useState } from "react";
import "./App.css";
import "/src/components/button/style.css";
import { Dashboard } from "./components/dashboard";
import { StartPage } from "./components/startPage";

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
    setListTransactions([...listTransactions, format]);
    setFormat({
      description: "",
      type: "",
      value: "",
    });
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
