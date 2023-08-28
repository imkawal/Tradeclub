import React, { useEffect, useState } from "react";
import {GetTable, GetCard} from "../TableComp";
import { useGetSearchVal } from "../CustomHooks";

const ShowTableProductReport = () => {  
      const arr = [];

      const [col, setCol] = useState(['Product', 'Quantity', 'Total Amount', 'Sale Amount', 'Quantity Saled']);
      const [data, setVal] = useState(arr);
      const {val, handleSearchVal} = useGetSearchVal();
      
      return (
         <> 
              <GetCard heading="Product Report" handleSearchVal={handleSearchVal}>
                    <GetTable th={col} val={data} searchval={val}/>
              </GetCard>
         </>
      )
}

export default ShowTableProductReport;