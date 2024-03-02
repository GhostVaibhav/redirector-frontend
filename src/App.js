import logo from "./assets/logo.png";
import Generate from "./components/generate";
import Generating from "./components/generating";
import Generated from "./components/generated";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className="bg-gray-600 flex flex-col justify-center items-center h-screen w-screen">
      <a href="/"><img src={logo} alt="logo" draggable={false} unselectable /></a>
      {loading ? <Generating /> : (url === "" ? <Generate loading={loading} setLoading={setLoading} setUrl={setUrl} /> : <Generated url={url} />)}
    </div>
  );
}

export default App;
