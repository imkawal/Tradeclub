import React, { useState } from "react";
import { GetCard } from "../TableComp";
import GetForm from "../FormComp";
import { useHandleInputVal } from "../CustomHooks";

function AddCategory(){
      const { inputValues, handleInputChange, handleSubmit } = useHandleInputVal();

      return (
         <>
            <GetCard heading="Add Category" addpath="">
                  <GetForm name="Name" placeholder="Enter Product Name" type="text" onInputChange={handleInputChange}/>
                  <GetForm name="SortOrder" placeholder="Enter Sort Order" type="number" onInputChange={handleInputChange}/>
                  <button class="btn btn-primary" onClick={() => handleSubmit('/ShowTableCategory')}>Submit</button>
            </GetCard>
         </>
      )
}

export default AddCategory;