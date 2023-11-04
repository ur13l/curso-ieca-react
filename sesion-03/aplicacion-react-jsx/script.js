const root = ReactDOM.createRoot(document.getElementById("root"));
const items = [];

const addItem = () => {
  const text = document.getElementById("input").value;
  items.push({
    completed: false,
    text: text,
  });
  render();
};

const changeStatus = (item) => {
  item.completed = !item.completed;
  render();
};

const deleteItem = (item) => {
  const index = items.indexOf(item);
  items.splice(index, 1);
  render();
};

const render = () => {
  const h1 = React.createElement(
    "h1",
    {
      id: "title",
      className: "x-1",
      style: {
        color: "red",
        backgroundColor: "blue",
        borderRadius: "5px",
      },
    },
    "Mi primera aplicación React"
  );

  const form = React.createElement("div", null, [
    React.createElement(
      "input",
      { id: "input", type: "text", placeholder: "Nueva tarea", key: "input" },
      null
    ),
    React.createElement(
      "button",
      { id: "button", onClick: addItem, key: "button" },
      "Agregar"
    ),
  ]);

  const list = React.createElement(
    "ul",
    null,
    items.map((item) => {
      return React.createElement("li", { key: item.text }, [
        React.createElement(
          "input",
          {
            type: "checkbox",
            checked: item.completed,
            onChange: () => {
              changeStatus(item);
            },
          },
          null
        ),
        React.createElement(
          "span",
          {
            style: {
              textDecoration: item.completed ? "line-through" : "none",
            },
          },
          item.text
        ),
        React.createElement(
          "button",
          {
            onClick: () => {
              deleteItem(item);
            },
          },
          "Eliminar"
        ),
      ]);
    })
  );

  root.render([h1, form, list]);
};

render();
