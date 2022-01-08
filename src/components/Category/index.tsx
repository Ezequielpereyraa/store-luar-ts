import React from 'react'
import { Input, Stack } from '@chakra-ui/react'
import './styles.css'

type categoryProps = {
  nameCategory: string
}

const Category = ({ nameCategory }: categoryProps) => {
  const [isChecked, setIsChecked] = React.useState<Boolean>(false)

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }

  const nameClass = isChecked ? 'active' : 'inactive'

  return (
    <Stack direction='row'>
      <label htmlFor={nameCategory} className={nameClass}>
        {nameCategory}
        <Input display='none' type='checkbox' onChange={handleInput} id={nameCategory} value={nameCategory} bg='GrayText' px='2.5' py='1' />
      </label>
    </Stack>
  )
}

export default Category
