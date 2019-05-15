import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';
import {Link} from 'react-router-dom';


export default class Main extends Component {

    state = {
        products: [],
        productInfo: {},
        page:1,

    }

//metodo executado assim que o componente for exibido na tela
    componentDidMount(){
        this.loadProducts();
    }

    //chamando os dados da API e setando no setState os docs 
    loadProducts = async (page = 1) =>{
        const response = await api.get(`/products?page=${page}`);

        const {docs, ...productInfo} = response.data;

        this.setState({products:docs, productInfo, page});
        
    }
// voltando a pagina
    prevPage = () => {
        const {page, productInfo} = this.state;

        if (page == 1) return;

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);

    }
// avançando a pagina
    nextPage = () => {
        const {page, productInfo} = this.state;

        if(page == productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    
    //pegando o ID do acessar que vai ser clicado 
    render(){
        return (
            <div className="product-list">
            {this.state.products.map(product => (
                //listando o titulo a descricao dos dados da API
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    
                    <Link to={`/products/${product._id}`}>Acessar</Link>

                </article>
            ))}
            <div className="actions">
                <button onClick={this.prevPage}>Anterior</button>
                <button onClick={this.nextPage}>Próximo</button>

            
            </div>
            </div>
        )
    }
}