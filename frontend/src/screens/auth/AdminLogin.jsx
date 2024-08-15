import React, { useState, useEffect } from 'react'
import { useAuthLoginMutation } from '../../store/services/AuthServices';
import { setAdminToken } from '../../store/reducers/AuthReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function AdminLogin() {
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState({
        email: '',
        password: ''
    })
    const handleInputs = e => {
        setLoginState({ ...loginState, [e.target.name]: e.target.value });
    }

    const [login, response] = useAuthLoginMutation();
    console.log('Response is ', response);
    const errors = response?.error?.data?.errors ? response?.error?.data?.errors : [];
    const adminLoginFun = (e) => {
        e.preventDefault();
        login(loginState)
    }

    const dispatch = useDispatch();
    useEffect(() => {
        if (response.isSuccess) {
            localStorage.setItem('admin_token', response?.data?.token);
            dispatch(setAdminToken(response?.data?.token))
            navigate('/dashboard/products')
        }
    }, [response.isSuccess])
    return (
        <div className='bg-[#f3f3f3] h-screen flex justify-center items-center'>
            <form className='bg-[#fff] p-3 w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 rounded shadow' onSubmit={adminLoginFun}>
                <h3 className='mb-4 capitalize font-semibold text-lg'>Dashboard Login</h3>
                {
                    errors.length > 0 && errors.map((err, index) => (
                        <div key={index}>
                            <p className='alert-danger'>{err.msg}</p>
                        </div>
                    ))
                }
                <div className='mb-4 mt-4'>
                    <input type='email' name='email' onChange={handleInputs} value={loginState.email} className='w-full p-3 rounded border outline-none' placeholder='Enter Email' />
                </div>
                <div className='mb-4'>
                    <input type='password' name='password' onChange={handleInputs} value={loginState.password} className='w-full p-3 rounded border outline-none' placeholder='Enter Password' />
                </div>
                <div className='mb-4'>
                    <input type='submit' value={response.isLoading ? 'loading...' : 'Sign In'} className='bg-primary text-white p-2 rounded cursor-pointer hover:bg-secondary w-full uppercase font-semibold' />
                </div>
            </form>
        </div>
    )
}

export default AdminLogin