import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import Image from 'next/image'
import sidebar1 from '@/assets/sidebar1.png'

const Sidebar = () => {
  return (
    <Box marginTop={'5px'}>
      <Card>
      <CardActionArea>
        <CardMedia>
          <Image
          src={sidebar1}
          alt="top news"
          width={800}
          />
        </CardMedia>
        <p className="w-[100px] ms-2 bg-red-500 text-white p-2 my-1 rounded">Technology</p>
        <CardContent>
        <Typography gutterBottom fontWeight={'bold'} component="div">
        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it
          </Typography>
          <Typography gutterBottom fontSize={'.8rem'} className="my-3">
          By Awlad Hossain - Mar 18 2023
          </Typography>
               </CardContent>
      </CardActionArea>
    </Card>
    </Box>
  )
}

export default Sidebar
