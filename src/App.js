import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CestaDeCompras from './components/CestaDeCompras';
import Home from './components/Home';
import { createServer } from "miragejs"
import CartProvider from './context/productsContext';

createServer({
  routes() {

    this.get("/api/products", () => {
      return {
          products: [
            {
                "date": "Mon Oct 31 2016 00:00:00 GMT-0700 (PDT)", 
                "description": "BOMBRIL", 
                "id": 1, 
                "image": "https://conteudo.imguol.com.br/c/noticias/2013/10/11/bombril---esponja-de-aco-1381506271857_615x470.jpg",
                "price": 1.69
            },
            {
                "id": 2,
                "description": "Qualy",
                "image":"https://http2.mlstatic.com/banco-de-imagens-de-produtos-para-supermercado-17500-itens-D_NQ_NP_265615-MLB25288619255_012017-F.jpg",
                "price": 5.29,
                "date": "Sun Oct 30 2016 00:00:00 GMT-0700 (PDT)"
            },
            {
                "id": 3,
                "description": "Nescau",
                "image":"https://http2.mlstatic.com/relaco-de-produtos-c-eanncmfotos-16-milhoes-de-produtos-D_NQ_NP_808515-MLB25247269155_122016-F.jpg",
                "price": 10.25,
                "date": "Sat Oct 29 2016 00:00:00 GMT-0700 (PDT)"
              },
              {
                "id": 4,
                "description": "Leite Italac",
                "image":"https://static.carrefour.com.br/medias/sys_master/images/images/h75/hcb/h00/h00/9688613912606.jpg",
                "price": 11.3,
                "date": "Sat Oct 02 2016 00:00:00 GMT-0700 (PDT)"
              },
              {
                "id": 5,
                "description": "Presunto Sadia",
                "image":"https://superprix.vteximg.com.br/arquivos/ids/181326-600-600/19631.jpg?v=637105565332470000",
                "price": 100.02,
                "date": "Sat Oct 02 2016 00:00:00 GMT-0700 (PDT)"
              }
            
        ]
      }
    })
  },
  })

export default function App(){
    const [products, setProducts] = useState([]);

    const modalizeRef = useRef(null);

    function onOpen(){
        modalizeRef.current?.open(); 
    }

    function onClose(){
      if (modalizeRef.current) {
        modalizeRef.current.close();
      }
    };

    useEffect(() => {
      async function fetchProducts(){
        try {
          await fetch("/api/products")
                .then((response) => response.json())
                .then((json) => setProducts(json.products))
        } catch (error) {
          console.log(error)   
        }
      }

      fetchProducts();
    },[]);

    return(
      
        <View style={styles.container}>
          <CartProvider>
          <Home onOpen={onOpen} products={products}/>

          <CestaDeCompras onClose={onClose} modalizeRef={modalizeRef}/>
          </CartProvider>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  close:{
    position: 'absolute',
    marginLeft: 370,
   
  }
});