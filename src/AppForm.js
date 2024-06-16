import './App.css';
import { useState } from 'react';

function AppForm(props) {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    // });
    const [inputs, setInputs] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comment, setComment] = useState("");
    const [currency, setcurrency] = useState("");
    const [topping, setTopping] = useState("Medium");
    const [hooks, setHooks] = useState("");
    const [checked, setChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
    };
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;

    //     setFormData((prevFormData) => ({
    //         ...prevFormData,
    //         [name]: value,
    //     }));
    // }; 

    const onhandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name == 'status') {
            setChecked(!checked);
            alert("status"); // + checked);

        }
        setInputs(values => ({ ...values, [name]: value }))
    }
    const onhandleSubmit = (event) => {
        event.preventDefault();
        let text = "";
        for (let x in inputs) {
            text += inputs[x] + " ";
        }
        alert(Object.values(inputs) + " ");
    }
    const onOptionChange = event => {
        alert(event.target.value);
        const name = event.target.name;
        const value = event.target.value;
       // setTopping(e.target.value)
       setInputs(values => ({ ...values, [name]: value }))
    }
    return (
        <div className="App">
            <form onSubmit={onhandleSubmit}>
                <label>  name:
                    <input type="text" name="name" value={inputs.name} onChange={onhandleChange} />
                </label><br />
                <label>  email:
                    <input type="text" name="email" value={inputs.email} onChange={onhandleChange} />
                    {/* // onChange={(e) => setEmail(e.target.value)} /> */}
                </label><br />
                <label>  password:
                    <input type="text" name="password" value={inputs.password} onChange={onhandleChange} />
                    {/* //  onChange={(e) => setPassword(e.target.value)} /> */}
                </label><br />
                <label>  Textarea :
                    <textarea name="comment" value={inputs.comment} onChange={onhandleChange} />
                </label><br />
                <label>
                    Favorite currency
                    <select name="currency" onChange={onhandleChange} value={inputs.currency}>
                        <option value="">Please select one</option>
                        <option value="usd">USD</option>
                        <option value="ca">CA</option>
                        <option value="sg">SG</option>
                        <option value="yen">Jan</option>
                    </select>
                </label><br />
                {/* <label>
                    Status
                    <input type="radio" name="status" checked={checked} onChange={onhandleChange} />
                </label><br /> */}
                <h3>Select Pizza Size</h3>

                <input type="radio" name="topping" value="Regular"

                    checked={inputs.topping === "Regular"}
                    onChange={onOptionChange}
                />
                <label htmlFor="regular">Regular</label>

                <input type="radio" name="topping" value="Medium"

                       checked={inputs.topping === "Medium"}
                    onChange={onOptionChange}
                />
                <label htmlFor="medium">Medium</label>

                <input type="radio" name="topping" value="Large"

                     checked={inputs.topping === "Large"}
                    onChange={onOptionChange}
                />
                <label htmlFor="large">Large</label>
                {/* <label>
                    With hooks
                    <input type="checkbox" name="hooks" />
                </label><br /> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}


export default AppForm;