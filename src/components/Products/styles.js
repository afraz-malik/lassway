import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
    height: '250px',
  },
  category: {
    fontFamily: 'Stylish, sans-serif',
    textTransform: 'uppercase',
    fontSize: '42px',
    margin: '22px 0px 32px 0',
    borderBottom: '1px solid grey',
  },
  main_category: {
    fontFamily: 'Stylish, sans-serif',
    textTransform: 'uppercase',
    fontSize: '62px',
    textAlign: 'center',
    margin: '22px 0px 32px 0',
    borderBottom: '1px solid grey',
  },
}))
