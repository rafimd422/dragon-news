'use client'
import { Box, Container, Typography } from "@mui/material"
import Image from "next/image"
import headerImg from '@/assets/theDragonNews.png'
import moment from "moment/moment"

const Header = () => {
  return (
<Box paddingY={'2rem'}>
    <Container align='center'>
<Image 
width={380}
height={500}
src={headerImg}
alt="BrandImage"
/>
<Typography color={'#706F6F'} marginY={'1rem'} fontSize={'.9rem'}>
Journalism Without Fear or Favour
</Typography>
<Typography color={'#403F3F'} fontWeight={'bold'} marginTop={'1rem'} fontSize={'1.15rem'}>
{moment().format('LLLL')}
</Typography>
    </Container>
</Box>
  )
}

export default Header
