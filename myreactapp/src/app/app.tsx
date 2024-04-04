import Home from "../pages/Home";
import StarBackground from "../components/StarBackground";

export function App() {
  return (
    <div>
      <StarBackground />
      <div className="container p-4 h-screen font-sans text-white mx-auto">
        <Home />
      </div>
      <div className="bg-gradient-to-t from-gray-800 to-gray-900">
      </div>
    </div>
    
  );
}

export default App;
