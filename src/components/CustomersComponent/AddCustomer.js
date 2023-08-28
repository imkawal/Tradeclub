import React, { useState } from "react";
import { GetCard } from "../TableComp";
import GetForm from "../FormComp";
import { useHandleInputVal } from "../CustomHooks";

function AddCustomers(){
      const { inputValues, handleInputChange, handleSubmit } = useHandleInputVal();

      return (
         <>
            <GetCard heading="Add Customer" addpath="">
                  <GetForm name="Name" placeholder="Enter Customer Name" type="text" onInputChange={handleInputChange}/>
                  <GetForm name="PhoneNo" placeholder="Enter Phone Number" type="number" onInputChange={handleInputChange}/>
                  <GetForm name="Image" placeholder="Upload Image" type="file" onInputChange={handleInputChange}/>
                  <GetForm name="SortOrder" placeholder="Enter Sort Order" type="number" onInputChange={handleInputChange}/>
                  <button class="btn btn-primary" onClick={() => handleSubmit('/ShowTableCustomer')}>Submit</button>
            </GetCard>
         </>
      )
}

export default AddCustomers;