import InputField from "./inputField";

const { default: Image } = require("next/image");



const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen yamba">
      <div className="w-[500px]">
        <div className="flex flex-col px-14 py-20 text-base leading-7 bg-white rounded-lg shadow  max-md:px-5">
          <h1 className="self-center text-2xl font-semibold leading-9 text-center text-zinc-900">
            Se Connecter
          </h1>
          <form className="mt-10 ">
            <InputField label="Email" placeholder="Entrez votre Mail" />
            <InputField label="Mot de Passe" placeholder="*************" />
            <button
              type="submit"
              className="justify-center items-center px-10 py-3 mt-8 text-lg leading-7 text-white whitespace-nowrap bg-cyan-500 rounded-3xl shadow max-md:px-5"
            >
              Verifier
            </button>
          </form>
        </div>
      </div>
    </div>


  );
}

export default Login;