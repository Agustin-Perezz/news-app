import {
  Box,
  Grid,
  Skeleton,
  Card,
  CardContent,
  CardMedia,
  Fade,
} from '@mui/material';
import { CustomGrid } from '../Cards';

export const LoadingSkeleton: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      <Grid sx={{ flexGrow: 1, margin: '25px 0px' }}>
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: 'center',
            display: 'flex',
            position: 'relative',
          }}
        >
          <CustomGrid container spacing={3}>
            {Array(5)
              .fill(0)
              .map((__, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Grid key={index} item>
                  <Fade timeout={1500} in>
                    <Card sx={{ height: '448px', width: '278px' }}>
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
                          <Skeleton
                            animation="wave"
                            width="20%"
                            height="18px"
                          />
                          <Skeleton
                            animation="wave"
                            width="40%"
                            height="18px"
                          />
                        </Box>
                      </CardContent>
                    </Card>
                  </Fade>
                </Grid>
              ))}
          </CustomGrid>
        </Grid>
      </Grid>
    </Box>
  );
};
