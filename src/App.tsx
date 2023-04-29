import useMultistepForm from "./useMultistepForm";
import UserForm1 from "./UserForm";
import UserForm2 from "./UserForm2";
import { FormEvent, useState } from "react";
import UserForm3 from "./UserForm3";
import axios from "axios";


type FormData = {
  JobTitle: string;
  RemoteType: string;
  Experience: string;
  Location: string;
  Salary: string;
  Employees: string;
  RoomNo: string;
  Gender: string;
  Race: string;
};

const Intial_Data: FormData = {
  JobTitle: "",
  RemoteType: "",
  Experience: "",
  Location: "",
  Salary: "",
  Employees: "",
  RoomNo: "",
  Gender: "",
  Race: "",
};

function App() {
  const [data, setdata] = useState(Intial_Data);

  function UpdateFields(fields: Partial<FormData>) {
    setdata((prev) => {
      return { ...prev, ...fields };
    });
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
    <UserForm1 {...data} UpdateFields={UpdateFields} />,
    <UserForm2 {...data} UpdateFields={UpdateFields} />,
    <UserForm3 {...data} UpdateFields={UpdateFields} />,
  ]);

  //------------------- Posting data using axios -------------------
  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log(data)


    try {
      await axios.post(
        "https://6446405fee791e1e29fa0001.mockapi.io/card-detail/",
        data
      );
    } catch (err) {
      console.log({ Error: "Some Error Occured" });
      console.log(err);
    }
    //------------------- Posting data using axios -------------------

    // alert("Form Submitted!!");
  }

  return (
    <div
      className="container"
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
      }}
    >
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
    </div>
  );
}

export default App;
