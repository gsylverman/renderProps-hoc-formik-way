import { FC } from "react";
import SomeComp from "./components/hoc/SomeComp";
import FormComponent from "./components/renderProps/FormComponent";

interface AppProps {
  someProps: string;
}

const App: FC<AppProps> = (props: AppProps) => {
  console.log(props);

  return (
    <>
      App
      <FormComponent />
    </>
  );
};

export default SomeComp(App);
