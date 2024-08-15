import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const CategoryService = createApi({
    reducerPath:'category',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:5000/api/'
    }),
    endpoints:(builder)=>{
        return{
            create:builder.mutation({
                query:(name)=>{
                    return {
                        url:'create-category',
                        method:'POST',
                        body:name
                    }
                }
            })
        }
    }
});


export const {useCreateMutation} = CategoryService;
export default CategoryService;