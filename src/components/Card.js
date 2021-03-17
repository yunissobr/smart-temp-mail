import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Grid from '@material-ui/core/Grid'
import DeleteIcon from '@material-ui/icons/Delete'
import RefreshIcon from '@material-ui/icons/Refresh'
import DraftsIcon from '@material-ui/icons/Drafts'
import Alert from '@material-ui/lab/Alert'
import emailId from '../constants/EmailId'
import Snackbar from '@material-ui/core/Snackbar'

const url = 'https://www.yuniss.com/azull/api/read/'
const urlCreate = 'https://www.yuniss.com/azull/api/create'
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    flexGrow: 1,
  },
  card: {
    minWidth: 275,
    flexGrow: 1,
  },
  cardContent: {
    minWidth: 275,
    flexGrow: 1,
    border: '2px solid #14446e57',
    margin: '.6rem',
    padding: '.7rem',
    borderStyle: 'dashed',
    borderRadius: '6px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    marginTop: 30,
  },
  inputField: {
    marginBottom: 12,
    marginTop: 30,
    width: 300,
  },
  alert: {
    marginBottom: -30,
    marginTop: 10,
  },
  mt: {
    marginTop: 42,
  },
})

export default function SimpleCard() {
  const classes = useStyles()
  const [emailInput, setemailInput] = React.useState('')
  const [isError, setIsError] = React.useState(false)
  const [showAlert, setShowAlert] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [alertMsg, setAlertMsg] = React.useState('')
  const [currentMail, setCurrentMail] = React.useState('')

  const atempCreate = async () => {
    setIsLoading(true)
    let headers = new Headers()

    headers.append('Origin', 'http://localhost:3000')
    fetch(urlCreate, {
      mode: 'cors',
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        mail_to: emailInput + emailId,
        mail_from: '',
        subject: '',
        message: '',
        date: '',
        time: '',
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false)
        if (json.code === 200) {
          setIsError(false)
          setShowAlert(true)
          setAlertMsg('Email Created Successfully')
          setCurrentMail(emailInput + emailId)
          localStorage.setItem('current_email', emailInput + emailId)
        }
      })
      .catch((error) => {
        console.log('Authorization failed : ' + error.message)
        setIsLoading(false)
      })
  }
  const handleCreate = () => {
    console.log(emailInput)
    if (emailInput === '') {
      setIsError(true)
      setShowAlert(true)
      setAlertMsg('Please enter a valid value!')
    } else {
      setShowAlert(false)
      atempCreate()
    }
  }
  const handleTextField = (e) => {
    setemailInput(e.target.value)
  }

  const copyEmailValue = () => {
    setIsError(false)
    setShowAlert(true)
    setAlertMsg(`${currentMail} copied!`)
    navigator.clipboard.writeText(currentMail)
  }

  const handleClose = () => {
    setShowAlert(false)
  }

  const handleDelete = () => {
    localStorage.clear()
    window.location.reload()
  }

  React.useEffect(() => {
    if (localStorage.getItem('current_email')) {
      setCurrentMail(localStorage.getItem('current_email'))
    }
  }, [])

  return (
    <Container maxWidth='sm' className={classes.pos}>
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Alert onClose={handleClose} severity={isError ? 'error' : 'success'}>
          {alertMsg}
        </Alert>
      </Snackbar>
      <Card className={classes.card}>
        <div className={classes.cardContent}>
          <CardContent>
            <Typography variant='h5' component='h2'>
              Your email address
            </Typography>
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Grid container justify='center' spacing={3}>
                  <Grid key={0} item>
                    <TextField
                      id='standard-adornment-weight'
                      className={classes.inputField}
                      label={
                        currentMail === '' ? 'type your email' : 'your email'
                      }
                      disabled={currentMail != ''}
                      value={currentMail === '' ? emailInput : currentMail}
                      onChange={handleTextField}
                      InputProps={
                        currentMail === ''
                          ? {
                              endAdornment: (
                                <InputAdornment position='end'>
                                  {emailId}
                                </InputAdornment>
                              ),
                            }
                          : null
                      }
                    />
                  </Grid>
                  <Grid key={1} item>
                    <Button
                      onClick={() => {
                        {
                          currentMail === '' ? handleCreate() : copyEmailValue()
                        }
                      }}
                      disabled={isLoading}
                      className={classes.mt}
                      variant='contained'
                      color='primary'
                    >
                      {currentMail === '' ? 'Create' : 'Copy'}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => window.location.reload()}
              variant='contained'
              color='primary'
              size='small'
              className={classes.button}
              startIcon={<RefreshIcon />}
            >
              Update Inbox
            </Button>
            {currentMail !== '' ? (
              <Button
                size='small'
                variant='contained'
                color='secondary'
                onClick={handleDelete}
                className={classes.button}
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            ) : null}
          </CardActions>
        </div>
      </Card>
    </Container>
  )
}
