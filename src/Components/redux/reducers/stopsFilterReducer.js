const initialState = {
  all: false,
  noTransfer: false,
  oneTransfer: false,
  twoTransfers: false,
  threeTransfers: false,
  displayFiltered: false,
}

const stopsFilterReducer = (state = initialState, actions = {}) => {
  const updateAll = (noTransfer, oneTransfer, twoTransfers, threeTransfers) => {
    return noTransfer && oneTransfer && twoTransfers && threeTransfers
  }

  switch (actions.type) {
    case 'TOGGLE-ALL': {
      return {
        ...state,
        all: !state.all,
        noTransfer: !state.all,
        oneTransfer: !state.all,
        twoTransfers: !state.all,
        threeTransfers: !state.all,
      }
    }
    case 'TOGGLE-NO-TRANSFERS': {
      return {
        ...state,
        all: updateAll(!state.noTransfer, state.oneTransfer, state.twoTransfers, state.threeTransfers),
        noTransfer: !state.noTransfer,
      }
    }
    case 'TOGGLE-ONE-TRANSFER': {
      return {
        ...state,
        all: updateAll(state.noTransfer, !state.oneTransfer, state.twoTransfers, state.threeTransfers),
        oneTransfer: !state.oneTransfer,
      }
    }
    case 'TOGGLE-TWO-TRANSFERS': {
      return {
        ...state,
        all: updateAll(state.noTransfer, state.oneTransfer, !state.twoTransfers, state.threeTransfers),
        twoTransfers: !state.twoTransfers,
      }
    }
    case 'TOGGLE-THREE-TRANSFERS': {
      return {
        ...state,
        all: updateAll(state.noTransfer, state.oneTransfer, state.twoTransfers, !state.threeTransfers),
        threeTransfers: !state.threeTransfers,
      }
    }
    case 'DISPLAY-FILTERED': {
      const isChecked = state.noTransfer || state.oneTransfer || state.twoTransfers || state.threeTransfers
      return {
        ...state,
        displayFiltered: isChecked,
      }
    }
    default:
      return state
  }
}

export default stopsFilterReducer
