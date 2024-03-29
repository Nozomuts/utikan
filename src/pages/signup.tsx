import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Form } from "../components/Form";
import { userAction } from "../util/user";

type IForm = {
  email: string;
  password: string;
  passwordConf: string;
};

const Signup: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const handleSignup = ({ email, password }: IForm) => {
    userAction.signup(email, password);
  };

  const inputList = [
    { type: "email", name: "email", ref: register },
    { type: "password", name: "password", ref: register },
    { type: "password", name: "passwordConf", ref: register },
  ];

  return (
    <Form
      onSubmit={handleSubmit(handleSignup)}
      inputList={inputList}
      buttonText="サインアップ"
    />
  );
};

export default Signup;
