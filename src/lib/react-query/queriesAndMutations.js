import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query'
import { buyNowProduct, getOldestProducts, getProductById, getRecentOrders, getRecentProducts, signinCustomerAccount, signoutCustomerAccount, signupCustomerAccount } from '../appwrite/api'

const QUERY_KEY = {
  getRecentProducts: "getRecentProducts",
  getRandomProducts: "getRandomProducts",
  getProductById: "getProductById",
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

export const useGetOldestProducts = () => {
  return useQuery({
    queryKey: [QUERY_KEY.getOldestProducts],
    queryFn: getOldestProducts,
  })
}

export const useGetProductById = () => {
  return useMutation({
    mutationFn: (payload) => getProductById(payload)
  })
}

export const useBuyNowProduct = () => {
  return useMutation({
    mutationFn: (payload) => buyNowProduct(payload)
  })
}

export const useGetRecentOrders = () => {
  return useMutation({
    mutationFn: () => getRecentOrders()
  })
}