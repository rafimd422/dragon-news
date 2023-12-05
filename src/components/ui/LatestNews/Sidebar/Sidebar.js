import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <Box>
      <Card>
      <CardActionArea>
        <CardMedia>
          <Image
          src={''}
          alt="top news"
          width={800}
          />
        </CardMedia>
        <p className="w-[100px] ms-2 bg-red-500 text-white p-2 my-1 rounded">Technology</p>
        <CardContent>
        <Typography gutterBottom fontWeight={'bold'} component="div">
            Bitcoin climbs as Elon Musk Says Tesla Likely to accept it Again
          </Typography>
          <Typography gutterBottom className="my-3">
By Tanmoy Parvez - Mar 18 2023</Typography>

<Typography variant="body2" color={'text.secondary'}>
It is a long established fact that a reader will be distracted by the readable content of a page when looging at its layout.........
</Typography>
               </CardContent>
      </CardActionArea>
    </Card>
    </Box>
  )
}

export default Sidebar
