import FormWrapper from "./FormWrapper";


type UserData ={
  country: string,
  Zip: string,
  Phone:string
}

type UserFormProps = UserData & {
  UpdateFields: (fields: Partial<UserData>)=>void  
}

export default function UserForm2({country, Zip, Phone, UpdateFields}:UserFormProps) {
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
          value={country}
          onChange={e=>{UpdateFields({country: e.target.value})}}
        />
        <label>Zip</label>
        <input
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontFamily: "arial",
            fontSize: "1rem",
          }}
          type="text"
          value={Zip}
          onChange={e=>{UpdateFields({Zip: e.target.value})}}
        />
        <label>Phone</label>
        <input
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontFamily: "arial",
            fontSize: "1rem",
          }}
          required
          type="text"
          value={Phone}
          onChange={e=>{UpdateFields({Phone: e.target.value})}}
        />
      </FormWrapper>
    </div>
  );
}
