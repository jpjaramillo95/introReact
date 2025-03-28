import React from "react"; //Para hacer el componente de clase

// Componente de clase
export class ComponenteClase extends React.Component{
    render(){
        return(
            <h2>Componente de clase</h2>
        )
    }
}

// Componente funcional OBLIGATORIO primera letra en mayúscula
// default para definir componente principal solo lo puede llevar 1 componente
// function ComponenteFuncional(){
//     return(
//         <h2>Componente funcional</h2>
//     )
// }
// Forma 1 de exportar
// export default ComponenteFuncional;

// Componente funcional OBLIGATORIO primera letra en mayúscula
// forma 2
export default function ComponenteFuncional(){
    return(
        <h2>Componente funcional</h2>
    )
}

// Componente flecha OBLIGATORIO inicial mayuscula
export let ComponenteFlecha = ()=>{
    return(
        <h2>Componente flecha</h2>
    )
}

