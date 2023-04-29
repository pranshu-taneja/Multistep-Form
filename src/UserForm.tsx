import FormWrapper from "./FormWrapper";

type UserData = {
  JobTitle: string, 
  RemoteType: string, 
  Experience: string
}
type UserFormProps = UserData & {
  UpdateFields: (fields: Partial<UserData>)=>void  
}

export default function UserForm({JobTitle, RemoteType, Experience, UpdateFields}:UserFormProps) {
  return (
    <div>
      <FormWrapper Title={"Step1"}>
        <label>JobTitle</label>
        <input
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontFamily: "arial",
            fontSize: "1rem",
          }}
          type="text"
          value={JobTitle}
          onChange={e=>{UpdateFields({JobTitle: e.target.value})}}
        />
        <label>RemoteType</label>
        <input
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontFamily: "arial",
            fontSize: "1rem",
          }}
          type="text"
          value={RemoteType}
          onChange={e=>{UpdateFields({RemoteType: e.target.value})}}
        />
        <label>Experience</label>
        <input
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontFamily: "arial",
            fontSize: "1rem",
          }}
          required
          type="text"
          value={Experience}
          onChange={e=>{UpdateFields({Experience: e.target.value})}}
        />
      </FormWrapper>
    </div>
  );
}
