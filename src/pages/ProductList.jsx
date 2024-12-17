

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function ProductList () {
    // state products
    const [products, setProducts] = useState([]);

    //get ProductList
    async function getProductList() {
        try {
          const {data} =  await axios.get("http://localhost:3000/products");
        //   console.log(data);
          setProducts(data);
          
        } catch (error) {
            toast.error("Error");   
        }
    }

    //useEffect

    useEffect(() => {
        getProductList();
    }, []);



    //delete product

    async function deleteProduct(id) {
        if(confirm("Bạn có chắc muốn xóa không?")) {
            try {
             await axios.delete(`http://localhost:3000/products/${id}`);
             getProductList();
             toast.success("Xóa sản phẩm thành công");
              //   console.log(data);
                setProducts(data);
              } catch (error) {
                  toast.error("Error");   
              }   
        }
    }
    
    return (
        <div>
            <h1>ProductList</h1>
          <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Image</th>
      <th scope="col">Category</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {/* Map */}

    {products.map((product) => {
        return (
            <tr key={product.id}>
            <th scope="row">{product.id}</th>
            <td>{product.name}</td>
            <td><img src={product.image} alt="image" width={250}/>{}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>
                <button onClick={() => deleteProduct(product.id)} className="btn btn-danger">Delete</button>
           

                {/* product/edit/:id */}
                <a href={`/product/edit/${product.id}`}>
                <button className="btn btn-info">Edit</button>
                </a>
      

        
            </td>

            </tr>
        );


    })}
    
    

    
  </tbody>
</table>
     </div>
        

    );
}
export default ProductList; 