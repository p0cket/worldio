import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import redImg from "../assets/characters/red.png"

const Character = () => {
  const [position, setPosition] = useState({ top: 100, left: 100 })
  const [keys, setKeys] = useState({})
  const requestRef = useRef()

  useEffect(() => {
    const handleKeyDown = (e) => {
      setKeys((prevKeys) => ({ ...prevKeys, [e.key]: true }))
    }

    const handleKeyUp = (e) => {
      setKeys((prevKeys) => ({ ...prevKeys, [e.key]: false }))
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [])

  const moveCharacter = () => {
    setPosition((prevPosition) => {
      let newPosition = { ...prevPosition }
      const movementSpeed = 2

      if (keys["w"] || keys["ArrowUp"]) {
        newPosition.top = Math.max(prevPosition.top - movementSpeed, 0)
      }
      if (keys["s"] || keys["ArrowDown"]) {
        newPosition.top = Math.min(
          prevPosition.top + movementSpeed,
          window.innerHeight - 50
        )
      }
      if (keys["a"] || keys["ArrowLeft"]) {
        newPosition.left = Math.max(prevPosition.left - movementSpeed, 0)
      }
      if (keys["d"] || keys["ArrowRight"]) {
        newPosition.left = Math.min(
          prevPosition.left + movementSpeed,
          window.innerWidth - 50
        )
      }

      return newPosition
    })
    requestRef.current = requestAnimationFrame(moveCharacter)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(moveCharacter)
    return () => cancelAnimationFrame(requestRef.current)
  }, [keys])

  return (
    <motion.div
      className="character absolute cursor-pointer"
      style={{ top: position.top, left: position.left }}
    >
      <img src={redImg} alt="Character" className="w-16 h-16" />
    </motion.div>
  )
}

export default Character
