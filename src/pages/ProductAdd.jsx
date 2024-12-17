

import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function ProductAdd() {
    const nav = useNavigate()
    const {
        register,
        handleSubmit, formState: {errors},
        
    } = useForm();

    async function onSubmit(data) {
        console.log(data);
        try {
            await axios.post("http://localhost:3000/products", data);
            toast.success("Thành công");
            nav("/product/list");
        } catch (error) {
            toast.error("Không thành công");
            
        }
        
    }

    return ( 
        <div>
            <h1>ProductAdd</h1>
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
    <small className="text-danger">{errors.price?.message} </small>
  </div>


  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
        Category
    </label>
      <select
      {...register("category", {
          required:"category required",
        
      })}   
      class="form-select" aria-label="Default select example">
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

export default ProductAdd;
