import { useMediaQuery } from "@material-ui/core"

const useWidth = () => {
  const isSmallScreen = useMediaQuery("(max-width:770px)")
  const isHugeScreen = useMediaQuery("(min-width:1300px)")
  return [isSmallScreen, isHugeScreen]
}

export default useWidth
