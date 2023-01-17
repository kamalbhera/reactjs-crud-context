// @flow 
import React, { useContext, useState } from 'react';
import { Layout } from './Layout';
import { EmployeeContext } from "../context/Context";
import { useNavigate } from 'react-router-dom'
export const CreateModal = (props) => {
    const navigate = useNavigate();
    const { setEmployee, employee }=useContext(EmployeeContext);
    const [name, setEmployeeName] = useState();
    const [email, setEmail] = useState(false);
    const [phone, setPhone] = useState('');
    
    const addEmployee = (e) => {
        e.preventDefault()
        const data = { name, email, phone}
        setEmployee([...employee,data]);
        navigate('/')
    }
    return (
        <Layout>
            <form onSubmit={addEmployee}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Name</label>
                        <input type="text" className="form-control" onChange={(e) => setEmployeeName(e.target.value)} id="inputPassword4" placeholder="Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="inputEmail4" placeholder="Email" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Phone</label>
                    <input type="text" className="form-control" onChange={(e) => setPhone(e.target.value)} id="inputAddress" placeholder="1234" />
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </Layout>
    );
};