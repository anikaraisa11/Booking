import { baseApi2 } from "../../api/ExtraApi";

const doctorApi = baseApi2.injectEndpoints({
    endpoints: (builder) => ({
        updateDoctorProfile: builder.mutation({
            query: (data) => {
                return {
                    url: `/adviserApi/${data.id}`,
                    method: 'PUT',
                    body: data.data
                };
            }
        }),
    })
});

export const { useUpdateDoctorProfileMutation } = doctorApi;
