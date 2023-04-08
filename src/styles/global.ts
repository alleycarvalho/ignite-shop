import { Roboto } from 'next/font/google'

import { globalCss } from ".";

const roboto = Roboto({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400", "700"]
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  'body, button, input, textarea': {
    fontFamily: roboto.style.fontFamily,
    fontWeight: 400,
  },
})
