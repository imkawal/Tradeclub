import React, { useState } from "react";
import { GetCard } from "../TableComp";
import GetForm from "../FormComp";
import { useHandleInputVal } from "../CustomHooks";
import { useParams } from "react-router-dom";

function EditProducts(){
      const { inputValues, handleInputChange, handleSubmit } = useHandleInputVal();
      const Params = useParams();
      var value = decodeURIComponent(Params.userID);
      var value = value.split(',');
     
      return (
         <>
            <GetCard heading="Edit Product" addpath="">
                  <GetForm value={value[0]} name="Name" placeholder="Enter Product Name" type="text" onInputChange={handleInputChange}/>
                  <GetForm value={value[1]} name="Quantity" placeholder="Enter Product Quantity" type="number" onInputChange={handleInputChange}/>
                  <GetForm value={value[2]} name="Price" placeholder="Enter Product Price" type="number" onInputChange={handleInputChange}/>
                  <GetForm value={value[3]} name="SortOrder" placeholder="Enter Sort Order" type="number" onInputChange={handleInputChange}/>
                  <button class="btn btn-primary" onClick={() => handleSubmit('/ShowTableProducts')}>Submit</button>
            </GetCard>
         </>
      )
}

export default EditProducts;