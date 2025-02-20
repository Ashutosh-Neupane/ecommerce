/* eslint-disable @typescript-eslint/no-empty-object-type */
// first copy theme color from https://ui.shadcn.com/themes
// then in chatgpt:
// PROMPT: convert this css to js object. don't convert css variable to cameCase

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ColorState = {
  availableColors: {
    name: string
    root: {}
    dark: {}
  }[]
  defaultColor: string
  userColor?: string
}
const availableColors = [
  
    {
      name: 'Gold',
      root: {
        '--background': '180 100% 97%',
        '--foreground': '180 80% 20%',
        '--card': '180 100% 97%',
        '--card-foreground': '180 80% 20%',
        '--popover': '180 100% 97%',
        '--popover-foreground': '180 80% 20%',
        '--primary': '180 75% 45%',
        '--primary-foreground': '180 80% 95%',
        '--secondary': '180 20% 85%',
        '--secondary-foreground': '180 15% 20%',
        '--muted': '180 20% 85%',
        '--muted-foreground': '180 20% 40%',
        '--accent': '180 100% 90%',
        '--accent-foreground': '180 80% 10%',
        '--destructive': '0 80% 60%',
        '--destructive-foreground': '0 0% 95%',
        '--border': '180 20% 80%',
        '--input': '180 20% 80%',
        '--ring': '180 100% 45%',
        '--radius': '0.5rem',
        '--chart-1': '180 60% 60%',
        '--chart-2': '160 60% 40%',
        '--chart-3': '200 40% 25%',
        '--chart-4': '45 70% 60%',
        '--chart-5': '30 80% 70%',
      },
      dark: {
        '--background': '180 100% 15%',
        '--foreground': '180 80% 90%',
        '--card': '180 100% 15%',
        '--card-foreground': '180 80% 90%',
        '--popover': '180 100% 15%',
        '--popover-foreground': '180 80% 90%',
        '--primary': '180 75% 50%',
        '--primary-foreground': '180 80% 95%',
        '--secondary': '180 10% 20%',
        '--secondary-foreground': '180 80% 95%',
        '--muted': '180 10% 20%',
        '--muted-foreground': '180 30% 50%',
        '--accent': '180 10% 20%',
        '--accent-foreground': '180 80% 95%',
        '--destructive': '0 70% 45%',
        '--destructive-foreground': '0 0% 95%',
        '--border': '180 10% 20%',
        '--input': '180 10% 20%',
        '--ring': '180 100% 40%',
        '--chart-1': '210 60% 55%',
        '--chart-2': '170 55% 40%',
        '--chart-3': '40 70% 50%',
        '--chart-4': '250 70% 60%',
        '--chart-5': '300 75% 55%',
      },
    },
    {
      name: 'Green',
      root: {
        '--background': '0 0% 100%',
        '--foreground': '240 10% 3.9%',
        '--card': '0 0% 100%',
        '--card-foreground': '240 10% 3.9%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '240 10% 3.9%',
        '--primary': '142.1 76.2% 36.3%',
        '--primary-foreground': '355.7 100% 97.3%',
        '--secondary': '240 4.8% 95.9%',
        '--secondary-foreground': '240 5.9% 10%',
        '--muted': '240 4.8% 95.9%',
        '--muted-foreground': '240 3.8% 46.1%',
        '--accent': '240 4.8% 95.9%',
        '--accent-foreground': '240 5.9% 10%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '240 5.9% 90%',
        '--input': '240 5.9% 90%',
        '--ring': '142.1 76.2% 36.3%',
        '--radius': '0.5rem',
        '--chart-1': '12 76% 61%',
        '--chart-2': '173 58% 39%',
        '--chart-3': '197 37% 24%',
        '--chart-4': '43 74% 66%',
        '--chart-5': '27 87% 67%',
      },
      dark: {
        '--background': '20 14.3% 4.1%',
        '--foreground': '0 0% 95%',
        '--card': '24 9.8% 10%',
        '--card-foreground': '0 0% 95%',
        '--popover': '0 0% 9%',
        '--popover-foreground': '0 0% 95%',
        '--primary': '142.1 70.6% 45.3%',
        '--primary-foreground': '144.9 80.4% 10%',
        '--secondary': '240 3.7% 15.9%',
        '--secondary-foreground': '0 0% 98%',
        '--muted': '0 0% 15%',
        '--muted-foreground': '240 5% 64.9%',
        '--accent': '12 6.5% 15.1%',
        '--accent-foreground': '0 0% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '0 85.7% 97.3%',
        '--border': '240 3.7% 15.9%',
        '--input': '240 3.7% 15.9%',
        '--ring': '142.4 71.8% 29.2%',
        '--chart-1': '220 70% 50%',
        '--chart-2': '160 60% 45%',
        '--chart-3': '30 80% 55%',
        '--chart-4': '280 65% 60%',
        '--chart-5': '340 75% 55%',
      },
    },
    {
      name: 'Red',
      root: {
        '--background': '0 0% 100%',
        '--foreground': '0 0% 3.9%',
        '--card': '0 0% 100%',
        '--card-foreground': '0 0% 3.9%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '0 0% 3.9%',
        '--primary': '0 72.2% 50.6%',
        '--primary-foreground': '0 85.7% 97.3%',
        '--secondary': '0 0% 96.1%',
        '--secondary-foreground': '0 0% 9%',
        '--muted': '0 0% 96.1%',
        '--muted-foreground': '0 0% 45.1%',
        '--accent': '0 0% 96.1%',
        '--accent-foreground': '0 0% 9%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '0 0% 89.8%',
        '--input': '0 0% 89.8%',
        '--ring': '0 72.2% 50.6%',
        '--radius': '0.5rem',
        '--chart-1': '12 76% 61%',
        '--chart-2': '173 58% 39%',
        '--chart-3': '197 37% 24%',
        '--chart-4': '43 74% 66%',
        '--chart-5': '27 87% 67%',
      },
      dark: {
        '--background': '0 0% 3.9%',
        '--foreground': '0 0% 98%',
        '--card': '0 0% 3.9%',
        '--card-foreground': '0 0% 98%',
        '--popover': '0 0% 3.9%',
        '--popover-foreground': '0 0% 98%',
        '--primary': '0 72.2% 50.6%',
        '--primary-foreground': '0 85.7% 97.3%',
        '--secondary': '0 0% 14.9%',
        '--secondary-foreground': '0 0% 98%',
        '--muted': '0 0% 14.9%',
        '--muted-foreground': '0 0% 63.9%',
        '--accent': '0 0% 14.9%',
        '--accent-foreground': '0 0% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '0 85.7% 97.3%',
        '--border': '0 0% 89.8%',
        '--input': '0 0% 89.8%',
        '--ring': '0 72.2% 50.6%',
        '--chart-1': '12 76% 61%',
        '--chart-2': '173 58% 39%',
        '--chart-3': '197 37% 24%',
        '--chart-4': '43 74% 66%',
        '--chart-5': '27 87% 67%',
      },
    }
    
]
const initialState: ColorState = {
  availableColors,
  defaultColor: availableColors[0].name,
  userColor: undefined,
}
export const colorStore = create<ColorState>()(
  persist(() => initialState, {
    name: 'colorStore',
  })
)

export default function useColorStore(theme: string = 'light') {
  const colorState = colorStore()
  const getColor = () => {
    const userColor = colorState.availableColors.find(
      (t) => t.name === colorState.userColor
    )
    if (userColor) return userColor
    const defaultColor = colorState.availableColors.find(
      (t) => t.name === colorState.defaultColor
    )
    if (defaultColor) return defaultColor

    return colorState.availableColors[0]
  }

  const color = getColor()
  const cssColors: { [key: string]: string } =
    theme === 'light' ? color.root : color.dark
  return {
    availableColors,
    cssColors,
    color,
    getColor,
    setColor: (name: string, isUserColor?: boolean) => {
      colorStore.setState(
        isUserColor ? { userColor: name } : { defaultColor: name }
      )
    },
    updateCssVariables: () => {
      const color = getColor()
      const colors: { [key: string]: string } =
        theme === 'light' ? color.root : color.dark
      for (const key in colors) {
        document.documentElement.style.setProperty(key, colors[key])
      }
    },
  }
}
