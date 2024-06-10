import { baseApi2 } from "../../api/ExtraApi"


const Services = baseApi2.injectEndpoints({
    endpoints:(builder)=>({
        serviceData:builder.query({
            query:()=>({
                url:'/servicesApi',
                method:'GET',
            })
        }),
        
    })
})

export const {useServiceDataQuery}=Services