import '../form1/form1.css';
import {useState} from 'react';

function Form3(){
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
                <input type="text" value={User.name} onChange={(e)=>{setUser((prevUser)=>{
                    return {...prevUser, name: e.target.value}
                })}} />
                <label>Фамилия</label>
                <input type="text" value={User.surname} onChange={(e)=>{setUser((prevUser)=>{
                    return {...prevUser, surname: e.target.value}
                })}} />
                <label>возраст</label>
                <input type="number" value={User.age} onChange={(e)=>{setUser((prevUser)=>{
                    return {...prevUser, age: e.target.value}
                })}} />
                <input type="submit" />
            </form>
            <p>имя: {User.name}</p>
            <p>фамилия: {User.surname}</p>
            <p>возраст: {User.age}</p>
        </div>
    )
}

export default Form3;