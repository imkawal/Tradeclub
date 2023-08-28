import React, { useState } from "react";
import { GetCard } from "../TableComp";
import GetForm from "../FormComp";
import { useHandleInputVal } from "../CustomHooks";
import { useParams } from "react-router-dom";

function EditSlider(){
      const { inputValues, handleInputChange, handleSubmit } = useHandleInputVal();
      const Params = useParams();
      var value = decodeURIComponent(Params.userID);
      var value = value.split(',');

      return (
         <> 
            <GetCard heading="Edit Slider" addpath="">
                  <GetForm value={value[0]} name="Heading" placeholder="Enter Heading" type="text" onInputChange={handleInputChange}/>
                  <GetForm value={value[1]} name="Description" placeholder="Enter Description" type="text" onInputChange={handleInputChange}/>
                  <GetForm value={value[3]} name="SortOrder" placeholder="Enter SortOrder" type="number" onInputChange={handleInputChange}/>
                  <GetForm name="Image" placeholder="Upload Image" type="file" onInputChange={handleInputChange}/>
                  <button class="btn btn-primary" onClick={() => handleSubmit('/ShowTableSlider')}>Submit</button>
            </GetCard>
         </>
      )
}

export default EditSlider;