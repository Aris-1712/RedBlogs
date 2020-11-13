import Axios from 'axios'
export const BlogsGet=()=>{
   
    return(async(dispatch)=>{
        console.log("HERE") 
        let res=await Axios.get("https://nameless-dusk-13618.herokuapp.com/all")
            if(res.status===200){
                console.log(res.data)
                return(dispatch(Blogs(res.data)))
            }
            else{
                alert("Network issue")
            }      
    })
}



const Blogs=(obj)=>{
return({
    type:"BLOG",
    payLoad:obj
})
}