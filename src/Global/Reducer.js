const initialstate={
    blogs:[]
}


const Reducer=(state=initialstate,Action)=>{
    if(Action.type==="BLOG"){
        return ({...state,blogs:[...Action.payLoad]})
    }
    return state
}


export default Reducer