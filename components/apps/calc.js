import React, { Component } from "react";

export class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            display: "",
        };
    }

    handleButtonClick = (value) => {
        if (value === "C") {
            this.setState({ display: "" }); // Clear screen
        } else if (value === "=") {
            this.setState({ display: "60065" }); // Always show 60065 when = is pressed
        } else {
            this.setState((prevState) => ({
                display: prevState.display + value,
            }));
        }
    };

    render() {
        const buttons = [
            "7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", "C", "=", "+"
        ];

        return (
            <div className="w-full h-full flex flex-col bg-ub-cool-grey text-white select-none">
                <div className="flex items-center justify-between w-full bg-ub-warm-grey bg-opacity-40 text-sm px-4 py-2">
                    <span className="font-bold">Calculator</span>
                </div>

                <div className="flex flex-col items-center justify-center flex-grow p-4">
                    <div className="bg-black text-white text-2xl p-4 w-64 text-right rounded h-12 flex items-center justify-end">
                        {this.state.display || "0"}
                    </div>
                    <div className="grid grid-cols-4 gap-2 mt-4">
                        {buttons.map((btn, index) => (
                            <button
                                key={index}
                                onClick={() => this.handleButtonClick(btn)}
                                className="bg-gray-700 hover:bg-gray-600 px-6 py-4 rounded text-lg font-bold text-white w-16 h-16 flex items-center justify-center"
                            >
                                {btn}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;

export const displayCalculator = () => {
    return <Calculator />;
};
