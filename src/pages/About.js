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
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import Snackbar from '@material-ui/core/Snackbar'

const url = 'https://www.smarttempmail.com/azull/api/read/'
const urlCreate = 'https://www.smarttempmail.com/azull/api/create'
const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    flexGrow: 1,
  },
  card: {
    marginTop: '3rem',
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
  p: {
   marginTop:'1rem',
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordion: {
    marginTop: '1rem',
  },
}))

export default function SimpleCard() {
  const classes = useStyles()

  return (
    <Container maxWidth='sm' className={classes.pos}>
      <Card className={classes.card}>
        <div className={classes.cardContent}>
          <CardContent>
            <Typography variant='h5' component='h2'>
              Welcome to SmartTempMail
            </Typography>
            <Typography className={classes.p}>
              STMAIL is a service that allows to receive email at a temporary
              address that self-destructed after a certain time elapses. It is
              also known by names like : tempmail, 10minutemail, throwaway
              email, fake-mail or trash-mail. Many forums, Wi-Fi owners,
              websites and blogs ask visitors to register before they can view
              content, post comments or download something. STMAIL is most
              advanced throwaway email service that helps you avoid spam and
              stay safe
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Container>
  )
}
