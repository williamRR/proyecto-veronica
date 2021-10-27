import { useSelector, useDispatch } from "react-redux"

export const useUser = () => {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const setUser = (value) =>
    dispatch({
      type: "SET_USER",
      user: value,
    })
  return { user, setUser }
}
