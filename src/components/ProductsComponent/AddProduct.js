import React, { useState } from "react";
import { GetCard } from "../TableComp";
import GetForm from "../FormComp";
import { useHandleInputVal } from "../CustomHooks";

function AddProducts(){
      const { inputValues, handleInputChange, handleSubmit } = useHandleInputVal();

      return (
         <>
            <GetCard heading="Add Product" addpath="">
                  <GetForm name="Name" placeholder="Enter Product Name" type="text" onInputChange={handleInputChange}/>
                  <GetForm name="Quantity" placeholder="Enter Product Quantity" type="number" onInputChange={handleInputChange}/>
                  <GetForm name="Price" placeholder="Enter Product Price" type="number" onInputChange={handleInputChange}/>
                  <GetForm name="SortOrder" placeholder="Enter Sort Order" type="number" onInputChange={handleInputChange}/>
                  <button class="btn btn-primary" onClick={() => handleSubmit('/ShowTableProducts')}>Submit</button>
            </GetCard>
         </>
      )
}

export default AddProducts;