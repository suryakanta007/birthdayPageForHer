import React from "https://esm.sh/react@19.1.0"
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"


const Chai = (props)=>{
    return React.createElement(
        "div",
        {},
        [
            React.createElement(
                "h1",
                {},
                props.name
            ),
            React.createElement(
                "p",
                {},
                props.cost
            )
        ]
    )
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [React.createElement(
            "h1",
            {
                class: "Main",
                id: "1st"
            },
            "We are operation  the react 18 version."
        ),
        React.createElement(Chai,{name:"Green Tea",cost:"1000"}),
        React.createElement(Chai,{name:"Gold Tea",cost:"7000"}),
        React.createElement(Chai,{name:"Masala Tea",cost:"600"})
        ]
    )
}

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));