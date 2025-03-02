import React, {useState, useEffect} from 'react'
import { FaBeer } from 'react-icons/fa';

function Boton(){
    
    const [seguir,setSeguir] = useState(false);
    
    function handleSeguir(){
        setSeguir(!seguir);
    }

return(
    <button onClick={()=>handleSeguir()}>
              <FaBeer /> {seguir?"Seguir":"Dejar de seguir"}
    </button>
);
}

export default Boton;