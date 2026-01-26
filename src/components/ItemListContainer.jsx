const ItemListContainer = (props)=> {
    const {mensaje}= props
    return (
        <section>
            <h1>{mensaje}</h1>
            <div>
                <select name="" id="">
                    <option value="">Seleccioná tu obra social</option>
                    <option value="osde">OSDE</option>
                    <option value="swiss">Swiss Medical</option>
                    <option value="galeno">Galeno</option>
                </select>

                <select name="" id="">
                    <option value="">Especialidad</option>
                    <option value="clinico">Clínico</option>
                    <option value="cardiologo">Cardiólogo</option>
                    <option value="pediatra">Pediatra</option>
                </select>

                <input type="text" placeholder="Nombre del médico"/>
                <input type="date" />
                <button>Buscar</button>
            </div>
        </section>
    )
}

export default ItemListContainer