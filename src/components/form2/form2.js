import '../form1/form1.css';
import {useState} from 'react';

function Form2() {
    const [User, setUser] = useState({
        name: '',
        age: '',
        surname: ''
    });

    return (
        <div className="block">
            <h2>write data</h2>
            <form className="form">
                <label>Имя</label>
                <input type="text" value={User.name} onChange={(e)=>{setUser({...User, name: e.target})}} />
                <label>Фамилия</label>
                <input type="text" value={User.surname} onChange={(e)=>{setUser({...User, surname: e.target.value})}} />
                <label>возраст</label>
                <input type="number" value={User.age} onChange={(e)=>{setUser({...User, age: e.target.value})}} />
                <input type="submit" />
            </form>
            <p>имя: {User.name}</p>
            <p>фамилия: {User.surname}</p>
            <p>возраст: {User.age}</p>
        </div>
    )
}

export default Form2;