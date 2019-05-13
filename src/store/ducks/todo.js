export const Types = {
  ADD_TODO: 'todo/ADD_TODO',
  UPDATE_ITEM: 'todo/UPDATE_ITEM',
  REMOVE_ITEM: 'todo/REMOVE_ITEM',
};

const initialState = {
  list: [],

}
export default function todo(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_TODO:
      const { value } = action.payload;
      const list = [...state.list, {
        id: Math.round(Math.random() * 100),
        data: value
      }];
      return { ...state, list };
    case Types.UPDATE_ITEM:
      const { id, data } = action.payload;
      const newList = state.list;
      const index = newList.map(item =>
        item.id).indexOf(id);

      newList[index].data = data;
      return { ...state, list: newList };
    case Types.REMOVE_ITEM:
      const { idItem } = action.payload;
      return {
        ...state, list: state.list.filter(item => {
          return item.id !== idItem
        })
      }
    default:
      return state;
  }
}

export const Creators = {
  addTodo: value => ({
    type: Types.ADD_TODO,
    payload: { value },
  }),
  updateItem: (id, data) => ({
    type: Types.UPDATE_ITEM,
    payload: { id, data },
  }),
  removeItem: idItem => ({
    type: Types.REMOVE_ITEM,
    payload: { idItem },
  }),
};
