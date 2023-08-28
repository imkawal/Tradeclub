import React, { useEffect, useState } from "react";
import { GetCard } from "../TableComp";
import GetForm from "../FormComp";
import { useHandleInputVal } from "../CustomHooks";

function AddTopProduct(){
      const { inputValues, handleInputChange, handleSubmit } = useHandleInputVal();
      const data = ['Product 1', 'Product 2', 'Product 3'];
      const data1 = ['Latest', 'Featured', 'Recent', 'Trending'];

      return (
         <>
            <GetCard heading="Add Top Product" addpath="">
                  <GetForm name="ProductID" data={data} type="dropdown" onInputChange={handleInputChange}/>
                  <GetForm name="ShowType" data={data1} type="dropdown" onInputChange={handleInputChange}/>
                  <button class="btn btn-primary" onClick={() => handleSubmit('/ShowTableTopProduct')}>Submit</button>
            </GetCard>
         </>
      )
}

export default AddTopProduct;