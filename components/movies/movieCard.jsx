import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link
} from "@mui/material";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

export default function MovieCard(props) {
  return (
    <Card sx={{ maxWidth: 345, height: "800px", mb: "40px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="550"
          image={API_IMG + props.poster_path}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href="/movie/1">
          <Button size="small" color="primary">
            View more
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
