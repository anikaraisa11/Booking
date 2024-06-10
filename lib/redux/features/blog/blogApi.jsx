import { baseApi2 } from "../../api/ExtraApi";


const Blogs = baseApi2.injectEndpoints({
    endpoints:(builder)=>({
        BlogsData:builder.query({
            query:(searchValue)=>({
                url:`/blog/search?search=${searchValue}`,
                method:'GET',
            })
        }),
        
    })
})

export const {useBlogsDataQuery}=Blogs