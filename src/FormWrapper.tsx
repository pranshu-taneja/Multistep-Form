import { ReactNode } from "react";

type FormWrapperProps = {
  Title: string;
  children: ReactNode;
};

export default function FormWrapper({ Title, children }: FormWrapperProps) {
  return (
    <div
      style={{
        margin: "10rem",
      }}
    >
      <h2
        style={{
          fontFamily: "arial",
          textAlign: "center",
        }}
      >
        {Title}
      </h2>

      <div
        style={{
          display: "flex",
          gap: "1rem .5rem",
          flexDirection: "column",
          fontSize: "1.5rem",
        }
      }
      >
        {children}
      </div>
    </div>
  );
}
