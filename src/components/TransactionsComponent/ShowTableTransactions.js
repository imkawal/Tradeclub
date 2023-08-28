import React, { useEffect, useState } from "react";
import {GetTable, GetCard} from "../TableComp";
import { useGetSearchVal } from "../CustomHooks";

const ShowTableTransactions = () => {  
      const arr = [
          ['Akta', 'Fair', 100, 'Success']
      ];

      const [col, setCol] = useState(['Customer', 'Product', 'Amount', 'Status']);
      const [data, setVal] = useState(arr);
      const {val, handleSearchVal} = useGetSearchVal();
      
      return (
         <> 
              <GetCard heading="Recent Payments" handleSearchVal={handleSearchVal}>
                    <GetTable th={col} val={data} searchval={val}/>
              </GetCard>
         </>
      )
}

export default ShowTableTransactions;