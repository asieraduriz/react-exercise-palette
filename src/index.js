import { createRoot } from "react-dom/client";

function App() {
  // TODO: Implementar realmente una barra de navegación
  return <h1>Hola desde React!</h1>;
}

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
