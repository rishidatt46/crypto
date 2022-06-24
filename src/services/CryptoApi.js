import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHearder = {
    'X-RapidAPI-Key': '9ed608b8a0msh783b5038ee717a3p18a6b5jsn75a4b461b8be',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({ url, headers: cryptoApiHearder})

export const cryptoApi = createApi ({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery ({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});
 console.log(cryptoApi)
export const{
    useGetCryptosQuery,
} = cryptoApi;



// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': '9ed608b8a0msh783b5038ee717a3p18a6b5jsn75a4b461b8be',
//       'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
//   };