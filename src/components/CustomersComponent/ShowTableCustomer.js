import React, { useEffect, useState } from "react";
import {GetTable, GetCard} from "../TableComp";
import { useGetSearchVal } from "../CustomHooks";

const ShowTableCustomer = () => {
      const arr = [
            ['Ekta', '', '9418632767', 'Admin', 10],
            ['Kawal','',  '7056503988', 'Customer', 20],
            ['Amrit', '', '8930735272', 'Customer', 30],
            ['Paras','',  '9416840483', 'Customer', 40],
      ];

      const [col, setCol] = useState([ 'Name', 'Image', 'Phone No', 'Role', 'SortOrder']);
      const [data, setVal] = useState(arr);
      const {val, handleSearchVal} = useGetSearchVal();
      
      return (
         <> 
              <GetCard heading="Customers" addpath="/AddCustomers" handleSearchVal={handleSearchVal}>
                    <GetTable th={col} val={data} editpath="/EditCustomers" searchval={val}/>
              </GetCard>
         </>
      )
}

export default ShowTableCustomer;