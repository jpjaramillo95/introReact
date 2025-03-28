import ComponenteFuncional from "./tiposcomponentes";
// ComponenteFlecha en este caso se importa con llaves porque no es un componente por DEFAULT
// Por Default solo puede ir 1 componente y es el que yo defina como principal
import { ComponenteFlecha, ComponenteClase } from "./tiposcomponentes";
// Función componente se combina html y javaScript, el return debe llevar parentesis
function App() {
  let numero = 1;
  return (
    <>
      <ComponenteFuncional />
      <ComponenteFlecha />
      <ComponenteClase />
      <h1>Hola {nombre()} desde React {numero + 3}</h1>
      {/* Conectar html con js con {} */}
    </>
  )
}

// función normal
function nombre (){
  return "Juan Perez";
}

export default App
