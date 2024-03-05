import React from 'react'
import { Button } from 'reactstrap'

export default function LocalStorageCom() {

    // set data into local storage (object)
    const setName = () => {
    let data = {name:"Sona"}
    let jsonString = JSON.stringify(data)
        localStorage.setItem("Name",jsonString);
    };
    // set data into local storage
    const setAge = () => {
        localStorage.setItem("Age","32");
    };
    // update data into local storage
    const updateName = () => {
        let data = {name:"Alpesh"};
        let jsonString = JSON.stringify(data);
            localStorage.setItem("Name",jsonString);
        };

    // remove single data into local storage
const removeName = ()=>{
    localStorage.removeItem("Name");
};
    // remove all data into local storage
const removeAll = ()=>{
    localStorage.clear();
};

const getData = ()=>{
    let data = localStorage.getItem("Name");
    console.log("--------data-------",data);
    let normalData = JSON.parse(data);
    console.log("normal--------",normalData);

};

  return (
    <div className="m-5 d-flex gap-3 justify-content-center">
      <Button onClick={()=>setName()} color='danger'>Set Name</Button>
      <Button onClick={()=>setAge()} color='danger'>Set Age</Button>
      <Button onClick={()=>updateName()} color='primary'>Update Name</Button>
      <Button onClick={()=>removeName()} color='danger'>Remove Name </Button>
      <Button onClick={()=>removeAll()} color='danger'>Remove All</Button>
      <Button onClick={()=>getData()} color='primary'>Get Data</Button>
    </div>
  )
}
