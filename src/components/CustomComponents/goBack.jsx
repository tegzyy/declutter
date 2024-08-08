import React from 'react'
import { HiOutlineArrowNarrowLeft} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'

const GoBack = () => {
  const navigate = useNavigate()
  return (
    <HiOutlineArrowNarrowLeft onClick={() => navigate(-1)} style={{transform: "scale(1.3)", cursor: "pointer"}} />
  )
}

export default GoBack