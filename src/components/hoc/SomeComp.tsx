import { ComponentType } from "react";

const SomeComp = <T extends object>(WrappedComp: ComponentType<T>) => {
  return (props: T) => {
    return <WrappedComp {...props} />;
  };
};

export default SomeComp;
