import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {AddShoppingCart} from '@mui/icons-material';
import accounting from "accounting";
import "./Product.css"


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            B&H
          </Avatar>
        }
        action={
            <Typography 
            variant='h5'
            color='textSecondary'
            >
            {accounting.formatMoney(5000, "$")}
          </Typography>
        }
        title='BOINAS'
        subheader="En Stock"
      />
      <CardMedia
        component="img"
        height="300"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYLDpPtDLpdYq83qT2pMoDFG2Iu4Z88eBLIA&usqp=CAU"
        alt="Boina 30's"
        title="Boina 30's"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Gorra Irlandesa -  Boina
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {Array(4)
        .fill()
        .map((_, i)=>(
            <p>&#11088;</p>
        ))}
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Descripcion del Modelo:</Typography>
          <Typography paragraph>
            "Talle:Large"
            "Color: Gris"
          </Typography>
          <Typography>
          Tipos de sombreros de la década de los 20 de hombre · Sombrero Canotier · Sombrero Homburg · Gorra Irlandesa · Sombrero Fedora · Sombrero Bombín.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
