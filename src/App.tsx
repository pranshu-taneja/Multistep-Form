import useMultistepForm from "./useMultistepForm";
import UserForm1 from "./UserForm";
import UserForm2 from "./UserForm2";
import UserForm3 from "./UserForm3";

import { FormEvent, useState } from "react";

type FormData = {
  Name:string,
  Email:string,
  age: string,
  country: string,
  Zip: string,
  Phone:string,
  RoomNo:string,
  Gender: string,
  Race: string
}

const Intial_Data:FormData = {
  Name:"",
  Email:"",
  age: "",
  country: "",
  Zip: "",
  Phone:"",
  RoomNo:"",
  Gender: "",
  Race: ""
}

function App() {

  const [data, setdata] = useState(Intial_Data);

  function UpdateFields(fields: Partial<FormData>){
    setdata(prev=>{
      return{...prev, ...fields}
    })
  }

  const {
    NofSteps,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    step,
    next,
    prev,
  } = useMultistepForm([
    <UserForm1 {...data} UpdateFields={UpdateFields}/>,
    <UserForm2 {...data} UpdateFields={UpdateFields}/>,
    <UserForm3 {...data} UpdateFields={UpdateFields}/>,
  ]);

  function onSubmit(e:FormEvent){
    e.preventDefault();
    if(!isLastStep) return next();
    alert("Form Submitted!!")
  }

  
  return (
    <div
      style={{
        position: "relative",
        fontFamily: "arial",
        background: "white",
        height: "40rem",
        width: "35rem",
        borderRadius: "1rem",
        margin: "1rem",
        padding: "1rem",
      }}
    >
      <form onSubmit={onSubmit}>
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            fontFamily: "arial",
            fontSize: "1.5rem",
          }}
        >
          {currentStepIndex}/{NofSteps - 1}
        </div>

        {/* Starting of the content of form */}
        {step}
        {/* Starting of the content of form */}

        {!isFirstStep && (
          <button
            type="button"
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "10rem",
              padding: "1rem",
              fontFamily: "arial",
              borderRadius: "1rem",
              fontSize: "1.5rem",
            }}
            onClick={prev}
          >
            Back
          </button>
        )}

        <button
          type="submit"
          style={{
            position: "absolute",
            bottom: "1rem",
            right: "1rem",
            padding: "1rem",
            fontFamily: "arial",
            borderRadius: "1rem",
            fontSize: "1.5rem",
          }}
        >
          {!isLastStep ? "Next" : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default App;
