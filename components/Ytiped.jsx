import React, { useEffect} from 'react'
import { init } from 'ityped'


export default function Ytiped() {
  useEffect(()=>{
    const myElement = document.querySelector('#myElement')
    init(myElement, { showCursor: false, strings: ['Elias Rodriguez'] })
  })
  return (
    
      <h1 id="myElement" style={{color:"#fff", borderBottom:"1px solid #FF1433", margin:"10px", fontSize:"2.3rem"}}></h1>
    
  )
}
