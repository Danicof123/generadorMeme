import "./MemeGenerator.css"
import { useReducer } from "react";
import { TYPES } from "../actions/memeActions";
import { memeInitialState, memeReducer } from "../reducers/memeReducer";
import Meme from "./Meme"
import SelectPicker from "./SelectPicker"
import html2canvas from "html2canvas";

const MemeGenerator = () => {
  const [state, dispatch] = useReducer(memeReducer, memeInitialState);

  // Escribe el texto (Arriba/Abajo del meme)
  const createText = (text, position) =>
    (position === 'position1')
      ? dispatch({type: TYPES.ADD_HEADER, payload: text})
      : dispatch({type: TYPES.ADD_FOOTER, payload: text})

  // Actualiza el estado con el nombre del meme
  const selectMeme = (name) => dispatch({type: TYPES.SELECT_MEME, payload: name})

  // Esta función genera un canvas desde un nodoHTML y la exporta como jpg
  const exportarMeme = () => {
    html2canvas(document.querySelector("#memeGenerator"))
    .then(canvas => {
      let dato = document.createElement('a');
      dato.download = "memecof.jpg"
      dato.href = canvas.toDataURL("image/jpeg");
      dato.click();
  });

  }
  
  return (
    <>
      <SelectPicker createText={createText} selectMeme={selectMeme} exportarMeme={exportarMeme} />
      <Meme meme={state}/>
    </>
  )
}

export default MemeGenerator
