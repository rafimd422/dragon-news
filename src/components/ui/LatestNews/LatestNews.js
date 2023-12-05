import { Box, Grid } from "@mui/material"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import topNews from '@/assets/Bitcoin.png'
import topNews2 from '@/assets/topnews2.png'
import topNews3 from '@/assets/topnews3.png'
import topNews4 from '@/assets/topnews4.png'
import topnews5 from '@/assets/topnews5.png'
import Image from "next/image";

const LatestNews = () => {
  return (
<Box sx={{my:'5px'}}>
<Card>
      <CardActionArea>
        <CardMedia>
          <Image 
          src={topNews}
          alt="top news"
          width={800}
          />
        </CardMedia>
        <p className="w-[100px] ms-2 bg-red-500 text-white p-2 my-4 rounded">Technology</p>
        <CardContent>
        <Typography gutterBottom variant="h5" fontWeight={'bold'} component="div">
            Bitcoin climbs as Elon Musk Says Tesla Likely to accept it Again
          </Typography>
          <Typography gutterBottom variant="p" className="my-3">
By Tanmoy Parvez - Mar 18 2023</Typography>

<Typography variant="body2" color={'text.secondary'}>
It is a long established fact that a reader will be distracted by the readable content of a page when looging at its layout.........
</Typography>
               </CardContent>
      </CardActionArea>
    </Card>



    <Grid container rowSpacing={1} marginY={'1rem'} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <Card>
      <CardActionArea>
        <CardMedia>
          <Image 
          src={topNews}
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

  </Grid>
  <Grid item xs={6}>
  <Card>
      <CardActionArea>
        <CardMedia>
          <Image 
          src={topNews2}
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

  </Grid>
  <Grid item xs={6}>
  <Card>
      <CardActionArea>
        <CardMedia>
          <Image 
          src={topNews3}
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

  </Grid>
  <Grid item xs={6}>
  <Card>
      <CardActionArea>
        <CardMedia>
          <Image 
          src={topNews4}
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

  </Grid>


</Grid>

</Box>
  )
}

export default LatestNews
