import { baseApi2 } from "../../api/ExtraApi";

const Specialties = baseApi2.injectEndpoints({
  endpoints: (builder) => ({
    specialtiesData: builder.query({
      query: () => ({
        url: "/specialitiesApi",
        method: "GET",
      }),
    }),
  }),
});

export const { useSpecialtiesDataQuery } = Specialties;
