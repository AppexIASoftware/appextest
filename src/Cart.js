import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react'

const MyCard = () => {

    const [cart, setCart] = useState({name:"",image:"",email:""});

    useEffect(()=>{
            fetch("https://randomuser.me/api/",{
                method:"GET"
            }).then((res) => res.json())  // Llamamos a res.json() correctamente
            .then((data)=>{
                let newCart = {name:data.results[0].name.first,image:data.results[0].picture.medium,email:data.results[0].email}
                setCart(newCart);
            }) 
        },[]);

    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={cart.image} class="card-img-top" alt="imagenCart"/>
        <div className="card-body">
          <h5 className="card-title">{cart.name}</h5>
          <p className="card-text">{cart.email}</p>
          <a href="#" className="btn btn-primary">
            Más info etc
          </a>
        </div>
      </div>
    );
  };
  
  export default MyCard;
  