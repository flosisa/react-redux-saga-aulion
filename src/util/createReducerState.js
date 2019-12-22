function createReducerState(action, getState) {
  return {
    [`${action}_REQUEST`](state) {
      return {
        ...state,
        [getState]: {
          data: null,
          loading: true,
          error: null,
        },
      }
    },
    [`${action}_SUCCESS`](state, { payload }) {
      return {
        ...state,
        [getState]: {
          data: payload,
          loading: false,
          error: null,
        },
      }
    },
    [`${action}_ERROR`](state, { error }) {
      return {
        ...state,
        [getState]: {
          data: null,
          loading: false,
          error: error,
        },
      }
    },
  }
}

export default createReducerState