import * as React from 'react'

const SvgComponent: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        d="M458.406,380.681c-8.863-6.593-21.391-4.752-27.984,4.109c-3.626,4.874-7.506,9.655-11.533,14.21
				c-7.315,8.275-6.538,20.915,1.737,28.231c3.806,3.364,8.531,5.016,13.239,5.016c5.532,0,11.04-2.283,14.992-6.754
				c4.769-5.394,9.364-11.056,13.658-16.829C469.108,399.803,467.269,387.273,458.406,380.681z"
      />
      <path
        d="M491.854,286.886c-10.786-2.349-21.447,4.496-23.796,15.288c-1.293,5.937-2.855,11.885-4.646,17.681
				c-3.261,10.554,2.651,21.752,13.204,25.013c1.967,0.607,3.955,0.896,5.911,0.896c8.54,0,16.448-5.514,19.102-14.102
				c2.126-6.878,3.98-13.937,5.514-20.98C509.492,299.89,502.647,289.236,491.854,286.886z"
      />
      <path
        d="M362.139,444.734c-5.31,2.964-10.808,5.734-16.34,8.233c-10.067,4.546-14.542,16.392-9.996,26.459
				c3.34,7.396,10.619,11.773,18.239,11.773c2.752,0,5.549-0.571,8.22-1.777c6.563-2.964,13.081-6.249,19.377-9.764
				c9.645-5.384,13.098-17.568,7.712-27.212C383.968,442.803,371.784,439.35,362.139,444.734z"
      />
      <path
        d="M236,96v151.716l-73.339,73.338c-7.81,7.811-7.81,20.474,0,28.284c3.906,3.906,9.023,5.858,14.143,5.858
				c5.118,0,10.237-1.953,14.143-5.858l79.196-79.196c3.75-3.75,5.857-8.838,5.857-14.142V96c0-11.046-8.954-20-20-20
				C244.954,76,236,84.954,236,96z"
      />
      <path
        d="M492,43c-11.046,0-20,8.954-20,20v55.536C425.448,45.528,344.151,0,256,0C187.62,0,123.333,26.629,74.98,74.98
				C26.629,123.333,0,187.62,0,256s26.629,132.667,74.98,181.02C123.333,485.371,187.62,512,256,512c0.169,0,0.332-0.021,0.5-0.025
				c0.168,0.004,0.331,0.025,0.5,0.025c7.208,0,14.487-0.304,21.637-0.902c11.007-0.922,19.183-10.592,18.262-21.599
				c-0.923-11.007-10.58-19.187-21.6-18.261C269.255,471.743,263.099,472,257,472c-0.169,0-0.332,0.021-0.5,0.025
				c-0.168-0.004-0.331-0.025-0.5-0.025c-119.103,0-216-96.897-216-216S136.897,40,256,40c76.758,0,147.357,40.913,185.936,106
				h-54.993c-11.046,0-20,8.954-20,20s8.954,20,20,20H448c12.18,0,23.575-3.423,33.277-9.353c0.624-0.356,1.224-0.739,1.796-1.152
				C500.479,164.044,512,144.347,512,122V63C512,51.954,503.046,43,492,43z"
      />
    </svg>
  )
}

export default SvgComponent
