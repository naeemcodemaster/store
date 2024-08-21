import React, { useState, useEffect } from 'react'
import Wrapper from './Wrapper'
import ScreenHeader from '../../components/ScreenHeader'
import { useDispatch } from 'react-redux'
import { useCreateMutation } from '../../store/services/CategoryService'
import { setSuccess } from '../../store/reducers/GlobalReducer'
import Loader from '../../components/Loader'
import { Link, useNavigate } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi";


function CreateCategory() {
    const [category, setCategory] = useState('');
    const [saveCategory, response] = useCreateMutation();
    // console.log(response);
    const errors = response?.error?.data?.errors ? response?.error?.data?.errors : [];
    const submitCategory = (e) => {
        e.preventDefault();
        saveCategory({ name: category });
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        if (response?.isSuccess) {
            dispatch(setSuccess(response?.data?.message));
            navigate('/dashboard/categories');
        }
    }, [response?.isSuccess])
    return (
        <Wrapper>
            <ScreenHeader>
                <Link to={'/dashboard/categories'} className='btn-color flex items-center w-[180px]'>
                    <BiArrowBack className='mr-2' /> Categories List
                </Link>

            </ScreenHeader>
            <form className='w-full md:w-4/12' onSubmit={submitCategory}>
                <h3 className='capitalize mb-3'>Create Category</h3>
                {
                    errors.length > 0 && errors.map((err, index) => (
                        <div key={index}>
                            <p className='alert-danger'>{err.msg}</p>
                        </div>
                    ))
                }
                <div className='mb-3'>
                    <input type='text' name='' value={category} onChange={(e) => setCategory(e.target.value)} className='form-control' placeholder='Category name...' />
                </div>
                <div className='mb-3'>
                    <button type='submit' className='btn-color flex items-center' disabled={response.isLoading}>
                        {response.isLoading ? (
                            <>
                                Creating... <Loader />
                            </>
                        ) : (
                            'Create Category'
                        )}
                    </button>
                </div>

            </form>
        </Wrapper>
    )
}

export default CreateCategory