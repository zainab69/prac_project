import {
  ADD_TODO,
  CART_PRODUCT,
  DELETE_TODO,
  EDIT_TODO,
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  LOAD_CART,
  REMOVE_FROM_CART,
  SEARCH_SET,
  LOADING_DATA,
  SET_PER_PAGE,
  SET_PAGE,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  DROPDOWN,
  SELECTED_CATEGORY,
  selectedcategory,
} from "../Actions/Actions";

const initialState = {
  products: [],
  cart: [],
  searchQuery: "",
  loading: false,
  currentpage: 1,
  perpage: 5,
  dropDown: [],
};
let updatedCart;

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        products: state.products.filter((_, idx) => idx !== action.payload),
      };
    case EDIT_TODO:
      return {
        ...state,
        products: state.products.map((todo, idx) =>
          idx === action.payload.index ? action.payload.val : null
        ),
      };
    case CART_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      const existingProductIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      updatedCart =
        existingProductIndex >= 0
          ? state.cart.map((item, index) =>
              index === existingProductIndex
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...action.payload, quantity: 1 }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };

    case DECREASE_QUANTITY:
      updatedCart = state.cart.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    case INCREASE_QUANTITY:
      updatedCart = state.cart
        .map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    case LOAD_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case REMOVE_FROM_CART:
      const filteredCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      return {
        ...state,
        cart: filteredCart,
      };
    case SEARCH_SET:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case LOADING_DATA:
      return {
        ...state,
        loading: action.payload,
      };
    case NEXT_PAGE:
      return {
        ...state,
        currentpage: state.currentpage + 1,
      };

    case PREVIOUS_PAGE:
      return {
        ...state,
        currentpage: Math.max(1, state.currentpage - 1),
      };

    case SET_PAGE:
      return {
        ...state,
        currentpage: action.payload,
      };

    case SET_PER_PAGE:
      return {
        ...state,
        perpage: action.payload,
      };
    case DROPDOWN:
      return {
        ...state,
        dropDown: action.payload,
      };
    case SELECTED_CATEGORY:
      return {
        ...state,
        selectedcategory: state.products.filter(
          (val) => val.category == action.payload.data
        ),
      };
    default:
      return state;
  }
};
export default todoReducer;
