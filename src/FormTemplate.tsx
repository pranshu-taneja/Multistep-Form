import FormWrapper from "./FormWrapper";
export default function FormTemplate(props: {
  value: string[];
  title: string;
}) {
  return (
    <FormWrapper Title={props.title}>
      <label>{props.value[0]}</label>
      <input
        style={{
          padding: "0.5rem",
          borderRadius: "0.5rem",
          fontFamily: "arial",
          fontSize: "1rem",
        }}
        type="text"
      />
      <label>{props.value[1]}</label>
      <input
        style={{
          padding: "0.5rem",
          borderRadius: "0.5rem",
          fontFamily: "arial",
          fontSize: "1rem",
        }}
        type="text"
      />
      <label>{props.value[2]}</label>
      <input
        style={{
          padding: "0.5rem",
          borderRadius: "0.5rem",
          fontFamily: "arial",
          fontSize: "1rem",
        }}
        required
        type="text"
      />
    </FormWrapper>
  );
}
