/* eslint-disable require-jsdoc */
import React, { useCallback, useLayoutEffect, useState } from 'react'

interface AppbarContextProps {
  appbarHeight: number
  setAppbarHeight: React.Dispatch<React.SetStateAction<number>>
  isMinimized: boolean
  setIsMinimized: React.Dispatch<React.SetStateAction<boolean>>
}
export const AppbarContext = React.createContext<AppbarContextProps>({
  appbarHeight: 0,
  setAppbarHeight: () => {},
  isMinimized: false,
  setIsMinimized: () => {},
})
export const useAppbarContext = () => React.useContext(AppbarContext)

function getSize(el: HTMLElement) {
  if (!el) {
    return {
      width: 0,
      height: 0,
    }
  }

  return {
    width: el.offsetWidth,
    height: el.offsetHeight,
  }
}

export function useComponentSize(ref: any) {
  const _useState = useState(getSize(ref ? ref.current : {}))
  const ComponentSize = _useState[0]
  const setComponentSize = _useState[1]

  const handleResize = useCallback(
    function handleResize() {
      if (ref.current) {
        setComponentSize(getSize(ref.current))
      }
    },
    [ref],
  )

  useLayoutEffect(
    function () {
      if (!ref.current) {
        return
      }

      handleResize()

      if (typeof ResizeObserver === 'function') {
        const resizeObserver = new ResizeObserver(function () {
          handleResize()
        })
        resizeObserver.observe(ref.current)

        return function () {
          resizeObserver.disconnect()
          // resizeObserver = null
        }
      } else {
        window.addEventListener('resize', handleResize)

        return function () {
          window.removeEventListener('resize', handleResize)
        }
      }
    },
    [ref.current],
  )

  return ComponentSize
}
