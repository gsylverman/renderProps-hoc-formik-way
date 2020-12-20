import { FC } from "react";
import LogicComponent, { ValuesType } from "./LogicComponent";

interface AppProps {}

const FormComponent: FC<AppProps> = () => {
  return (
    <>
      <div>FormComponent</div>
      <LogicComponent
        values={{ a: "", b: "" }}
        handleChange={(values: ValuesType) => {
          // console.log(values);
        }}
        handleSubmit={(values: ValuesType) => {
          console.log(values);
        }}
      >
        {(values: ValuesType, handleChange, handleSubmit) => {
          return (
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                type="text"
                name="a"
                value={values.a}
              />
              <input
                onChange={handleChange}
                type="text"
                name="b"
                value={values.b}
              />
              <input type="submit" />
            </form>
          );
        }}
      </LogicComponent>
    </>
  );
};

export default FormComponent;
