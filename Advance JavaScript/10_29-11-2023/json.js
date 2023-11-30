let data = {
    name: "Sona",
    age: 30,
    hobby: ["reading"],
    x: undefined,
    y: null,
  };
  
  console.log("data", data);
  
  let jsonStr = JSON.stringify(data);
  console.log("jsonStr", typeof jsonStr);
  console.log("jsonStr", jsonStr);
  
  let normalData = JSON.parse(jsonStr);
  console.log("normalData", normalData);