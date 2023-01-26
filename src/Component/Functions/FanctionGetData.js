import { ServiceProducts } from "../../services/Servise";

export const getDataFetch = (type = "/Products") => {
    // console.log('fetch',ServiceProducts + type )
 return( fetch(ServiceProducts + type)
    .then((res) => res.json())
    .then((data) => {
      return data;
    }))
};
