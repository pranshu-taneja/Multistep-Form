import FormWrapper from "./FormWrapper";

type UserData ={
  RoomNo:string,
  Gender: string,
  Race: string
}

type UserFormProps = UserData & {
  UpdateFields: (fields: Partial<UserData>)=>void  
}

export default function FormWrapper3({RoomNo, Gender, Race, UpdateFields}:UserFormProps) {
  return (
    <div>
      <FormWrapper Title={"Step3"}>
        <label>Room No</label>
        <input
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontFamily: "arial",
            fontSize: "1rem",
          }}
          type="text"
          value={RoomNo}
          onChange={e=>{UpdateFields({RoomNo: e.target.value})}}
        />
        <label>Gender</label>
        <input
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontFamily: "arial",
            fontSize: "1rem",
          }}
          type="text"
          value={Gender}
          onChange={e=>{UpdateFields({Gender: e.target.value})}}
        />
        <label>Race</label>
        <input
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            fontFamily: "arial",
            fontSize: "1rem",
          }}
          required
          type="text"
          value={Race}
          onChange={e=>{UpdateFields({Race: e.target.value})}}
        />
      </FormWrapper>
    </div>
  );
}
