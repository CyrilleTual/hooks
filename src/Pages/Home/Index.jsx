import React, {useState, useEffect} from 'react';
import style from "./index.module.css";


function Home() {
    // on veut afficher des données donc 
    //on set un state pour recevoir les données
    const [datas, setDatas] = useState([])

    // on va fetch pour chercher les données 
      useEffect(() => {
        let urlReq = "https://dummyjson.com/products";
        fetch(urlReq)
          .then((res) => res.json())
          .then((datas) => setDatas(datas.products));
      }, []);

      //console.log (datas)


    return (
      <>
        <h1>Aujourd'hui notre Store vous propose: </h1>
        <ul>
          {datas.map((product, i) => (
            <li key={product.id}>
               {product.title}
            </li>
          ))}
        </ul>
      </>
    );
}

export default Home;
