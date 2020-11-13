import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';

const SelectTerapeuta = () => {
    const [terapeuta, setTerapeuta] = useState()

    useEffect(() => {
        axios.get()
    }, [])

    return (
        <Fragment>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Terapeuta</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
        </Fragment>
    );
}

export default SelectTerapeuta;
