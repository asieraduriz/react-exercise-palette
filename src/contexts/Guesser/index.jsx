import React, { createContext, useContext, useReducer } from "react";
import { object, string } from "prop-types";
/**
 * @typedef {Object} Context
 * @property {State} state
 * @property {React.Dispatch<Action>} dispatch
 *
 * @typedef {Object} State
 * @property {string} answer
 * @property {boolean} isGuessing
 * @property {boolean} isGuessed
 *
 * @typedef {Object} Action
 * @property {'check'} type - The type of action.
 */

const GuesserContext = createContext(/** @type {Context} */ ({}));

/**
 *
 * @param {State} state
 * @param {Action} action
 * @returns {State} state
 */
const reducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "check":
      return { ...state, isGuessing: false };
    default:
      break;
  }

  return newState;
};

export const GuesserProvider = ({ answer, children }) => {
  /** @type {State} */
  const reducerInitializer = {
    answer,
    isGuessed: false,
    isGuessing: true,
  };

  const [state, dispatch] = useReducer(reducer, reducerInitializer);
  return (
    <GuesserContext.Provider value={{ state, dispatch }}>
      {children}
    </GuesserContext.Provider>
  );
};

GuesserProvider.propTypes = {
  answer: string,
  children: object,
};

export const useGuesserDispatch = () => {
  const context = useContext(GuesserContext);
  if (!context) {
    throw new Error("useGuesserDispatch must be used within <GuesserProvider>");
  }
  return context.dispatch;
};

export const useGuesser = () => {
  const context = useContext(GuesserContext);
  if (!context) {
    throw new Error("useIsGuessing must be used within <GuesserProvider>");
  }
  return context.state;
};
