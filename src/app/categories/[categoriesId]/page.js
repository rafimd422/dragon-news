"use client";
import { getCategoryNews } from "@/app/utils/getCategoryNews";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
const DynamicNewsPage = async ({ params, searchParams }) => {
  const { data } = await getCategoryNews(searchParams.category.toLowerCase());
  return (
    <Box className="my-5">
      <Grid
        container
        rowSpacing={1}
        marginY={"1rem"}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.map((news) => (
          <Grid key={news.id} item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "250px",
                    },
                  }}
                >
                  <Image
                    src={news.thumbnail_url}
                    alt="top news"
                    width={800}
                    height={100}
                  />
                </CardMedia>
                <p className="w-fit mx-1 bg-red-500 text-white p-2 my-1 rounded">
                  {news.category}
                </p>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    fontWeight={"bold"}
                    component="div"
                  >
                    {news.title.slice(0, 30)}...
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By {news.author.name} - {news.author.published_date}
                  </Typography>

                  <Typography variant="body2" color={"text.secondary"}>
                    {news.details.length > 200
                      ? news.details.slice(0, 200) + "..."
                      : news.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DynamicNewsPage;
