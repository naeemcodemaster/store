import React, { useEffect } from 'react'
import Wrapper from './Wrapper'
import ScreenHeader from '../../components/ScreenHeader'
import { Link,useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { clearMessage } from '../../store/reducers/GlobalReducer'
import { useGetQuery } from '../../store/services/CategoryService'
import Spinner from '../../components/Spinner'
function Categories() {
  const {page} = useParams();
  const { success } = useSelector((state) => state.GlobalReducer);
  console.log("success is ", success);
  const dispatch = useDispatch();

  const {data=[],isLoading} = useGetQuery(page?page:1);
  console.log(data,isLoading);
  useEffect(() => {
    return () => {

      if (location.pathname !== '/dashboard/categories') {
        dispatch(clearMessage());
      }
    }
  }, [location,dispatch])
  return (
    <Wrapper>
      <ScreenHeader>
        <Link to={'/dashboard/create-category'} className='btn-color'>Add Categories + </Link>
      </ScreenHeader>
      {
        success && <div className='alert-success'>
          {success}
        </div>
      }
      {
        !isLoading ? data?.categories?.length > 0 && <div>
          <table className='w-full bg-white rounded-md'>
          <thead>
            <tr className='border-b border-gray-200 text-left'>
              <th className='p-3 uppercase text-sm font-medium text-gray-500'>Name</th>
              <th className='p-3 uppercase text-sm font-medium text-gray-500'>Edit</th>
              <th className='p-3 uppercase text-sm font-medium text-gray-500'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.categories.map(category => (
              <tr key={category._id} className='even:bg-gray-100'>
                <td className='p-3 capitalize text-sm font-normal text-gray-800'>{category.name}</td>
                <td className='p-3 capitalize text-sm font-normal text-gray-800'><button>Edit</button></td>
                <td className='p-3 capitalize text-sm font-normal text-gray-800'><button>Delete</button></td>
              </tr>
            ))}
          </tbody>
          </table>
        </div> : <Spinner/>
      }
    </Wrapper>
  )
}

export default Categories