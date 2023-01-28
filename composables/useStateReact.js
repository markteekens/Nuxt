import { ref, readonly } from "vue";
const state = ref("");
export function useStateReact(initialState) {
  state.value = initialState;
  const setState = (newState) => {
    state.value = newState;
  };

  return [readonly(state), setState];
}
