import { getAllCategories } from '@/app/utils/getAllCategories'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import Link from 'next/link'

const CategoryList = async() => {
const {data: allCategories} = await getAllCategories()
  return (
    <Box className='mt-5 bg-gray-100 px-4 py-5'>
      <Typography>
<Divider />
<Stack rowGap={1} marginTop={2.5}>
{
    allCategories.map((category) => (
        <Button variant='outlined' key={category.id}>
        <Link href={category.title}>
        {category.title} 
        </Link>
        </Button>
    ))
}
</Stack>
      </Typography>
    </Box>
  )
}

export default CategoryList
