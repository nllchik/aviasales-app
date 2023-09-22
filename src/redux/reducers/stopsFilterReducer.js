const initialState = [
  { value: 'Все', checked: true, id: 'ALL' },
  { value: 'Без пересадок', checked: true, id: 'NO-TRANSFERS' },
  { value: '1 пересадка', checked: true, id: 'ONE-TRANSFER' },
  { value: '2 пересадки', checked: true, id: 'TWO-TRANSFERS' },
  { value: '3 пересадки', checked: true, id: 'THREE-TRANSFERS' },
]

const stopsFilterReducer = (state = initialState, actions = {}) => {
  switch (actions.type) {
    case 'TOGGLE-FILTER': {
      if (actions.filter === 'ALL') {
        const isAllChecked = state[1].checked && state[2].checked && state[3].checked && state[4].checked
        const allCheckedArr = state.map((el) => {
          return isAllChecked ? { ...el, checked: false } : { ...el, checked: true }
        })
        return allCheckedArr
      }
      const idx = state.findIndex((el) => el.id === actions.filter)
      const editingFilter = { ...state[idx] }

      const newArr = [
        ...state.slice(0, idx),
        { ...editingFilter, checked: !editingFilter.checked },
        ...state.slice(idx + 1),
      ]

      const isAllCheckedNew = newArr[1].checked && newArr[2].checked && newArr[3].checked && newArr[4].checked

      return [{ ...newArr[0], checked: isAllCheckedNew }, ...newArr.slice(1)]
    }
    default:
      return state
  }
}

export default stopsFilterReducer
