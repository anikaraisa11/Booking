
import { baseApi2 } from "../../api/ExtraApi";


const searchDoctor = baseApi2.injectEndpoints({
    endpoints: (builder) => ({
        getSearchDoctor: builder.query({
            query: (query) => {
                return {
                    url: `/search?search=${query}`,
                    method: 'GET'
                };
            }
        })
    })
});

export const { useGetSearchDoctorQuery } = searchDoctor;
