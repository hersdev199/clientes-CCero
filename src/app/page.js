export default function Home() {
  return (
    <main
      className="items-center text-center flex flex-col min-h-screen"
      id="login"
    >
      <div className="flex items-center justify-center h-auto w-full max-w-md py-2 border rounded-lg m-auto bg-white mt-8 md:mt-16">
        <h2 className="text-gray-800 text-xl mt-8 font-bold">Iniciar Sesión</h2>
        <div className="w-full px-4">
          <input
            type="text"
            id="username"
            className="w-full my-2 border rounded-lg h-10 px-4"
            placeholder="@username"
          />
          <input
            type="password"
            id="password"
            className="w-full my-2 border rounded-lg h-10 px-4"
            placeholder="Password"
          />
          <input
            type="submit"
            id="send"
            className="w-full my-2 border rounded-lg h-10 bg-[#18c4a4] text-white"
            value="Iniciar Sesión"
          />
        </div>
        <p className="text-gray-400 mt-4">
          ¿Has olvidado la contraseña?
          <a href="#" className="text-[#18c4a4] ml-1">
            Haz click aquí
          </a>
        </p>
      </div>

      <footer className="sticky bottom-0 mb-5 w-full text-center">
        <hr className="text-black mt-5 mb-5" />
        <h2 className="text-gray-500">
          ©Technological Solutions The Moon, LTD - Versión 0.0.12
        </h2>
      </footer>
    </main>
  );
}
