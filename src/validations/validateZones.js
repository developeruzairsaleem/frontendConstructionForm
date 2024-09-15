export const validateZoneName=(name)=>{
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



export const validateZoneData=(data)=>{
    if( typeof data !== 'object' ) {
        return false;
    }
    else if (data.length===0){
        return false
    }
   for(let item of data){
    
    if(!Number(item['price'])){
        return false;
    }
    
   }
   return true;


}

