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
  heading: {
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
              FAQ
            </Typography>
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography className={classes.heading}>
                  How much I have to pay for this services?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Its absolutely FREE!</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography className={classes.heading}>
                  How long is my email ID active?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Email ID is active for you forever. Your emails are deleted
                  every 30 days.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography className={classes.heading}>
                  I've waited more than 15 min but no message arrived!
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Sometimes, there can be some delay due because our servers get
                  swamped with tons of users daily. Just try again after
                  sometime. Also, sometimes some of our domains gets blacklisted
                  because of excessive use, so try creating emails from
                  different domain.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography className={classes.heading}>
                  How many email IDs I can create?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  There is no limit of number of email Ids you can create.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion className={classes.accordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1a-content'
                id='panel1a-header'
              >
                <Typography className={classes.heading}>
                  Is it necessary to download a mobile app or a software to use
                  your service?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  No you do not need any software or app. This is a web-based
                  service that is accessible from everywhere.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </div>
      </Card>
    </Container>
  )
}
