import Image from "next/image";

export default function Home() {
  return (
    <main
      className="w-full h-screen items-center text-center flex flex-col"
      id="login"
    >
      <div
        id="login-container"
        className="block items-center justify-center h-[500px] w-[500px] py-2 border rounded-[16px] m-auto bg-white mt-[8%]"
      >
        <h2
          id="login-title"
          className="text-gray-800 text-xl mt-[20%] font-bold"
        >
          Iniciar Sesión
        </h2>
        <div id="input-container" className="block w-full m-auto">
          <input
            type="text"
            id="username"
            className="w-[85%] m-5 border rounded-[8px] h-[35px] p-5"
            placeholder="@username"
          />
          <input
            type="password"
            id="password"
            className="w-[85%] m-2 border rounded-[8px] h-[35px] p-5"
            placeholder="Password"
          />
          <input
            type="submit"
            id="send"
            className="w-[85%] m-2 border rounded-[16px] h-[40px] bg-[#18c4a4] text-white p-2"
            value="Iniciar Sesión"
          />
        </div>
        <p id="forgot-password" className="text-gray-400">
          ¿Has olvidado la contraseña?
          <a href="#" className="text-[#18c4a4]">
            {" "}
            Haz click aquí
          </a>
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <Image
          src="/logo.png"
          alt="Logo"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      <footer id="footer" className="sticky bottom-0 mb-5 w-full text-center">
        <hr className="text-black mt-5 mb-5" />
        <h2 className="text-gray-500">
          ©Technological Solutions The Moon, LTD - Versión 0.0.12
        </h2>
      </footer>
    </main>
  );
}
