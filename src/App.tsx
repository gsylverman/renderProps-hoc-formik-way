import { FC } from "react";
import SomeComp from "./components/hoc/SomeComp";
import OtherComp, { ValuesType } from "./components/renderProps/OtherComp";

interface AppProps {
  someProps: string;
}

const App: FC<AppProps> = (props: AppProps) => {
  console.log(props);

  return (
    <>
      <div>App</div>
      <OtherComp
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
      </OtherComp>
    </>
  );
};

export default SomeComp(App);
