import React from 'react'
import {Button,Typography,AppBar,Card, CardActions,CardMedia, CssBaseline,Grid,Toolbar,Container} from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './styles'

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
      </main>
    </>
  )
}
