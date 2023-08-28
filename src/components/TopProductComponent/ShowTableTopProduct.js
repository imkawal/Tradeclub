import React, { useEffect, useState } from "react";
import {GetTable, GetCard} from "../TableComp";
import { useGetSearchVal } from "../CustomHooks";

const ShowTableTopProduct = () => {
      const arr = [
            ['Face Wash', 'Featured'],
            ['Body Wash', 'Latest'],
            ['Roop Mantra', 'Trending'],
            ['Eye Liner', 'Featured'],
      ];

      const [col, setCol] = useState(['Product', 'Show Type']);
      const [data, setVal] = useState(arr);
      const {val, handleSearchVal} = useGetSearchVal();
      
      return (
         <> 
              <GetCard heading="Show Top Products" addpath="/AddTopProduct" handleSearchVal={handleSearchVal}>
                    <GetTable th={col} val={data} editpath="/EditTopProduct" searchval={val}/>
              </GetCard>
         </>
      )
}

export default ShowTableTopProduct;