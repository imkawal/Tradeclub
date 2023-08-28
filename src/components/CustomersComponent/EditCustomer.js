import React, { useState } from "react";
import { GetCard } from "../TableComp";
import GetForm from "../FormComp";
import { useHandleInputVal } from "../CustomHooks";
import { useParams } from "react-router-dom";

function EditCustomer(){
      const { inputValues, handleInputChange, handleSubmit } = useHandleInputVal();
      const Params = useParams();
      var value = decodeURIComponent(Params.userID);
      var value = value.split(',');
      
      return (
         <> 
            <GetCard heading="Edit Customer" addpath="">
                  <GetForm value={value[0]} name="Name" placeholder="Enter Customer Name" type="text" onInputChange={handleInputChange}/>
                  <GetForm value={value[2]} name="PhoneNo" placeholder="Enter Phone Number" type="number" onInputChange={handleInputChange}/>
                  <GetForm name="Image" placeholder="Upload Image" type="file" onInputChange={handleInputChange}/>
                  <GetForm value={value[4]} name="SortOrder" placeholder="Enter Sort Order" type="number" onInputChange={handleInputChange}/>
                  <button class="btn btn-primary" onClick={() => handleSubmit('/ShowTableCustomer')}>Submit</button>
            </GetCard>
         </>
      )
}

export default EditCustomer;