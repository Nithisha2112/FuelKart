// import React, { useState } from 'react';
// import './Form.css';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

// const Form = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const [err, setErr] = useState("");
//   const [customerName,setCustomerName]=useState("");
//   const [vehicleNumber,setVehicleNumber]=useState("")
//   const [startReading,setStartReading]=useState("")
//   const [endReading,setEndReading]=useState("")
//   const navigate = useNavigate();
  
//   const addInformation = async()=>{
//       let formfield=new FormData();
//       formfield.append("customerName");
//       formfield.append("vehicleNumber");
//       formfield.append("startReading");
//       formfield.append("endReading");

//       await axios({
//         method:'post',
//         url:'http://127.0.0.1:8000/api/orders/',
//         data:formfield
//       }).then((response)=>{
//         console.log(response.data)
//         navigate('/')
//       })
//   } 
//   return (
//     <div>
//       <h2>Vehicle Data Form</h2>
//       <form method="post" action="{% url 'api' %}" >
//         <div>
//           <label htmlFor="customerName">Customer Name:</label>
//           <input
//             type="text"
//             id="customerName"
//             placeholder="Customer Name"
//             {...register("customerName", { required: true })}
//           />
//           {errors.customerName && <span className="error">Customer name is required</span>}
//         </div>
//         <div>
//           <label htmlFor="vehicleNumber">Vehicle Number:</label>
//           <select
//             id="vehicleNumber"
//             {...register("vehicleNumber", { required: true })}
//           >
//             <option value="">Select...</option>
//             <option value="vehicle1">Vehicle 1</option>
//             <option value="vehicle2">Vehicle 2</option>
//             <option value="vehicle3">Vehicle 3</option>
//           </select>
//           {errors.vehicleNumber && <span className="error">Vehicle number is required</span>}
//         </div>
//         <div>
//           <label htmlFor="startReading">Start Reading:</label>
//           <input
//             type="text"
//             id="startReading"
//             placeholder="Start Reading"
//             {...register("startReading", { required: true })}
//           />
//           {errors.startReading && <span className="error">Start reading is required</span>}
//         </div>
//         <div>
//           <label htmlFor="endReading">End Reading:</label>
//           <input
//             type="text"
//             id="endReading"
//             placeholder="End Reading"
//             {...register("endReading", { required: true })}
//           />
//           {errors.endReading && <span className="error">End reading is required</span>}
//         </div>
//         <button type="submit" onClick={addInformation}>Submit</button>
//         {err && <div className="error">{err}</div>}
//       </form>
//     </div>
//   );
// };

// export default Form;

import React, { useState } from 'react';
import './Form.css';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  
  const addInformation = async (data) => {
    let formfield = new FormData();
    formfield.append("customerName", data.customerName);
    formfield.append("vehicleNumber", data.vehicleNumber);
    formfield.append("startReading", data.startReading);
    formfield.append("endReading", data.endReading);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/orders/', formfield);
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error("Error submitting the form", error);
      setErr("Error submitting the form. Please try again.");
    }
  };

  return (
    <div>
      <h2>Vehicle Data Form</h2>
      <form onSubmit={handleSubmit(addInformation)}>
        <div>
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            placeholder="Customer Name"
            {...register("customerName", { required: true })}
          />
          {errors.customerName && <span className="error">Customer name is required</span>}
        </div>
        <div>
          <label htmlFor="vehicleNumber">Vehicle Number:</label>
          <select
            id="vehicleNumber"
            {...register("vehicleNumber", { required: true })}
          >
            <option value="">Select...</option>
            <option value="vehicle1">Vehicle 1</option>
            <option value="vehicle2">Vehicle 2</option>
            <option value="vehicle3">Vehicle 3</option>
          </select>
          {errors.vehicleNumber && <span className="error">Vehicle number is required</span>}
        </div>
        <div>
          <label htmlFor="startReading">Start Reading:</label>
          <input
            type="text"
            id="startReading"
            placeholder="Start Reading"
            {...register("startReading", { required: true })}
          />
          {errors.startReading && <span className="error">Start reading is required</span>}
        </div>
        <div>
          <label htmlFor="endReading">End Reading:</label>
          <input
            type="text"
            id="endReading"
            placeholder="End Reading"
            {...register("endReading", { required: true })}
          />
          {errors.endReading && <span className="error">End reading is required</span>}
        </div>
        <button type="submit">Submit</button>
        {err && <div className="error">{err}</div>}
      </form>
    </div>
  );
};

export default Form;
