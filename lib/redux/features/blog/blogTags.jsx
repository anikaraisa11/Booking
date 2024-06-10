import { baseApi2 } from "../../api/ExtraApi";


const Blog = baseApi2.injectEndpoints({
    endpoints:(builder)=>({
        BlogTag:builder.query({
            query:()=>({
                url:'/blogsTagsApi',
                method:'GET',
            })
        }),
        
    })
})

export const {useBlogTagQuery}=Blog