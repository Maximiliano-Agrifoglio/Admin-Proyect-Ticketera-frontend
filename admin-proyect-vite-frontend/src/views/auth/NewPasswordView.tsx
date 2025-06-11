import NewPasswordToken from "@/components/Auth/NewPasswordToken";
import NewPasswordForm from "@/components/Auth/NewPasswordForm";
import { useState } from "react";

const NewPasswordView = () => {
  const [isValidToken, setValidToken] = useState(false);

  return (
    <>
        <h1 className="text-5xl font-black text-white">Restablecer Password</h1>
        <p className="text-2xl font-light text-white mt-5">
          ingresa el código que recibiste {''}
        <span className=" text-fuchsia-500 font-bold">Por Email</span>
      </p>
      {!isValidToken ? <NewPasswordToken/> : <NewPasswordForm />}
    </>
  )
}

export default NewPasswordView;