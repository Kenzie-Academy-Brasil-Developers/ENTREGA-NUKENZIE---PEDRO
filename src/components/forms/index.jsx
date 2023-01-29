export const Form = ({ submit, format, setFormat }) => {
  return (
    <form className="form__section" onSubmit={submit}>
      <label htmlFor="input__text">Descrição</label>
      <input
        id="input__text"
        type="text"
        placeholder="Digite aqui sua descrição"
        value={format.description}
        onChange={(event) =>
          setFormat({
            ...format,
            description: event.target.value,
          })
        }
      />
      <span className="example">Ex: Compra de roupas</span>
      <div className="div__values">
        <div className="column">
          <label htmlFor="input__number">Valor</label>
          <input
            id="input__number"
            type="number"
            placeholder="1"
            value={format.value}
            onChange={(event) =>
              setFormat({
                ...format,
                value: Number(event.target.value),
              })
            }
          />
        </div>
        <div className="column">
          <label htmlFor="select__type">Tipo de valor</label>
          <select
            name="type"
            id="select__type"
            type="text"
            value={format.type}
            onChange={(event) =>
              setFormat({
                ...format,
                type: event.target.value,
              })
            }
          >
            <option value="">Selecione</option>
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Depesa</option>
          </select>
        </div>
      </div>
      <button className="button" type="submit">
        Inserir valor
      </button>
    </form>
  );
};
