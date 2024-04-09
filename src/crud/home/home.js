import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useSelector } from 'react-redux'

function Home() {
    const users = useSelector((state) => state.users)
    console .log(users)
  return (
    <div className ="container">
        <h2>crud app with json server</h2>
        <Link to = '/create' className='btn btn-success my-3'>Add +</Link>
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
                            <Link to = "/delete" className='btn btn-sm btn-danger ms-2'>Delete</Link>
                        </td>
                    </tr>

                ))
               }
            </tbody>

        </table>

      
    </div>
  )
}

export default Home
