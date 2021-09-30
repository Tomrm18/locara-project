import {FC, useEffect, useRef } from 'react';
import Typed from 'typed.js'

const Typing:FC = () => {

  const el = useRef(null)

  useEffect(() => {
    const typed:any = new Typed(el.current, {
      strings: ["Honda..", "Kia..", "Toyota.."],
      startDelay: 3000,
      typeSpeed: 95,
      backSpeed: 85,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      shuffle: false,
      showCursor: false,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <div className="typing-span">Try Searching <span ref={el}></span></div>
  )
}

export default Typing
