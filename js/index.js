const cargaPokemon = async()=> {

  try{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/charmander')
    const datos = await response.json()
    console.log(datos)



  } catch(error){
    console.log(`hubo un error en la peticion:  ${error}`)
  }

}

cargaPokemon()



