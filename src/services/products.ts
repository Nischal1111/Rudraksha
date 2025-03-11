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
export const getSpecialProduct=async()=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/get/products?filterBy=special&filterValue=true`)
        return res.data
    }catch(error){
        console.log(error)
    }
}

export const getAllProducts=async(page:number,limit:number)=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/get/products?page=${page}&limit=${limit}`)
        return res.data
    }catch(error){
        console.log(error)
    }
}

export const getByCategory=async(category:string,page:number,limit:number)=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/get/products/?filterBy=category&filterValue=${category}&page=${page}&limit=${limit}`)
        return res.data
    }catch(error){
        console.log(error)
    }
}

export const getByCountry=async(country:string)=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/get/products/?filterBy=country&filterValue=${country}`)
        return res.data
    }catch(error){
        console.log(error)
    }
}
export const getByFilter=async(category:string,value:string)=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/get/products/?filterBy=${category}&filterValue=${value}`)
        return res.data
    }catch(error){
        console.log(error)
    }
}

export const getExclude=async(id:string|undefined|string[])=>{
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/get/products/?excludeId=${id}&page=1&limit=4`)
        return res.data
    }catch(error){
        console.log(error)
    }
}

export const getByMultipleFilters = async (
  filters: Record<string, string>,
  page?: number,
  limit?: number
) => {
  try {
    // Convert filters object to comma-separated strings for API
    const filterKeys = Object.keys(filters).filter(key => filters[key]);
    const filterValues = filterKeys.map(key => filters[key]);

    // Build query parameters
    let url = `${process.env.NEXT_PUBLIC_BASE_URL}/get/products/?filterBy=${filterKeys.join(',')}&filterValue=${filterValues.join(',')}`;
    
    // Add pagination if provided
    if (page && limit) {
      url += `&page=${page}&limit=${limit}`;
    }

    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};