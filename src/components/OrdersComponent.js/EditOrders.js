import React, { useState } from "react";
import { GetCard } from "../TableComp";
import GetForm from "../FormComp";
import { useHandleInputVal } from "../CustomHooks";
import { useParams } from "react-router-dom";

function EditOrders(){
      const { inputValues, handleInputChange, handleSubmit } = useHandleInputVal();
      const Params = useParams();
      var value = decodeURIComponent(Params.userID);
      var value = value.split(',');
      console.log(value)
      return (
         <> 
            <GetCard heading="Edit Order" addpath="">
                  <GetForm value={value[0]} name="Product" placeholder="Enter Product Name" type="text" onInputChange={handleInputChange}/>
                  <GetForm value={value[1]} name="Address" placeholder="Enter Customer Address" type="text" onInputChange={handleInputChange}/>
                  <GetForm value={value[2]} name="Price" placeholder="Enter Product Price" type="number" onInputChange={handleInputChange}/>
                  <GetForm value={value[3]} name="Quantity" placeholder="Enter Quantity" type="number" onInputChange={handleInputChange}/>
                  <button class="btn btn-primary" onClick={() => handleSubmit('/ShowTableCustomer')}>Submit</button>
            </GetCard>
         </>
      )
}

export default EditOrders;