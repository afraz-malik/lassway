import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    padding: '10px',
    // backgroundColor: 'black',
    height: '440px',
    display: 'flex',
    minWidth: '275px',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '60px',
    alignItems: 'center',
  },
  details: {
    height: '95px',
    // whiteSpace: 'nowrap',
    overflow: 'hidden',
    lineHeight: '17px',
    textOverflow: 'ellipsis',
  },
}))
