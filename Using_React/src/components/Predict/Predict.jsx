import {React,useState} from "react";
import "./predict.css";
import axios from "axios";


const Predict = () => {
  const [prediction,setPrediction]=useState(-1)
  let headers = new Headers();
  headers.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5000/predict');
  headers.append('Access-Control-Allow-Credentials', 'true');
  headers.append('GET', 'POST', 'OPTIONS');
 
  const[values,setValues]=useState({
    "year":"",
    "month":"",
    "date":"",
    "hour":"",
    "wind speed":"",
    "wind direction":"",
    "pressure":"",
    "rain":"",
    "temperature":"",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    let arr=[]
    for (const val in values) {
      arr.push(Number(values[val]));
    }
    const obj = {
      feat: arr,
    };
    try {
      let res = await axios.post("http://127.0.0.1:5000/predict", obj);
      console.log(res.data)
      setPrediction(res.data)
      if (res.status === 200) {
        console.log("Success!");
      } else {
        console.log("Error:"+res);
      }
    } catch (err) {
      console.log(err);
    }
    console.log(values)
}

  return (
    <div className="Predict" id="predict">
      <h1>Predict</h1>
      <div className="Predict-form">
        <form onSubmit={handleSubmit} method="post">
          <input
            type="text"
            name="Year"
            placeholder="Year"
            required="required"
            onChange={(e)=>setValues({...values, year: e.target.value})}  
            value={values.body}
          />
          <input
            type="text"
            name="Month"
            placeholder="Month"
            required="required"
            onChange={(e)=>setValues({...values, month: e.target.value})}  
            value={values.body}
          />
          <input
            type="text"
            name="Date"
            placeholder="Date"
            required="required"
            onChange={(e)=>setValues({...values, date: e.target.value})}  
            value={values.body}
          />
          <input
            type="text"
            name="Hour"
            placeholder="Hour"
            required="required"
            onChange={(e)=>setValues({...values, hour: e.target.value})}  
            value={values.body}
          />
          <input
            type="text"
            name="Windspeed"
            placeholder="Wind Speed"
            required="required"
            onChange={(e)=>setValues({...values, "wind speed": e.target.value})}  
            value={values.body}
          />
          <input
            list="wind dir"
            type="text"
            name="winddirection"
            placeholder="Wind Direction"
            required="required"
            onChange={(e)=>setValues({...values, "wind direction": e.target.value})}  
            value={values.body}
          />
          <input
            type="text"
            name="Pressure"
            placeholder="Pressure"
            required="required"
            onChange={(e)=>setValues({...values, "pressure": e.target.value})}  
            value={values.body}
          />
          <input
            type="text"
            name="Rain"
            placeholder="Rain"
            required="required"
            onChange={(e)=>setValues({...values, "rain": e.target.value})}  
            value={values.body}
          />
          <input
            type="text"
            name="Temperature"
            placeholder="Temperature"
            required="required"
            onChange={(e)=>setValues({...values, "temperature": e.target.value})}  
            value={values.body}
          />
          <datalist id="wind dir">
            <option value="0">E</option>
            <option value="1">ENE</option>
            <option value="2">ESE</option>
            <option value="3">N</option>
            <option value="4">NE</option>
            <option value="5">NNE</option>
            <option value="6">NNW</option>
            <option value="7">NW</option>
            <option value="8">S</option>
            <option value="9">SE</option>
            <option value="10">SSE</option>
            <option value="11">SSW</option>
            <option value="12">SW</option>
            <option value="13">W</option>
            <option value="14">WNW</option>
            <option value="15">WSW</option>
          </datalist>
          <br></br>
          <button type="submit">
            Predict
          </button>
        </form>
      </div>
      {prediction===-1 ? (
        <p className="answer">PM2.5 concentrations is _______.</p>
      ) : (
        <p className="answer">PM2.5 concentrations is {prediction} </p>
      )}
    </div>
  );
};

export default Predict;
