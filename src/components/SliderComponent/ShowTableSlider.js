import React, { useEffect, useState } from "react";
import {GetTable, GetCard} from "../TableComp";
import { useGetSearchVal } from "../CustomHooks";

const ShowTableSlider = () => {
      const arr = [
             ['Test', 'test', "", 10]
      ];

      const [col, setCol] = useState(['Heading', 'Description', 'Image', 'Sort Order']);
      const [data, setVal] = useState(arr);
      const {val, handleSearchVal} = useGetSearchVal();
      
      return (
         <> 
              <GetCard heading="Sliders" addpath="/AddSlider" handleSearchVal={handleSearchVal}>
                    <GetTable th={col} val={data} editpath="/EditSlider" searchval={val}/>
              </GetCard>
         </>
      )
}

export default ShowTableSlider;