import PropTypes from "prop-types";
import Button from "./Button";

const Ejercicios = ({nombre, repeticiones, cantidad}) => {

    return(
        <div className="card">
            <div className="img">
            <img src="https://i.pinimg.com/564x/85/87/4d/85874dbdafcdcbf57b3b98f6034500cf.jpg" />  
            </div>
            <div className="content"> 
                <h3>{nombre}</h3>
                <p>Cantidad de repeticiones: {repeticiones}</p>
                <p>Cantidad: {cantidad}</p>
                <Button link="https://www.youtube.com/watch?v=2ZSq1BRYwAI" />
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