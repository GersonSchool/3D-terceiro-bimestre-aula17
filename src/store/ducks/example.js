export const Types = {
  NEW: '@example/NEW_EXAMPLE',
};

const INITIAL_STATE = {
  data: []
};

export default function reducer(state = INITIAL_STATE, action) {
  console.log(action)
  switch (action.type) {
    case Types.NEW:
      return {...state, data: [...state.data, action.title]}
    default:
      return state;
  }
}

export const Creators = {
  addExample: (title) => ({
    type: Types.NEW,
    title,
  })
}