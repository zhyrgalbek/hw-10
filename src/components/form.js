import './form.css';
import { useState } from 'react';

function Form(props) {
    const [obj, setObj] = useState({
        name: '',
        surname: '',
        age: '',
    });

    function handleChangeName(e) {
        setObj((prevObj) => {
            return { ...prevObj, name: e.target.value }
        });
    }

    function handleChangeSurname(e) {
        setObj((prevObj) => {
            return { ...prevObj, surname: e.target.value }
        })
    }

    function handleChangeAge(e) {
        setObj((prevObj) => {
            return { ...prevObj, age: e.target.value }
        })
    }

    function addNewObj(e){
        e.preventDefault();
        props.addObj(obj);
        setObj({
            name: '',
            age: '',
            surname: ''
        });
    }

    return (
        <div>
            <form className='form' onSubmit={addNewObj}>
                <h2>Пишите ваши данные</h2>
                <label>Имя</label>
                <input type="text" value={obj.name} onChange={handleChangeName} />
                <label>фамилия</label>
                <input type="text" value={obj.surname} onChange={handleChangeSurname} />
                <label>возраст</label>
                <input type="number" value={obj.age} onChange={handleChangeAge} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;