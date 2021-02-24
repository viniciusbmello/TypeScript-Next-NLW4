import * as React from 'react'

const SvgComponent: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M476.723 216.64L263.305 3.115A10.652 10.652 0 00255.753 0a10.675 10.675 0 00-7.552 3.136L35.422 216.64c-3.051 3.051-3.947 7.637-2.304 11.627a10.67 10.67 0 009.856 6.571h117.333v266.667c0 5.888 4.779 10.667 10.667 10.667h170.667c5.888 0 10.667-4.779 10.667-10.667V234.837h116.885c4.309 0 8.192-2.603 9.856-6.592 1.664-3.989.725-8.554-2.326-11.605z" />
    </svg>
  )
}

export default SvgComponent
