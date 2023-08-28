import React, { useState } from "react";
import { GetCard } from "../TableComp";
import GetForm from "../FormComp";
import { useHandleInputVal } from "../CustomHooks";
import { useParams } from "react-router-dom";

function EditCategory(){
      const { inputValues, handleInputChange, handleSubmit } = useHandleInputVal();
      const Params = useParams();
      var value = decodeURIComponent(Params.userID);
      var value = value.split(',');
      
      return (
         <>
            <GetCard heading="Edit Category" addpath="">
                  <GetForm value={value[0]} name="Name" placeholder="Enter Product Name" type="text" onInputChange={handleInputChange}/>
                  <GetForm value={value[1]} name="SortOrder" placeholder="Enter Sort Order" type="number" onInputChange={handleInputChange}/>
                  <button class="btn btn-primary" onClick={() => handleSubmit('/ShowTableCategory')}>Submit</button>
            </GetCard>
         </>
      )
}

export default EditCategory;