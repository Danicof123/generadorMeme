const SelectPicker = ({createText, selectMeme, exportarMeme}) => {
  return (
    <div style={{textAlign: "center"}}>
    <select onChange={(e) => selectMeme(e.target.value)}>
      <option defaultValue="">Elegir un meme</option>
      <option value="fire">Casa en llama</option>
      <option value="futurama">Futurama</option>
      <option value="history">History Channel</option>
      <option value="matrix">Matrix</option>
      <option value="philosoraptor">Philosoraptor</option>
      <option value="smart">Smart Guys</option>
    </select>
    <input type="text" placeholder="linea1" onChange={(e) => createText(e.target.value, "position1")}/>
    <input type="text" placeholder="linea2" onChange={(e) => createText(e.target.value, "position2")}/>
    <button onClick={exportarMeme}>Exportar</button>
    </div>
  )
}

export default SelectPicker
