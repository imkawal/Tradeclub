import React, { useEffect, useState } from "react";
import {GetTable, GetCard} from "../TableComp";
import { useGetSearchVal } from "../CustomHooks";

const ShowTableCategory= () => {
      const arr = [
            ['Category 1', 10],
            ['Category 2', 20],
            ['Category 3', 30],
      ];

      const [col, setCol] = useState(['Name', 'Sort Order']);
      const [data, setVal] = useState(arr);
      const {val, handleSearchVal} = useGetSearchVal();
      
      return (
         <> 
              <GetCard heading="Categories" addpath="/AddCategory" handleSearchVal={handleSearchVal}>
                    <GetTable th={col} val={data} editpath="/EditCategory" searchval={val}/>
              </GetCard>
         </>
      )
}

export default ShowTableCategory;