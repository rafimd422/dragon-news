import { getSingleNews } from '@/app/utils/getSingleNews'
import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'

const NewsDetailsPage = async({params}) => {
const {data:news} = await getSingleNews(params.newsId)


  return (
    <Box className='my-4'>
<Container>
<Grid container marginTop={'1rem'} spacing={2}>
  <Grid item lg={6}>
    <Image 
    src={news.thumbnail_url}
    alt='news'
    width={500}
    height={100}
    />
    <Grid container marginTop={'1rem'} spacing={2}>
  <Grid item lg={6}>
    <Image 
    src={news.thumbnail_url}
    alt='news'
    width={800}
    height={500}
    />
  </Grid>
  <Grid item lg={6}>
  <Image 
    src={news.image_url}
    alt='news'
    width={500}
    height={100}
    />  </Grid>

</Grid>
  </Grid>
  <Grid item lg={6}>
    <Typography variant='h5' component={'h2'}>
{news.title}
    </Typography>
    <Box sx={{display:'flex', gap:'8px', alignItems:'center'}}>
<Avatar src={news.author.img} alt='author' />
<Typography variant='p'>
By {news.author.name}
    </Typography>
<Typography >
- {news.author.published_date}
    </Typography>
    </Box>
    <Typography sx={{textAlign:'justify', whiteSpace: 'pre-line', my:'10', color:'gray'}} variant='p'>
{news.details}    </Typography>


<Typography variant='h6'>
``Many desktop publishing packages and web page editors now use as their default model text!
</Typography>
<Typography variant='h6'>
- {news.author.name}
</Typography>


  </Grid>

</Grid>
    </Container>    </Box>
  )
}

export default NewsDetailsPage
