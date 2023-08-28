import React, { useState } from "react";
import { GetCard } from "../TableComp";
import GetForm from "../FormComp";
import { useHandleInputVal } from "../CustomHooks";
import { useParams } from "react-router-dom";

function EditTopProduct(){
      const { inputValues, handleInputChange, handleSubmit } = useHandleInputVal();
      const data = ['Product 1', 'Product 2', 'Product 3'];
      const data1 = ['Latest', 'Featured', 'Recent'];
      const Params = useParams();
      var value = decodeURIComponent(Params.userID);
      var value = value.split(',');
     
      return (
         <>
            <GetCard heading="Edit Top Product" addpath="">
                  <GetForm value={value[0]} name="ProductID" data={data} type="dropdown" onInputChange={handleInputChange}/>
                  <GetForm value={value[1]} name="ShowType" data={data1} type="dropdown" onInputChange={handleInputChange}/>
                  <button class="btn btn-primary" onClick={() => handleSubmit('/ShowTableTopProduct')}>Submit</button>
            </GetCard>
         </>
      )
}

export default EditTopProduct;