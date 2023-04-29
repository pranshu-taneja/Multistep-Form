import FormWrapper from "./FormWrapper";


type UserData ={
  Location: string,
  Salary: string,
  Employees:string
}

type UserFormProps = UserData & {
  UpdateFields: (fields: Partial<UserData>)=>void  
}

export default function UserForm2({Location, Salary, Employees, UpdateFields}:UserFormProps) {
  return (
    <div>
      <FormWrapper Title={"Step2"}>
        <label>Country</label>
        <input
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontFamily: "arial",
            fontSize: "1rem",
          }}
          type="text"
          value={Location}
          onChange={e=>{UpdateFields({Location: e.target.value})}}
        />
        <label>Salary</label>
        <input
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontFamily: "arial",
            fontSize: "1rem",
          }}
          type="text"
          value={Salary}
          onChange={e=>{UpdateFields({Salary: e.target.value})}}
        />
        <label>Employees</label>
        <input
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontFamily: "arial",
            fontSize: "1rem",
          }}
          required
          type="text"
          value={Employees}
          onChange={e=>{UpdateFields({Employees: e.target.value})}}
        />
      </FormWrapper>
    </div>
  );
}
