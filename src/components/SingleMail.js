import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import { green, red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'

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
}))

export default function SingleMail({ mailItem }) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction='up' ref={ref} {...props} />
  // })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const { id, mail_from, subject, date, html } = mailItem
  return (
    <>
      <CardHeader
        onClick={() => handleClickOpen()}
        key={id}
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            {mail_from.charAt(0).toUpperCase()}
          </Avatar>
        }
        action={<Button onClick={handleClickOpen} color='primary'>
        View
      </Button>}
        title={subject}
        subheader={date}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth='md'
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'From:'} {mail_from}
        </DialogTitle>
        <DialogContent>
          {<div dangerouslySetInnerHTML={{ __html: html }}></div>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary' autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
