import { Box } from '@mui/material'
import React from 'react'
import Card from "./Card"

export default function Feed() {
  return (
    <Box  flex={4}p={2}
    backgroundColor="#e4ede6">
      < Card />
      < Card />
      < Card />
      < Card />
      </Box>
  )
}
