import React, { Children, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const GetTable = (props) => {
      const [data, setData] = useState(props.val);
      const [search, setSearch] = useState(props.searchval);
      
      useEffect(() => {
         if(props.searchval == " " || props.searchval){
                const filtered = data.filter(item => item[0].toLowerCase().includes(props.searchval.toLowerCase()));
                setData(filtered);
         }else{
                setData(props.val)
         }
      }, [props.searchval])

      const datatable = 
      
      data.length > 0 ?
      data.map((item,key) => ( 
        <tr>
           {props.editpath ?
            <td>
                    <Link to={props.editpath+`/${encodeURIComponent(item)}`} class="btn btn-sm btn-success">EDIT</Link>&nbsp;
                    <button class="btn btn-sm btn-warning">DELETE</button>
            </td>
            :
            ""}
             {
                item.map((item,keys) => (
                    props.th[keys] == 'Image' ? 
                             <div class="m-1">
                                <img class="rounded-circle" width="70px" height="70px" alt="Cinque Terre" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxX0NJjcZCv5nN4S0eCLxqv-VrauC8WT0ibqPYA3ZN5EWJuUc5S14dWbei-rOxYajy17k&usqp=CAU" />
                             </div>
                         :
                          <td>{item}</td>
                ))
             }
        </tr>
    )) : 
       
    <tr>
        <td colSpan={props.th.length + 1} style={{ textAlign: 'center' }}>No Record Found</td>
    </tr>
    ;

      return(
         <>
            <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                            {props.editpath ?
                               <th>Action</th>
                               : ""
                            }
                                {
                                    props.th.map(item => ( 
                                        <th>{item}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                                 {datatable}
                        </tbody>
                    </table>
                </div>
         </>
      )
}

export const GetCard = ({children, heading, addpath, handleSearchVal}) => {
       
      const link = addpath ? <Link to={addpath} className="btn btn-primary">ADD</Link> : null;

      const search = addpath ? <input type="text" onChange={handleSearchVal} placeholder="Search....." class="form-control form-rounded"/> : null;
       return (
          <>
               <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="card-header">
                                    <h2>{heading}</h2>
                                    <div class="heading-elements-toggle"><i class="la la-ellipsis-v font-medium-3"></i></div>
                                </div>
                            </div>
                            <div class="col-md-5">
                               <div class="card-header">
                                   {search}
                              </div>
                            </div>
                            <div class="col-md-2 mt-md-2">
                                  {link}
                            </div>
                        </div>
                        <div class="card-content collapse show">
                            <div class="card-body">
                                    { children }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </>
       )
}