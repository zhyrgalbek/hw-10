import './alert.css';
import { useState } from 'react';
import Form from './form';

function Alert() {
    const [obj, setObj] = useState({});

    function addObj(getObj) {
        setObj(getObj);
    }
    
    return (
        <div className='block'>
            <Form addObj={addObj} />
            <div className="block-vyvod">
                <h2>Данные пользователя</h2>
                <div className='block-vyvod__item'>Имя: {obj.name}</div>
                <div className='block-vyvod__item'>Фамилия: {obj.surname}</div>
                <div className='block-vyvod__item'>возраст: {obj.age}</div>
            </div>
        </div>
    )
}

export default Alert;