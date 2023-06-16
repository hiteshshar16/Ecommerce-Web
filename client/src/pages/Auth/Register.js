import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import { useNavigate, useNavigation } from 'react-router-dom'
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";

const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [answer, setAnswer] = useState("")
    const navigate = useNavigate()

    // form function
    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post(`/api/v1/auth/register`,{name,email,password,phone,address,answer})
        if(res && res.data.success){
            toast.success(res.data.message)
            navigate('/login')
        }else{
            toast.error(res.data.message)
        }
        } 
        catch (error) {
            console.log(error);
            toast.error('somthing went wrong')
        }
    }

  return (
    <Layout title={"Ecommerce app - Register"} >
        <div className="form-container">
            <form onSubmit={handleSubmit}>
            <h4 className='title'>Register Form</h4>
                <div className="mb-3">
                    {/* <label htmlFor="exampleInputName" className="form-label">Name</label> */}
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputName" placeholder='Enter your Name' required/>
                </div>
                <div className="mb-3">
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email' required/>
                </div>
                <div className="mb-3">
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter your Password' required/>
                </div>
                <div className="mb-3">
                    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} className="form-control" id="exampleInputPhone" placeholder='Enter your Phone number' required/>
                </div>
                <div className="mb-3">
                    <input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" id="exampleInputAddress" placeholder='Enter your Address' required/>
                </div>
                <div className="mb-3">
                    <input type="password" value={answer} onChange={(e)=>setAnswer(e.target.value)} className="form-control" id="exampleInputAnswer" placeholder='what is your best friesnd name' required/>
                </div>



                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    </Layout>
  )
}

export default Register