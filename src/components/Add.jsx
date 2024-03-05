import {useNavigate} from "react-router-dom";
import {useState} from "react";
import './style.css'

export const Add = () => {
    const [name,setName] = useState('')
    const [surname,setSurname] = useState('')
    const [phone,setPhone] = useState('')

    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    }


    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const onSave = () => {
        if(!name && !surname && !phone) return
        let list = sessionStorage.getItem("list");
        if(!list) {
            list = [];
        } else {
            list = JSON.parse(list);
        }
        list.push({
            name,
            surname,
            phone
        })
        sessionStorage.setItem('list', JSON.stringify(list));
        navigate('/');

    }
    return (

        <div className='form'>
            <div className="form-content">
                <h2>FORM</h2>
                <input value={name} onChange={handleNameChange} />
                <input value={surname} onChange={handleSurnameChange} />
                <input value={phone} onChange={handlePhoneChange} />
                <button onClick={onSave}>Submit</button>
            </div>
        </div>
    )
}