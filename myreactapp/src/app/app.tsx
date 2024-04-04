import { TypewriterProvider } from "../components/Typewriter";
import Home from "../pages/Home";

export function App() {
  return (
    <div className="bg-gradient-to-t from-gray-800 to-gray-900">
      <div className="container p-4 h-screen font-sans text-white mx-auto">
        <TypewriterProvider>
          <Home />
        </TypewriterProvider>
      </div>
    </div>
  );
}

export default App;
