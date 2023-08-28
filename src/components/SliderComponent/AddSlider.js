import React, { useState } from "react";
import { GetCard } from "../TableComp";
import GetForm from "../FormComp";
import { useHandleInputVal } from "../CustomHooks";

function AddSlider(){
      const { inputValues, handleInputChange, handleSubmit } = useHandleInputVal();

      return (
         <>
            <GetCard heading="Add Slider" addpath="">
                  <GetForm name="Heading" placeholder="Enter Heading" type="text" onInputChange={handleInputChange}/>
                  <GetForm name="Description" placeholder="Enter Description" type="number" onInputChange={handleInputChange}/>
                  <GetForm name="Image" placeholder="Upload Image" type="file" onInputChange={handleInputChange}/>
                  <GetForm name="SortOrder" placeholder="Enter Sort Order" type="number" onInputChange={handleInputChange}/>
                  <button class="btn btn-primary" onClick={() => handleSubmit('/ShowTableSlider')}>Submit</button>
            </GetCard>
         </>
      )
}

export default AddSlider;