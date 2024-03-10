import {useState} from "react";
import './style.css'
import {useDispatch} from "react-redux";
import {add} from "../redux/slices/listSlice";

export const AddRedux = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch()



    const handleNameChange = (event) => {
        setName(event.currentTarget.value)
    }


    const handleSurnameChange = (event) => {
        setSurname(event.currentTarget.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.currentTarget.value);
    }

    const onSave = () => {
        dispatch(add({ name, surname, phone }))
    }


    return (

        <div className='form'>
            <div className="form-content">
                <h2>FORM</h2>
                <input value={name} placeholder='name' onChange={handleNameChange}/>
                <input value={surname} placeholder='surname' onChange={handleSurnameChange}/>
                <input value={phone} placeholder='phone number' onChange={handlePhoneChange}/>
                <button onClick={onSave}>Submit</button>
            </div>
        </div>
    )
}