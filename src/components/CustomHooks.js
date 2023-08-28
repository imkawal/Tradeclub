import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useHandleInputVal = () => {
    const [inputValues, setInputValues] = useState({});

    const handleInputChange = (fieldName, value) => {
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [fieldName]: value,
        }));
    };

    const navigation = useNavigate();

    const handleSubmit = (val) => {
       // console.log(inputValues);
       navigation(val);
    }

    return {
        inputValues,
        handleInputChange,
        handleSubmit
    };
}


export const useGetSearchVal = () => {
    const [val, setVal] = useState();

    const handleSearchVal = (event) => {
        const searchValue = event.target.value;
        setVal(searchValue);
    }

    return {
        val,
        handleSearchVal
    };
}