export const SELECT_SKINTONE = 'SELECT_SKINTONE';
export const SELECT_CONTROL = 'SELECT_CONTROL';
export const ADD_TOY = 'ADD_TOY';
export const REMOVE_TOY = 'REMOVE_TOY';
export const REMOVE_ALL_TOYS = 'REMOVE_ALL_TOYS';
export const CLEAR_AND_ADD_TOYS = 'CLEAR_AND_ADD_TOYS';
export const ADD_EXTRA = 'ADD_EXTRA';
export const REMOVE_EXTRA = 'REMOVE_EXTRA';
export const REMOVE_ALL_EXTRAS = 'REMOVE_ALL_EXTRAS';
export const CLEAR_AND_ADD_EXTRAS = 'CLEAR_AND_ADD_EXTRAS';
export const ADD_MAKE_UP = 'ADD_MAKE_UP';
export const REMOVE_MAKE_UP = 'REMOVE_MAKE_UP';
export const REMOVE_ALL_MAKE_UP = 'REMOVE_ALL_MAKE_UP';
export const CLEAR_AND_ADD_MAKE_UP = 'CLEAR_AND_ADD_MAKE_UP';
export const SET_BACKGROUND = 'SET_BACKGROUND';
export const RESET = 'RESET';

export function selectControl(control) {
  return {
    type: SELECT_CONTROL,
    control
  }
}

export function selectSkintone(skintone) {
  return {
    type: SELECT_SKINTONE,
    skintone
  }
}

export function addToy(toy) {
  return {
    type: ADD_TOY,
    toy
  }
}

export function removeToy(toy) {
  return {
    type: REMOVE_TOY,
    toy
  }
}

export function clearAndAddToys(newToy, clearables) {
  return {
    type: CLEAR_AND_ADD_TOYS,
    newToy,
    clearables
  }
}

export function removeAllToys() {
  return {
    type: REMOVE_ALL_TOYS
  }
}

export function addExtra(extra) {
  return {
    type: ADD_EXTRA,
    extra
  }
}

export function removeExtra(extra) {
  return {
    type: REMOVE_EXTRA,
    extra
  }
}

export function clearAndAddExtras(newExtra, clearables) {
  return {
    type: CLEAR_AND_ADD_EXTRAS,
    newExtra,
    clearables
  }
}

export function removeAllExtras() {
  return {
    type: REMOVE_ALL_EXTRAS
  }
}

export function addMakeUp(makeUpItem) {
  return {
    type: ADD_MAKE_UP,
    makeUpItem
  }
}

export function removeMakeUp(makeUpItem) {
  return {
    type: REMOVE_MAKE_UP,
    makeUpItem
  }
}

export function clearAndAddMakeUp(newMakeUpItem, clearables) {
  return {
    type: CLEAR_AND_ADD_MAKE_UP,
    newMakeUpItem,
    clearables
  }
}

export function removeAllMakeUp() {
  return {
    type: REMOVE_ALL_MAKE_UP
  }
}

export function setBackground(background) {
  return {
    type: SET_BACKGROUND,
    background
  }
}

export function reset() {
  return {
    type: RESET
  }
}