function ArchiveComponent() {
    return React.createElement(
        "div",
        { className: "botnav col text-right archive order-last" },
        React.createElement(
            "a",
            { "data-toggle": "collapse", href: ".arch-collapse", role: "button", "aria-expanded": "false",
                "aria-controls": "arch-collapse" },
            "Archive"
        ),
        React.createElement(
            "div",
            { "class": "collapse arch-collapse" },
            React.createElement(
                "a",
                { "data-toggle": "collapse", href: ".tt-one-collapse", role: "button", "aria-expanded": "false",
                    "aria-controls": "tt-one-collapse" },
                "2021"
            ),
            React.createElement(
                "div",
                { "class": "collapse tt-one-collapse" },
                React.createElement(
                    "a",
                    { "data-toggle": "collapse", href: ".tt-one-oct", role: "button", "aria-expanded": "false",
                        "aria-controls": "tt-one-oct" },
                    "October"
                ),
                React.createElement(
                    "div",
                    { "class": "collapse tt-one-oct" },
                    React.createElement(
                        "ul",
                        null,
                        React.createElement(
                            "li",
                            null,
                            React.createElement(
                                "a",
                                { href: "#" },
                                "Decisions, Decisions"
                            )
                        )
                    )
                )
            )
        )
    );
}

ReactDOM.render(React.createElement(
    React.StrictMode,
    null,
    React.createElement(ArchiveComponent, null)
), document.querySelector('#ArchiveContainer'));