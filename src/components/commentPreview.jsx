import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Slider from "react-slick";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
const CommentPreview = () => {
  console.log(window.innerWidth > 600);
  const useStyles = makeStyles({
    container: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: window.innerWidth < 600 ? "column" : "row",
    },
    root: {
      margin: 5,
      backgroundColor: "#fcba03",
      width: 300,
    },

    title: {
      fontSize: 14,
    },
  });
  const comments = [
    {
      poster: "Ээж нь",
      comment: "Охиндоо маш их хайртай шүү. Сайн хүн болоод балбллбла",
    },
    {
      poster: "Аав нь",
      comment: "ХАхаххахахахохоох хохохохухухху хухух хүхүхүх хихихих",
    },
    {
      poster: "Аав нь",
      comment: "ХАхаххахахахохоох хохохохухухху хухух хүхүхүх хихихих",
    },
    {
      poster: "Аав нь",
      comment: "ХАхаххахахахохоох хохохохухухху хухух хүхүхүх хихихих",
    },
    {
      poster: "Авга ах Намуунаа",
      comment: "Хэлэх үг алга",
    },
  ];
  const classes = useStyles();
  const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    dots: true,
    speed: 500,
    slidesToShow: 2,
    // slidesToScroll: 1,
    // autoplaySpeed: 3000,
    // autoplay: true,
    easing: "linear",
    pauseOnFocus: true,
    pauseOnHover: true,
  };
  return (
    <Slider {...sliderSettings}>
      {comments.map((cmt) => (
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {cmt.poster}
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              {cmt.comment}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Slider>
  );
};

export default CommentPreview;
