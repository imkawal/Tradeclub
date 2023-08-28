import React, { useEffect, useState } from "react";
import {GetTable, GetCard} from "../TableComp";
import { useGetSearchVal } from "../CustomHooks";

const ShowTableOrders = () => { 
      const arr = [];

      const [col, setCol] = useState(['Product', 'Address', 'Price', 'Quantity', 'Customer']);
      const [data, setVal] = useState(arr);
      const {val, handleSearchVal} = useGetSearchVal();
      
      return (
         <> 
              <GetCard heading="Orders" handleSearchVal={handleSearchVal}>
                    <GetTable th={col} val={data} editpath="/EditOrder" searchval={val}/>
              </GetCard>
         </>
      )
}

export default ShowTableOrders;