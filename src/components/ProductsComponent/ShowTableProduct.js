import React, { useEffect, useState } from "react";
import {GetTable, GetCard} from "../TableComp";
import { useGetSearchVal } from "../CustomHooks";

const ShowTableProducts = () => {
      const arr = [
            ['Face Wash', '20', '240', 10],
            ['Body Wash', '30', '250', 20],
            ['Roop Mantra', '23', '244', 30],
            ['Eye Liner', '94', '744', 30],
      ];

      const [col, setCol] = useState(['Name', 'Quantity', 'Price', 'Sort Order']);
      const [data, setVal] = useState(arr);
      const {val, handleSearchVal} = useGetSearchVal();
      
      return (
         <> 
              <GetCard heading="Products" addpath="/AddProducts" handleSearchVal={handleSearchVal}>
                    <GetTable th={col} val={data} editpath="/EditProducts" searchval={val}/>
              </GetCard>
         </>
      )
}

export default ShowTableProducts;