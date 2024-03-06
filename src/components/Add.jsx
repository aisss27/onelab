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
        if(!name || !surname || !phone) return
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

const repo = {
    onSave() {
        const promise = new Promise((resolve, reject) => {
            try{
                if(!name || !surname || !phone) return
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
                resolve();
            }catch(error){
                reject(error)
            }
        })
    return promise;
    }
}

const onSaveHandler = () => {
        repo.onSave()
            .then(() => alert('User Added: ' + name))
            .catch((error) => alert('Invalid user ' + error))
}


    return (

        <div className='form'>
            <div className="form-content">
                <h2>FORM</h2>
                <input value={name} placeholder='name' onChange={handleNameChange} />
                <input value={surname} placeholder='surname' onChange={handleSurnameChange} />
                <input value={phone} placeholder='phone number' onChange={handlePhoneChange} />
                <button onClick={onSaveHandler}>Submit</button>
            </div>
        </div>
    )
}