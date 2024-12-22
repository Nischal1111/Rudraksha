import axios from "axios"

export const getProductsSlider=async()=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/get/products?page=1&limit=8`)
        return res.data
    }catch(error){
        console.log(error)
    }
}

export const getSingleProduct=async(id:string)=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/get/product/${id}`)
        return res.data
    }catch(error){
        console.log(error)
    }
}