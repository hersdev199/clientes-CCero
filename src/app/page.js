export default function Home() {
  return (
    <main className="items-center text-center flex flex-col h-screen">
      <div className="block items-center justify-center h-[500px] w-[500px] py-2  border rounded-[16px] m-auto bg-white mt-[8%]">
        <h2 className="text-gray-800 text-xl mt-[20%]">Iniciar Sesion</h2>
        <div className="block w-full m-auto">
          <input
            type="text"
            id="usernane"
            className="w-[85%] m-5 border rounded-[8px] h-[35px] p-5"
            placeholder="@username"
          ></input>
          <input
            type="text"
            id="password"
            className="w-[85%] m-2 border rounded-[8px] h-[35px] p-5"
            placeholder="Password"
          ></input>
          <input
            type="submit"
            id="send"
            className="w-[85%] m-2 border rounded-[16px] h-[40px] bg-blue-500 text-white"
            value="Iniciar Sesion"
          ></input>
        </div>
        <p className="text-gray-400">
          haz olvidado la contraseña?
          <a href="#" className="text-blue-400">
            {" "}
            Haz click aqui
          </a>
        </p>
      </div>

      <footer className="sticky bottom-0 mb-5 ">
        <hr className="text-black  mt-5 mb-5"></hr>
        <h2 className="text-gray-500 mt-auto">
          ©Technological Solutions The Moon, LTD
        </h2>
      </footer>
    </main>
  );
}
