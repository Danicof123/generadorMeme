import { TYPES } from "../actions/memeActions"

export const memeInitialState = {
  header: "",
  footer: "",
  image: ""
}

export const memeReducer = (state, action) => {
  switch (action.type){
    case TYPES.ADD_HEADER: {
      return {
        ...state,
        header: action.payload 
      }
    }
    case TYPES.ADD_FOOTER: {
      return {
        ...state,
        footer: action.payload
      }
    }
    case TYPES.SELECT_MEME: {
      return {
        ...state,
        image: action.payload
      }
    }
    default:
      return memeInitialState;
  }
}

