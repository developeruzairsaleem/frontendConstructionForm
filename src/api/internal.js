import axios from  'axios';
const app = axios.create({
    baseURL: 'http://localhost:5000',
    // timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });
export const postZones =async(data)=>{
  
    let response;
    try{
        response = await app.post('/zones',data)
        return response;
    }
    catch(error){

        
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);

    }
 

    


}

export const deleteZoneById=async(zoneId)=>{
  let response;
  try {
    response = await app.delete(`/zones/${zoneId}`)
    return  response;
  }
  catch (error) {
      console.log(error)
  }
}

export const getAllZones=async()=>{
  let response;

  try {
    response = await app.get('/zones')
    return response;
  } catch (error) {
    console.log(error);
  }
}



export const getEveryZone=async()=>{
  let response;

  try {
    response = await app.get('/allzones')
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getAllPlans=async()=>{
  let response;

  try {
    response = await app.get('/plans')
    return response;
  } catch (error) {
    console.log(error);
  }
}



export const deletePlanById=async(planId)=>{
  let response; 
  try {
    response = await app.delete(`/plans/${planId}`)
    return response;
  } catch(error) {
    console.log(error)

  }
}

export const postPlans =async(data)=>{
  
  let response;
  try{
      response = await app.post('/plans',data)
      return response;
  }
  catch(error){

      
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);

  }


  


}