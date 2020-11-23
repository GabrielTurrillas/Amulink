import React,{ useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

const PruebaComponentes = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    const mostrarFecha = date => {
        const dia = date.getDate()
        const mes = date.getMonth()+1
        const año = date.getFullYear()
        const dateString = dia+'/'+mes+'/'+año
        console.log(dateString)
    } 
    return (
        <div className='container'>
            <DatePicker 
                selected={selectedDate} 
                onChange={date => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy'
            />
            <br/><br/>
            <input type='button' value='Mostrar Fecha' className='btn btn-primary' onClick={() => mostrarFecha(selectedDate)}/>
        </div>
    );
}

export default PruebaComponentes;
