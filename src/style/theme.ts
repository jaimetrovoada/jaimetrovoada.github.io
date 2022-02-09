export interface ColorschemeProps {
  background: {
    even: string
    odd: string
  }
  colors: {
    accent: string
  }
  text: {
    primary: string
    secondary: string
  }
}
export const gruvbox: ColorschemeProps = {
  background: {
    even: "#fffffe",
    odd: "#eff0f3"
  },
  colors: {
    accent: "#ff8e3c"
  },
  text: {
    primary: "#2a2a2a",
    secondary: "#cccccc"
  }
}

export const tokyonight: ColorschemeProps = {
  background: {
    even: "#2a2a2a",
    odd: "#1d1d1d"
  },
  colors: {
    accent: "#ff8e3c"
  },
  text: {
    primary: "#fffffe",
    secondary: "#cccccc"
  }
}

export const catppuccin: ColorschemeProps = {
  background: {
    even: "#fbf1c7",
    odd: "#f5e7b1"
  },
  colors: {
    accent: "#ff8e3c"
  },
  text: {
    primary: "#2a2a2a",
    secondary: "#cccccc"
  }
}
