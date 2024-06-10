import { baseApi2 } from "../../api/ExtraApi";

const doctorApi = baseApi2.injectEndpoints({
    endpoints: (builder) => ({
        category: builder.query({
            query: () => {
                return {
                    url: `/categoriesApi`,
                    method: 'GET',
                };
            }
        }),
    })
});

export const { useCategoryQuery } = doctorApi;
