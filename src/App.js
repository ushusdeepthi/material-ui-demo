import React from 'react'
import {Button,Typography,AppBar,Card, CardActions,CardContent, CardMedia, CssBaseline,Grid,Toolbar,Container} from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './styles'
const cards= [1,2,3,4,5,6,7,8,9]

export default function App() {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <AppBar position ="relative">
        <Toolbar>
          <PhotoCamera className= {classes.icon}/>
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className ={classes.container} >
          <Container maxWidth="sm">
            <Typography variant ="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant ="h5" align="center" color="textsecondary" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, laboriosam.
            </Typography>
            <div  className={classes.button}>
              <Grid container spacing ={2} justify ="center">
                <Grid item>
                  <Button variant ="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant ="outlined" color="primary">
                    Secondary
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md" >
          <Grid container spacing={4} >
            {cards.map ((index)=>{
                  return(
                  <Grid item xs={12} sm={6} md={4} key ={index}>
                    <Card className={classes.card}>
                      <CardMedia 
                        className={classes.cardMedia} 
                        image="https://source.unsplash.com/random"
                        title="Image Title"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5">
                          Card Title
                        </Typography>
                        <Typography gutterBottom >
                          Here goes the content of the card. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, obcaecati!
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">View</Button>
                        <Button size="small" color="primary">Edit</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  )
                })}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
          <Typography variant ="h6" align ="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant ="subtitle1" align ="center" color="textsecondary">
            The footer goes here!
          </Typography>
      </footer>
    </>
  )
}
