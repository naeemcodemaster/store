import React from 'react'
import Wrapper from './Wrapper'
import ScreenHeader from '../../components/ScreenHeader'
import { Link } from 'react-router-dom'


function Categories() {
  return (
    <Wrapper>
        <ScreenHeader>
            <Link to={'/dashboard/create-category'} className='btn-color'>Add Categories + </Link>
        </ScreenHeader>
        <h2>Categories</h2>
    </Wrapper>
  )
}

export default Categories