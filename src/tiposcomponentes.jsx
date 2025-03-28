import React from "react"; //Para hacer el componente de clase

// Componente de clase
// Componente clase se le pone this.props para racibir datos de principal
export class ComponenteClase extends React.Component{
    render(){
        console.log(this.props);
        return(
            <>
                <h2>Componente Clase</h2>
                <p>Nombre: {this.props.info.nombre}</p>
                <p>Salario: {this.props.info.salario}</p>
                <p>Profesion: {this.props.info.profesion}</p>
            </>
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
// props para recibir datos del principal
export default function ComponenteFuncional(props){
    console.log(props)
    // Destructuración para acortar código
    let {info}=props;
    let {nombre,profesion,salario}=info
    return(
        <>
            <h2>Componente funcional</h2>
            <p>Nombre: {nombre}</p>
            <p>Salario: {salario}</p>
            <p>Profesion: {profesion}</p>
        </>
    )
}

// Componente flecha OBLIGATORIO inicial mayuscula
// props para recibir datos del principal
export let ComponenteFlecha = (props)=>{
    console.log(props)
    return(
        <>
            <h2>Componente flecha</h2>
            <p>Nombre: {props.info.nombre}</p>
            <p>Salario: {props.info.salario}</p>
            <p>Profesion: {props.info.profesion}</p>
        </>
    )
}

