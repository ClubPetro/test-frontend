import React, { ChangeEvent } from 'react'

import {MdDone, MdClose} from 'react-icons/md'

import InputMask from 'react-input-mask'
import { InputText, CardEditContainer } from '../../pages/styles'

import { makeStyles } from '@material-ui/core/styles';

import {
    Card,
    Typography,
    CardContent,
    Divider
}
    from '@material-ui/core'

export interface CardEditProps {
    countryProp?: string
    localProp?: string
    goalProp?: string
    flagImg?: string
    cancelEdit?: () => void
    editCard?: () => void
    editLocal?: (e: ChangeEvent<HTMLInputElement>) => void
    editGoal?: (e: ChangeEvent<HTMLInputElement>) => void
}

const useStyles = makeStyles((theme) => ({

    mainCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 250,
        height: 250,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 15,
        marginBottom: 20
    },
    topContainer: {
        display: 'flex',
        justifyContent: 'flex-start',

    },
    iconsContainer: {
        display: 'flex',
        alignSelf: 'flex-end'
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        width: '100%',
        height: 24
    },

    button: {
        fontSize: 14,
        width: 32,
        height: 24,
        margin: 8,
        padding: 2,
        borderRadius: 3,
        backgroundColor: '#fff',
        borderWidth: .2,
        borderColor: '#222',
        outlineWidth: .2,
        outlineColor: '#222'
    },
    divider: {
        marginBottom: 4,
    },
    media: {

        width: 55,
        height: 35,
        margin: 10
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 150,
            height: 30
        }
    }
}));

const CardEdit: React.FC<CardEditProps> = ({
    countryProp,
    cancelEdit,
    editCard,
    editGoal,
    editLocal
}) => {
    const classes = useStyles()
    return (
        <>
            <Card className={classes.mainCard}>
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
                    <CardEditContainer>
                        <InputText
                            placeholder='Editar local'
                            onChange={editLocal}
                            maxLength={24}
                            style={{
                                width: 180,
                                backgroundColor: '#f3f3f3',
                                margin: 10,
                                height: 32,
                                borderRadius: 3,
                            }}
                        />
                        <InputMask
                            placeholder='Editar mês/ano'
                            onChange={editGoal}
                            mask='99/2099'
                            style={{
                                width: 180,
                                backgroundColor: '#f3f3f3',
                                height: 32,
                                borderRadius: 3,
                                padding: 12,
                                margin: 10,
                                border: 'none',
                                outline: 'none'
                            }}
                        />
                        <div className={classes.buttonsContainer}>
                            <button className={classes.button} onClick={editCard} >
                                <MdDone size={18}/>
                            </button>
                            <button className={classes.button} onClick={cancelEdit}>
                                <MdClose size={18} color='#FF0000'/>
                            </button>
                        </div>
                    </CardEditContainer>
                </CardContent>
            </Card>
        </>
    )
}

export default CardEdit