import * as React from "react"
import { SVGProps } from "react"

const LoginIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.8 2h-2.6C11 2 9 4 9 7.2v4.05h6.25c.41 0 .75.34.75.75s-.34.75-.75.75H9v4.05C9 20 11 22 14.2 22h2.59c3.2 0 5.2-2 5.2-5.2V7.2C22 4 20 2 16.8 2ZM4.56 11.25l2.07-2.07c.15-.15.22-.34.22-.53s-.07-.39-.22-.53a.754.754 0 0 0-1.06 0l-3.35 3.35c-.29.29-.29.77 0 1.06l3.35 3.35c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-2.07-2.07H9v-1.5H4.56Z"
      fill="#E71D36"
    />
  </svg>
)

export default LoginIcon
