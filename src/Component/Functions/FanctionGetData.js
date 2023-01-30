import { useEffect, useState } from "react";
import { ServiceProducts } from "../../services/Servise";

export const GetDataFetch = ({
  url
}) => {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
      });
  }, [url]);
  return { result };
};

// export const GetDataFetch = ({
//   type = "/Products",
//   Limit = 5,
//   PageNumber = 1,
// }) => {
//   const [result, setResult] = useState([]);

//   useEffect(() => {
//     fetch(ServiceProducts + `${type}?_page=${PageNumber}&_limit=${Limit}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setResult(data);
//       });
//   }, [type, Limit, PageNumber]);
//   return { result };
// };

