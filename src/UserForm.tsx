import FormWrapper from "./FormWrapper";

type UserData = {
  Name: string, 
  Email: string, 
  age: string
}
type UserFormProps = UserData & {
  UpdateFields: (fields: Partial<UserData>)=>void  
}

export default function UserForm({Name, Email, age, UpdateFields}:UserFormProps) {
  return (
    <div>
      <FormWrapper Title={"Step1"}>
        <label>Name</label>
        <input
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontFamily: "arial",
            fontSize: "1rem",
          }}
          type="text"
          value={Name}
          onChange={e=>{UpdateFields({Name: e.target.value})}}
        />
        <label>Email</label>
        <input
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontFamily: "arial",
            fontSize: "1rem",
          }}
          type="text"
          value={Email}
          onChange={e=>{UpdateFields({Email: e.target.value})}}
        />
        <label>age</label>
        <input
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontFamily: "arial",
            fontSize: "1rem",
          }}
          required
          type="text"
          value={age}
          onChange={e=>{UpdateFields({age: e.target.value})}}
        />
      </FormWrapper>
    </div>
  );
}
