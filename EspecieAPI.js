

class EspecieAPI{

    async guardarEspecie(){

        const fNombre = document.getElementById("nombre").value;
        const fClasificacion = document.getElementById("clasificacion").value;
        const fEsperanza_vida = parseInt(document.getElementById("esperanza_vida").value);
        const fpeso_promedio = parseFloat(document.getElementById("peso_promedio").value);
    
        const datos={
            nombre:fNombre,
            clasificacion:fClasificacion,
            esperanza_vida:fEsperanza_vida,
            peso_primordial:fpeso_promedio
        };
   
        await fetch(
            "http://localhost:3000/crear_especie",
            {
                method:"POST",
                body:JSON.stringify(datos),
                headers:{
                    "Content-Type":"application/json"
                }
            }
        );
            console.log("Registro exitoso");

    }
        async listarEspecies(){
            let especies = await fetch("http://localhost:3000/listar_especies");
           especies = await especies.json();
           const miTabla = document.getElementById("tabla_especie");         
           especies.forEach(
            (especie)=>{
                const fila = miTabla.insertRow();
                fila.insertCell().innerText = especie.id_especie;
                fila.insertCell().innerText = especie.nombre;
                fila.insertCell().innerText = especie.clasificacion;
                fila.insertCell().innerText = especie.esperanza_vida;
                fila.insertCell().innerText = especie.peso_primordial;
            }
           );
        }

 
}

export default EspecieAPI;