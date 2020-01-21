import React , {Component} from 'react';

class List extends Component{
    constructor(props){
        super(props);
        this.state ={
            products: []
        }
    }
    addProduct = () => {

        this.state.products.push(this.state.pData);
        console.log(this.state.products);
        this.forceUpdate()
      }

      saveProduct = (e) => {
          this.setState({pData:e.target.value});
      }
    render(){
        var products = this.state.products.map((el,i) => {
            return(
                <label key={i}> 
                <input type="checkbox" /> 
                {el}
                <span id="closeIcon"> X </span> 
                </label>
         ) });
          

        return( 
    <div> 
    <input type="text"  placeholder="ADD PRODUCT.." onChange={this.saveProduct}/>
    
    <button onClick={this.addProduct}> ADD </button>
    {products}
    </div>
        )}
}

export default List;