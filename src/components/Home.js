

// @flow 
import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { Layout } from './Layout'
import {EmployeeContext} from "../context/Context";
export const Home = (props) => {
    const {employee, setEmployee} = useContext(EmployeeContext);
    // console.log(context);
    return (
        <div>
           <Layout>
           <main role="main" className="container">
           <Link to="/create" className="btn btn-primary">Create</Link>
           <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {employee && employee.map((item, index) =>(
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td><button onClick={e=>{
                        e.preventDefault();
                        setEmployee([...employee.splice(index ,1)]);
                    }}> Delete</button></td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
            </main>
           </Layout> 
        </div>
    );
};