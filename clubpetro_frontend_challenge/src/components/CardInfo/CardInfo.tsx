import React, { ChangeEvent } from 'react'

import {MdEdit, MdClose} from 'react-icons/md'

import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton';
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Divider
}
  from '@material-ui/core'

export interface CardProps {
  countryProp?: string
  localProp?: string
  goalProp?: string
  flagImg?: string
  dropCard?: () => void
  editCard?: () => void
  editLocal?: (e: ChangeEvent<HTMLInputElement>) => void
  editGoal?: (e: ChangeEvent<HTMLInputElement>) => void
}

const useStyles = makeStyles({

  mainCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 250,
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    marginBottom: 20
  },
  mainCard2: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 250,
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    marginBottom: 20
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  iconsContainer: {
    display: 'flex',
    alignSelf: 'flex-end'
  },
  button: {
    fontSize: 8
  },
  divider: {
    marginBottom: 30,
  },
  media: {
    width: 55,
    height: 35,
  }
});

const CardInfo: React.FC<CardProps> = ({
  countryProp,
  localProp,
  goalProp,
  flagImg,
  dropCard,
  editCard
}) => {
  const classes = useStyles()
  return (
    <>
      <Card className={classes.mainCard}>
        <CardActions className={classes.topContainer}>
          <CardMedia
            className={classes.media}
            image={flagImg}
          />
          <CardActions className={classes.iconsContainer}>
            <IconButton onClick={editCard}>
              <MdEdit size={24}/>
            </IconButton>
            <IconButton onClick={dropCard}>
              <MdClose size={24}/>
            </IconButton>
          </CardActions>
        </CardActions>
        <CardContent>
          <Typography
            style={{
              color: "#4F9419",
              textTransform: 'uppercase',
              margin: 3
            }} gutterBottom>
            {countryProp}
          </Typography>
          <Divider className={classes.divider} />
          <Typography>
            Local: {localProp}
          </Typography>
          <Typography>
            Meta: {goalProp}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default CardInfo