const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement(
            "h1",
            {class:"Main",
              id:"1st"
            },
            "We are operation  the react 18 version."
        )
    )
}

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));