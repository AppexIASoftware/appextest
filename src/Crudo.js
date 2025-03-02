import React, {useState, useEffect} from 'react';

function Crud(){
    const [producto, setProducto] = useState({id:"", nombre:""}); 
    const [productos, setProductos] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [isEdit, setEdit] = useState(false);

    useEffect(()=>{
        
        fetch("http://localhost:8080/api/products",{
            method:"GET"
        }).then((res) => res.json())  // Llamamos a res.json() correctamente
        .then((data)=>setProductos(data)) 

    },[]);

    function handleNombre(e){
        setProducto({...producto,nombre:e.target.value});
    }

    function addProducto(){
        let metodo = isEdit?"PUT":"POST";

        fetch("http://localhost:8080/api/products",{
            method : metodo,
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(producto)         })
        .then(res=>res.json())
        .then((data)=>{
            setProductos(data);
            setProducto({id:"",nombre:""});
            setEdit(false);
            //setRefresh(true);
        });
    }

    function editProducto(productoSel){
        setEdit(true);
        setProducto(productoSel);
    }

    function deleteProducto(productoSel){
        fetch("http://localhost:8080/api/products",{
            method:"DELETE",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(productoSel)
        })
        .then(res=>res.json())
        .then((data)=>{
            let listProductos=productos.filter((p)=>p.id!=data.id);
            setProductos(listProductos);
            console.log(listProductos);
        });
    }

    return(
        <div>
        <table>
            <tbody>
            {productos.map((element,index) => {
                return <tr key={index}>
                        <td>{element.nombre}</td>
                        <td><button onClick={()=>editProducto(element)}>Editar</button></td>
                        <td><button onClick={()=>deleteProducto(element)}>Eliminar</button></td>
                    </tr>    
            })}
            </tbody>
        </table>
        
        
        Nombre<input onChange={handleNombre} value={producto.nombre}></input>
        <button onClick={()=>addProducto()}>{isEdit?"Editar":"Agregar"}</button>

        </div>
    );
}

export default Crud;