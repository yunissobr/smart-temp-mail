import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Container from '@material-ui/core/Container'
import data from '../data'
import Box from '../box.svg'
import DraftsIcon from '@material-ui/icons/Drafts'
import SingleMail from './SingleMail'
import LinearProgress from '@material-ui/core/LinearProgress'
import LoopIcon from '@material-ui/icons/Loop'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  typo: {
    padding: 10,
  },
  loadingTxt: {
    paddingBottom: 10,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  classes: {
    marginTop: 100,
  },
  loopIconContainer: {
    textAlign: 'center',
    padding: '6rem 4rem 9rem;',
  },
  loopIcon: {
    fontSize: 100,
    marginRight: 'auto',
  },
  iconDraftContainer: {
    border: '2px solid #afc0cd',
    margin: '.6rem',
    borderRadius: ' 5px',
    padding: '3rem 4rem 3rem',
    textAlign: ' center',
    borderStyle: ' dashed',
  },
  iconDraft: {
    width: '10rem',
    color: 'red',
  },
  emptyBox: {
    color: '#14446e9e',
    marginTop: '10px',
  },
}))

const url = 'https://www.yuniss.com/azull/api/read/'

export default function RecipeReviewCard() {
  const classes = useStyles()
  const [mails, setMails] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  const loadMails = async () => {
    setIsLoading(true)
    let headers = new Headers()
    let actualUrl = url.concat(localStorage.getItem('current_email'))
    headers.append('Origin', '*')
    fetch(actualUrl, {
      mode: 'cors',
      method: 'POST',
      mode: 'no-cors',
      headers: headers,
    })
      .then((response) => {
        console.log(JSON.parse(response.text()))
        return response.text()
      })
      .then((data) => {
        // console.log(json.data)
        setMails(data ? JSON.parse(data) : {})
        setIsLoading(false)
      })
      .catch((error) => {
        console.log('Loading failed : ' + error.message)
        setIsLoading(false)
      })
  }

  React.useEffect(() => {
    loadMails()
  }, [])

  return (
    <>
      <Container maxWidth='sm' className={classes.pos}>
        <Card className={classes.root}>
          {isLoading ? (
            <>
              <div className={classes.loopIconContainer}>
                {/* <LoopIcon className={classes.loopIcon} /> */}
                <Typography
                  variant='h5'
                  className={classes.loadingTxt}
                  component='h2'
                >
                  Waiting for emails
                </Typography>
                <LinearProgress />
              </div>
            </>
          ) : mails.length > 1 ? (
            mails.map((item) => {
              if (item.mail_from !== '') {
                return <SingleMail key={item.id} mailItem={item} />
              }
            })
          ) : (
            <div className={classes.iconDraftContainer}>
              <img src={Box} className={classes.iconDraft} />
              <Typography
                variant='h5'
                className={classes.emptyBox}
                component='h2'
              >
                Your inbox is empty
              </Typography>
            </div>
          )}
        </Card>
      </Container>
    </>
  )
}
