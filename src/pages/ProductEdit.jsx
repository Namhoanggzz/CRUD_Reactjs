

import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";


function ProductEdit() {
    const nav = useNavigate();
    const {id} = useParams();
    console.log(id);
    
    const {
        register,
        handleSubmit,
         formState: {errors},
         reset
        
    } = useForm();

    async function onSubmit(data) {
        try {
            await axios.put(`http://localhost:3000/products/${id}`, data);
            toast.success("Thành công");
            nav("/product/list");
        } catch (error) {
            toast.error("Không thành công");
        }
    }



    async function getProductDetail(id) {
        try {
          const {data} =  await axios.get(`http://localhost:3000/products/${id}`);
          reset(data); 
          setProducts(data);

        } catch (error) {
            toast.error("Error");   
        }
    }

    //useEffect

    useEffect(() => {
        getProductDetail(id);
    }, [id]);



    

    

    return ( 
        <div>
            <h1>ProductEdit</h1>
 <form onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    {...register("name", {
        required:"name required",
       
    })} 
    />
    
    <small className="text-danger">{errors.name?.message} </small>
   
  </div>



  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Image</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    {...register("image", {
        required:"image required",
       
    })} 
    />
    
    <small className="text-danger">{errors.image?.message} </small>
   
  </div>
  


  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
    <input type="number" className="form-control" id="exampleInputPassword1" 
     {...register("price", {
        required:"price required",
        min: {
            value:1,
            message:"min > 1",
        },
    })}
     />
    <small className="text-danger">{errors.password?.message} </small>
  </div>


  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
        Category
    </label>
    <select
     {...register("category", {
        required:"category required",
       
    })}  
    className="form-select" aria-label="Default select example">
  <option value="DELL">DELL</option>
  <option value="HP">HP</option>
  
</select>
   
   </div>



  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    );
}

export default ProductEdit;
