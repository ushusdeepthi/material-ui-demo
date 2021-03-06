import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
  container:{
    backgroundColor:theme.palette.background.paper,
    padding:theme.spacing(8,0,6)
  },
  icon:{
    marginRight:'1rem'
  },
button:{
marginTop:'2rem'
},

cardGrid:{
  padding: '1rem 0'
},
card:{
  height:'100%',
  display:'flex',
  flexDirection:'column'
},
cardMedia:{
  paddingTop:'56.25%'
},
cardContent:{
  flexGrow:'1'
},
footer:{
  backgroundColor:'theme.palette.background.paper',
  padding: '2rem 0',
}
})) 

export default useStyles;