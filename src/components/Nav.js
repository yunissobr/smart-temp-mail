import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { Link } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu';
import logo from '../logo1.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  palette: {
    primary: '#14446E',
    // secondary: pink,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  logo: {
    marginTop: '10px',
    width: '120px',
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          ></IconButton>
          <Link to='/' className={classes.link}>
            <img src={logo} className={classes.logo} alt='fireSpot' />
          </Link>
          <Typography variant='h6' className={classes.title}></Typography>
          <Link to='/' className={classes.link}>
            <Button color='inherit'>HOME</Button>
          </Link>
          <Link to='/faq' className={classes.link}>
            <Button color='inherit'>FAQ</Button>
          </Link>
          <Link to='/privacypolicy' className={classes.link}>
            <Button color='inherit'>Privacy Policy</Button>
          </Link>
          <Link to='/about' className={classes.link}>
            <Button color='inherit'>About</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}
