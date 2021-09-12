import { useReducer, useState } from "react";
const reducer = (state,action) => {
    switch (action.type) {
        case "DEPOSIT":
            return state + action.payload
            break;
        case "REDRAW":
            return state - action.payload
            break;
        default:
            return state
    }
}



const UseReducerComponent = () => {
    const deposit = (amount) => {
        dispatch({
            type: "DEPOSIT",
            payload: amount,
        });
    }
    const redraw = (amount) => {
        dispatch({
        type: "REDRAW",
        payload: amount,
        });
           
    
        
    }
    const [amount, dispatch] = useReducer(reducer, 0);
    const [account, setAccount] = useState("deposit");
    const [balance, setBalance] = useState(0);
    const [error, setError] = useState('');
    const validateInput = (e) => {
        if (isNaN(e.target.value) || e.target.value === "") {
            setError("Enter numeric values only");
            e.stopPropagation();
            setBalance(0);
            return false
            
        } else {
            setBalance(parseInt(e.target.value));
            setError("");
            return true
        }
    }
    return (
        <div>
            <h1>{amount}</h1>
            <select onChange={(e) => setAccount(e.target.value)}>
                <option value="deposit">Deposit</option>
                <option value="redraw">Redraw</option>
            </select>
            
            {
                account === "deposit" && <button onClick={() => deposit(balance)}>Deposit</button>
            }
            {
                account === "redraw" && <button onClick={() => redraw(balance)}>Redraw</button>
            }
            <input type="text" placeholder="Enter amount" onChange={(e) => validateInput(e)}/>
            <h1>{balance}</h1>
            <h2>{ error}</h2>
        </div>
     );
}
 
export default UseReducerComponent;