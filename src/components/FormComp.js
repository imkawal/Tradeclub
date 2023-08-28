import React, { useEffect, useState } from "react";

const GetForm = ({type, name, placeholder, onInputChange, value, data}) => {

    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
        onInputChange(name, inputValue);
    }

    useEffect(() => {
            //setInputValue(value);
            //alert(value)
            onInputChange(name, value);  
            setInputValue(value);
    }, []) 
      
    console.log(data)
      return (
         <>
          <fieldset class="form-group">
                 <h5>{name}</h5>
            {type == 'dropdown' ?
                  <select class="form-control" name={name} onBlur={handleChange} onChange={handleChange}>
                           <option value="">**Select**</option>
                           {data.map((item, key) => (
                                value == item ?
                                     <option selected>{item}</option>
                                     :
                                     <option>{item}</option>  
                           ))}
                  </select>
                :
                 <input type={type} value={inputValue} class="form-control" name={name} onBlur={handleChange} onChange={handleChange} placeholder={placeholder} />
            }
            </fieldset>
         </>
      )
}

export default GetForm;