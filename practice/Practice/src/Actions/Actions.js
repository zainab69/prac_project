export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CART_PRODUCT = "CART_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY ";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY ";
export const LOAD_CART = "LOAD_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SEARCH_SET = "SEARCH_SET";
export const LOADING_DATA = "LOADING_DATA ";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREVIOUS_PAGE = "PREVIOUS_PAGE";
export const SET_PAGE = "SET_PAGE";
export const SET_PER_PAGE = "SET_PER_PAGE";
export const DROPDOWN = "DROPDOWN";
export const SELECTED_CATEGORY = "SELECTED_CATEGORY";
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const editTodo = (id,val) => ({
  type: EDIT_TODO,
  payload:{ id,val}
  
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
export const cartProducts = (data) => ({
  type: CART_PRODUCT,
  payload: data,
});
export const addtoCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});
export const decreaseQuantity = (id) => ({
  type: DECREASE_QUANTITY,
  payload: { id },
});
export const increaseQuantity = (id) => ({
  type: INCREASE_QUANTITY,
  payload: { id },
});
export const loadCart = (cart) => ({
  type: LOAD_CART,
  payload: cart,
});
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: { id },
});
export const searchData = (query) => ({
  type: SEARCH_SET,
  payload: query,
});
export const loadingData = (boolean) => ({
  type: LOADING_DATA,
  payload: boolean,
});
export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const previousPage = () => ({
  type: PREVIOUS_PAGE,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const setPerPage = (perPage) => ({
  type: SET_PER_PAGE,
  payload: perPage,
});
export const dropdown = (data) => ({
  type: DROPDOWN,
  payload: data,
});
export const selectedcategory = (data) => ({
  type: SELECTED_CATEGORY,
  payload: data,
});
