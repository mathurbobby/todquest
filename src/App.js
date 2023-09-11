import "./App.css";
import SignIn from "./components/SignIn";
import image from '../src/assests/image.svg'

function App() {
  return (
    <div className="bg-[#699998] flex items-center justify-center w-screen h-screen">
      <div className="w-[85%] h-[500px] rounded-lg overflow-hidden flex">
      {/* left div */}
        <div className="w-[38%] h-[100%] bg-[#1A535C] flex items-center justify-center ">
          <img className="w-[70%] h-[100%] " src={image} alt="" srcset="" />
        </div>
      {/* right div */}
        <div className="w-[62%] border-l-[100px]  border-b-[500px] border-b-transparent border-l-[#1A535C] h-[100%] bg-[#FFBA33] ">
          <div className="w-[100%] h-[100%] pt-[250px]  flex flex-col items-center justify-center">
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
