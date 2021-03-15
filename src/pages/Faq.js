import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Faq from '../constants/FAQ'

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
            {Faq.map((singleFaq) => {
              const { id, question, answer } = singleFaq
              return (
                <Accordion className={classes.accordion} key={id}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                  >
                    <Typography className={classes.heading}>
                      {question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </CardContent>
        </div>
      </Card>
    </Container>
  )
}
