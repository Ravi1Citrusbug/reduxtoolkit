import React from 'react'
import { Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch,useSelector } from 'react-redux'
import { deleteUser } from '../usereducer'

function Home() {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const handleDelete =(id)=>{
        dispatch(deleteUser({id:id}));
        
    }
  return (
    <div className ="container">
        <h2>crud app with json server (redux toolkit)</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>E-mail</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
               {
                users.map((user,index)=>(
                    <tr key = {index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to = { `/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                            <Link className='btn btn-sm btn-danger ms-2' onClick={ ()=> handleDelete(user.id) }>Delete</Link>
                        </td>
                    </tr>

                ))
               }
            </tbody>

        </table>
        <Link to = '/create' className='btn btn-success my-3'>Add +</Link>  
    </div>
  )
}

export default Home
