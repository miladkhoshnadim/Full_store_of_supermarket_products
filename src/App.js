import "./App.css";
import { ServiceProducts } from "./services/Servise";
import { useEffect, useState } from "react";
import { AppRoutes } from "./Rouats/RouatsComponents";
import { contexInfo } from "./Component/context/Contex";

function App() {
  const [inputSerch, setInputSerch] = useState("");
  const [dataGrops, setdataGrops] = useState([]);
  const [GroupName, setGroupName] = useState([]);
  const [BacketInventory, setBacketInventory] = useState([]);
  // JSON.parse(localStorage.getItem("BasketBuying")) ||
  let newDataGrop = [];
  let newGroupName = [];

  // console.log("informationHome", information);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    fetch(ServiceProducts + "/Products")
      .then((res) => res.json())
      .then((data) => {
        HadelDividing(data);
      });
  }

  function HadelDividing(data) {
    data.forEach((Pro) => {
      const index = newGroupName.findIndex((x) => x === Pro.group);
      if (index > -1) {
        newDataGrop[index].push(Pro);
      } else {
        newGroupName.push(Pro.group);
        newDataGrop.push([Pro]);
      }
    });
    setdataGrops(newDataGrop);
    setGroupName(newGroupName);
  }

  return (
    <>
      <contexInfo.Provider
        value={{
          inputSerch,
          setInputSerch,
          dataGrops,
          GroupName,
          BacketInventory,
          setBacketInventory,
        }}
      >
        <AppRoutes />
      </contexInfo.Provider>
    </>
  );
}

export default App;
