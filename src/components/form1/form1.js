import './form1.css';
import {useState} from 'react';

function Form1() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    
    return (
        <div className="block">
            <h2>write data</h2>
            <form className="form">
                <label>Имя</label>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <label>Фамилия</label>
                <input type="text" value={surname} onChange={(e)=>{setSurname(e.target.value)}} />
                <label>возраст</label>
                <input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                <input type="submit" />
            </form>
            <p>имя: {name}</p>
            <p>фамилия: {surname}</p>
            <p>возраст: {age}</p>
        </div>
    )
}

export default Form1;