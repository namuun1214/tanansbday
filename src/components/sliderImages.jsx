import Slider from 'react-slick'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    imgContainer: {
        width: '400px'
    }
})

const SliderImages = () => {
    const classes = useStyles()
    const imagePaths = ['images/1.JPG', 'images/1.JPG', 'images/1.JPG', 'images/1.JPG']
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return <Slider {...sliderSettings}>
        {imagePaths.map(img => (
            <img src={img} alt={img} className={classes.imgContainer} />
        ))}
    </Slider>
}

export default SliderImages
