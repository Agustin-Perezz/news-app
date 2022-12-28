import {
  Box,
  Grid,
  Skeleton,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';

export const LoadingSkeleton: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 3 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 0, sm: 8, md: 12 }}
        justifyContent="center"
      >
        {Array(6)
          .fill(0)
          .map((__, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Grid item xs={2} sm={4} md={3.5} key={index}>
              <Card sx={{ height: '448px' }}>
                <CardMedia>
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="100%"
                    height="170px"
                  />
                </CardMedia>
                <CardContent>
                  <Skeleton
                    variant="rounded"
                    animation="wave"
                    width="90%"
                    height="25px"
                    sx={{ marginTop: '10px' }}
                  />
                  <Skeleton
                    animation="wave"
                    width="100%"
                    height="18px"
                    sx={{ marginY: '5px', marginTop: '18px' }}
                  />
                  <Skeleton animation="wave" width="90%" height="18px" />
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-start',
                      gap: '5px',
                      marginTop: '15px',
                    }}
                  >
                    <Skeleton animation="wave" width="20%" height="18px" />
                    <Skeleton animation="wave" width="40%" height="18px" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};
