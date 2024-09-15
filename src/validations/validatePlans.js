export const validatePlansName=(name)=>{
    if(!name){
        return false
    }
    else if (typeof name!=='string'){
        return false;
    }
    else if (name.length<1){
        return false;
    }
    else if (name.length>50){
        return false;
    }
    else {
        return true;
    }
}



export const validatePlansNumber = (data)=>{
    if (!data){
        return false;
    }
   
   return true;


}

