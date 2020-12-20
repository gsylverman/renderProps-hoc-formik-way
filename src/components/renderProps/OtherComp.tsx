import { FC, useState } from "react";

export type ValuesType = {
  a: string;
  b: string;
};

export interface OtherCompProps {
  // children(values: ValuesType, handleChange: any): JSX.Element;
  children: (
    values: ValuesType,
    handleChange: any,
    handleSubmit: any
  ) => JSX.Element;
  values: ValuesType;
  handleChange: any;
  handleSubmit: any;
}

const OtherComp: FC<OtherCompProps> = ({
  children,
  values,
  handleChange,
  handleSubmit,
}) => {
  const [newValues, setNewValues] = useState(values);

  const handleChangeHelper = (e: React.FormEvent<HTMLInputElement>) => {
    const element = e.target as HTMLInputElement;
    setNewValues({ ...newValues, [element.name]: element.value });
    return newValues;
  };

  const handleSubmitHelper = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return newValues;
  };

  return (
    <>
      {children(
        newValues,
        (e: React.FormEvent<HTMLInputElement>) =>
          handleChange(handleChangeHelper(e)),
        (e: React.FormEvent<HTMLFormElement>) =>
          handleSubmit(handleSubmitHelper(e))
      )}
    </>
  );
};

export default OtherComp;
