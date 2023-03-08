import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const navigate = useNavigate();
    const register = async (e) => {
        e.preventDefault();
        let response = await fetch("http://localhost:8080/api/auth/register", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({email, firstName, lastName, password, password2}),
        });
        let data = await response.json();
        if (response.status === 200) {
            console.log(data);
            navigate("/login");
        } else {
            alert('Registration failed', data);
        }
    }

    return (
        <div>
            <div>
                <h1>register</h1>
                <p>This is the register page</p>
            </div>
            <div>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={({target})=>setEmail(target.value)} />
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" value={firstName} onChange={({target})=>setFirstName(target.value)}/>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastNmae" id="lastName" value={lastName} onChange={({target})=>setLastName(target.value)}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={({target})=>setPassword(target.value)}/>
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name="password2" id="password2" value={password2} onChange={({target})=>setPassword2(target.value)}/>
                    <button type="submit" onClick={register}>Register</button>
                </form>
                <p>Already have an account? <Link to="/login">Login!</Link></p>
            </div>
        </div>
    );
};

export default RegisterPage;