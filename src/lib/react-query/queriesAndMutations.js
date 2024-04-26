import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query'
import { getRecentProducts, signinCustomerAccount, signoutCustomerAccount, signupCustomerAccount } from '../appwrite/api'

const QUERY_KEY = {
  getRecentProducts: "getRecentProducts",
}

export const useSigninCustomerAccount = () => {
  return useMutation({
    mutationFn: (payload) => signinCustomerAccount(payload)
  })
}

export const useSignupCustomerAccount = () => {
  return useMutation({
    mutationFn: (payload) => signupCustomerAccount(payload)
  })
}

export const useSignoutCustomerAccount = () => {
  return useMutation({
    mutationFn: () => signoutCustomerAccount()
  })
}

export const useGetRecentProducts = () => {
  return useQuery({
    queryKey: [QUERY_KEY.getRecentProducts],
    queryFn: getRecentProducts,
  })
}