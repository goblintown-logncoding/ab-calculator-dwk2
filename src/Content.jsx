import { useRef, useState } from "react";

const Content = () => {
    const inputRefA = useRef();
    const inputRefB = useRef();
    const [state, setState] = useState();
    const [operationState, setOperationState] = useState();

    const handleCalculate = () => {
        const valueA = +inputRefA.current.value;
        const valueB = +inputRefB.current.value;
        // Todo: add branch condition
        setState(valueA + valueB);
    }

    const handleOperationButtonClick = (operation) => {
        setOperationState(operation);
    }

    return (
        <div>
            <div>
                <button onClick={() => handleOperationButtonClick("+")}>Add</button>
                <button onClick={() => handleOperationButtonClick("-")}>Subtract</button>
                <button onClick={() => handleOperationButtonClick("*")}>Multiply</button>
                <button onClick={() => handleOperationButtonClick("/")}>Division</button>
            </div>
            <input ref={inputRefA} />
            {operationState}
            <input ref={inputRefB} />
            =
            {state}
            <div>
                <button onClick={handleCalculate}>Calculate</button>
            </div>
        </div>
    );
}

export default Content;