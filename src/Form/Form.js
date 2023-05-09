import { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import classes from './Form.module.scss'

import background from './background.jpg'

export function Form() {
    const [tower, setTower] = useState();
    const [floor, setFloor] = useState();
    const [meetingRoom, setMeetingRoom] = useState();
    const [date, setDate] = useState();
    const [comment, setComment] = useState();
    const [arror, setArror] = useState(false);
    
    const handleSubmit  = (event) => {
        event.preventDefault();

        if (tower && floor && meetingRoom && date) {
            const newdate = new Date(date)
            const formattedDate = `${newdate.getDate()}/${newdate.getMonth() + 1}/${newdate.getFullYear()} ${newdate.getHours()}:${newdate.getMinutes()}`;
            const formData = { tower, floor, meetingRoom, formattedDate, comment };
            const jsonData = JSON.stringify(formData); 

            console.log(jsonData);
            setArror(false);
        } else {
            setArror(true);
        }
    };

    const handleClear = () => {
        setTower("")
        setFloor("")
        setMeetingRoom("")
        setDate("")
        setComment("")
    }
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <img src={background} alt="background" />
            <h2>Бронирование переговорной</h2>
            <label className={classes.form__label}>
                Выбор башни
                <select
                    className={classes.form__select}
                    value={tower}
                    onChange={(e) => setTower(e.target.value)}
                >
                    <option value=""></option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                </select>
            </label>
            <label className={classes.form__label}>
                Выбор этажа
                <select 
                    className={classes.form__select}
                    value={floor}
                    onChange={(e) => setFloor(e.target.value)}
                >
                    <option value=""></option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                </select>
            </label>
            <label className={classes.form__label}>
                Выбор переговорной комнаты
                <select
                    className={classes.form__select} 
                    value={meetingRoom}
                    onChange={(e) => setMeetingRoom(e.target.value)}
                >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </label>
            <label className={classes.form__label}>
                Выбор даты и времени
                <div>
                    <DatePicker
                        className={classes.form__date}
                        showIcon
                        selected={date}
                        onChange={(date) => setDate(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="dd/MM/yyyy HH:mm"
                    />
                </div>
                
            </label>
             
            <label className={classes.form__label}>
                Ваш коментарий
                <textarea
                    className={classes.form__textarea}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
            </label>
            {arror ? <div className={classes.form__error}>Заполните все поля</div> : null}
            <div className={classes.form__buttons}>
                <button className={classes.form__submit} type="submit">Отправить</button>
                <button className={classes.form__clear} type="button" onClick={handleClear}>Очистить форму</button>
            </div>
        </form>
    )
}