import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  cartitemss: {
    display: 'flex',
    // backgroundColor: 'pink',
    justifyContent: 'space-between',
    padding: '0px 30px  0 0',
    alignItems: 'center',
    height: '100px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      height: '150px',
    },
  },
  insideCartItmes: {
    display: 'flex',
    // backgroundColor: 'pink',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    // padding: '0px 30px  0 0',
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      // flexDirection: 'column',
      // height: '150px',
    },
  },
  media: {
    height: 260,
    width: 200,
    marginRight: '10px',
  },
  cardContent: {
    // display: 'flex',
    // justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      float: 'right',
      // height: '150px',
    },
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  cartRows: {
    display: 'flex',
  },
}))
