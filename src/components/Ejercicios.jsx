import PropTypes from "prop-types";

const Ejercicios = ({nombre, repeticiones, cantidad}) => {

    return(
        <div className="card">
            <div className="img">
                
            </div>
            <div className="content"> 
                <h3>{nombre}</h3>
                <p>Cantidad de repeticiones: {repeticiones}</p>
                <p>Cantidad: {cantidad}</p>
            </div>
        </div>
       
    );
};

Ejercicios.propTypes = {
    nombre : PropTypes.string.isRequired,
    repeticiones: PropTypes.string.isRequired,
    cantidad: PropTypes.string.isRequired
};

 export default Ejercicios;