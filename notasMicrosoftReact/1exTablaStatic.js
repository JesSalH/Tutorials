
// Este componente es una fila del HEADER de la tabla
class ProductCategoryRow extends React.Component {
    render() {
      //recibe un parametro category (que sera el nombre de la categoria)
      const category = this.props.category;
      return (
        <tr>
          <th colSpan="2">
            {category}
          </th>
        </tr>
      );
    }
  }
  


  
  // este componente es una fila estandar
  class ProductRow extends React.Component {
    render() {
      //recibe como parametro un objeto producto

      const product = this.props.product;
      //esto es un poco cabron de escribir porque mezcla guardar la constante name con una ternaria
        // si el producto esta stocked (true) entonces en la variable name guarda solo su nombre
        //si el producto no esta stocket en la variable guarda un puto span en rojo con el nombre del producto
      const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
          {product.name}
        </span>;
  
      return (
        // devuelve una fila con el nombre y precio del producto
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
      );
    }
  }
  

// En general este tutorial es bastante cabron porque esta metiendo
  class ProductTable extends React.Component {

    render() {
      //array
      const rows = [];
      let lastCategory = null;
      

      //recibe el array de productos y crea una tabla con 'el
      // mas que una tabla lo que hace es rellenar el array rows
      //el array rows esta hecho de componentes tipo fila header o fila normal
      this.props.products.forEach((product) => 
      {

            // si la fila tiene una nueva category la mete como fila header
            if (product.category !== lastCategory) {
              rows.push(
                <ProductCategoryRow
                  category={product.category}
                  key={product.category} />
              );

            }

            // mete todos las filas
            rows.push(
              <ProductRow
                product={product}
                key={product.name} />
            );

            lastCategory = product.category;

      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          {/* finalmente mete en el table body el array rows y la tabla queda rellenada  */}
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }
  


//   Componente searchbar sin la l'ogica
  class SearchBar extends React.Component {
    render() {
      return (
        <form>
            {/* textbox */}
          <input type="text" placeholder="Search..." />
          <p>
              {/* checkbox */}
            <input type="checkbox" />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
  }
  


//   Este componente renderiza 2 componentes: Una SearchBar y un ProductTable (al que se le pasa un objeto products)
  class FilterableProductTable extends React.Component {
    render() {
      return (
        <div>
          <SearchBar />
          <ProductTable products={this.props.products} />
        </div>
      );
    }
  }
  
  

//   Array de productos
  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];
   


//   Renderizamos el componente FilterableProductTable en un elemento llamado container
  ReactDOM.render(
    <FilterableProductTable products={PRODUCTS} />,
    document.getElementById('container')
  );