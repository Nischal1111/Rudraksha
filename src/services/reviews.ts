import axios from "axios"

// export const postReview = async (data: any) => {
//     try{
        

//     }catch(error){
//         console.log(error)
//     }
// }

export const getReviewsSlider = async () => {
    try{
        const res=await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/review/get?page=1&limit=9`)
        return res.data
    }catch(error){
        console.log(error)
    }
}