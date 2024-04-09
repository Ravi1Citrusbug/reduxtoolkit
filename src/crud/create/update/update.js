import {React,useState} from 'react';
import { useParams }  from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
function Update() {
    const { id } = useParams();
    const users = useSelector((state)=> state.users);
    const existingUser = users.map((f)=>f.id==id);
    const {name , email } = existingUser[0];
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-50 border bg-secondary text-white p-5'>
      <h3>update user</h3>
        <form >
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" name = "name" className='form-control' value = {uname} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="text" name = "email" className='form-control'  value = {uemail} />
            </div><br />
            <button className='btn btn-info'>submit</button>
            
        </form>
    </div>
</div>
  )
}

export default Update
