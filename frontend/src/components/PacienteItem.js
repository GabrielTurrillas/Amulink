import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class PacienteItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
        }
    }
    render() {
        const { nombre } = this.props.paciente;
        return (
            <div style={this.getStyle()}>
                <p>{ nombre }</p>
                <button style = {btnStyle}>Ver paciente</button>
            </div>
        )
    }
}

PacienteItem.propTypes = {
    paciente: PropTypes.object.isRequired
}

const btnStyle = {
    cursor:'pointer',
    float: 'right'
}


export default PacienteItem
