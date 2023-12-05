import CategoryList from "@/components/ui/CategoryLIst/CategoryList";
import { Box, Container, Grid } from "@mui/material";

const CategoriesLayout = ({children}) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2} paddingTop={"1rem"}>
          <Grid item xs={4}>
           <CategoryList />
          </Grid>
          <Grid item xs={8}>
{children}         
</Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoriesLayout;
