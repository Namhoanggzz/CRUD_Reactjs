

import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


function Login() {
    const nav = useNavigate()
    const {
        register,
        handleSubmit, formState: {errors},
        
    } = useForm();

    async function onSubmit(values) {
    
        try {
           const {data} =  await axios.post("http://localhost:3000/login", values);
            toast.success("Thành công");
            console.log(data);
            localStorage.setItem("token", data.accessToken);
            nav("/product/list");

        } catch (error) {
            toast.error("Không thành công");
            
        }
        
    }

    return ( 
        <div>
            <h1>Login</h1>
 <form onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    {...register("email", {
        required:"email required",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          },
    })} 
    />
    
    <small className="text-danger">{errors.email?.message} </small>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" 
     {...register("password", {
        required:"password required",
        minLength: {
            value:8,
            message:"min 8 ký tự",
        },  
    })}
     />
    <small className="text-danger">{errors.password?.message} </small>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
        </div>
    );
}

export default Login;