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
        setInputs(values => ({ ...values, [name]: value }))
    }
    const onhandleSubmit = (event) => {
        event.preventDefault();
        let text="";
        for(let x in inputs){
            text += inputs[x] + " ";
        }
        alert(Object.values(inputs) + " " );       
      
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
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}


export default AppForm;