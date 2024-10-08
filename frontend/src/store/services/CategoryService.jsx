import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const CategoryService = createApi({
    reducerPath:'category',
    tagTypes:'categories',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:5000/api/',
        prepareHeaders:(headers,{getState})=>{
            const reducers = getState();
            const token = reducers?.authReducer?.adminToken;
            headers.set('authorization',token ? ` Bearer ${token}` : '');
            return headers;

        }
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
                },
                invalidatesTags:['categories']

            }),
            get:builder.query({
                query:(page)=>{
                    return{
                        url:`categories/${page}`,
                        method:'GET'
                    }
                },
                providesTags:['categories']
            })
        }
    }
});


export const {useCreateMutation,useGetQuery} = CategoryService;
export default CategoryService;