import './App.css';
import { useState } from 'react';

function AppMap(props) {
    const numbers = [1, 3, 5, 10];
    const [inputValue, setInputValue] = useState('');

    const listNumbers = numbers.map((item) => {
        return <li key={item}>{item}</li>
    });
    const onInputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);
    }
    return (
        <div className="App">
            {props.name}
            {listNumbers}
            <form >
                <label>
                    User name:
                    <input type="text" name="username" value ={inputValue} onChange={onInputChange} />
                </label>
                <input type="submit" value="Submit" />
                <p>enter input value: {inputValue}</p>
            </form>
        </div>
    );
}


export default AppMap;