import React, { useState } from 'react'
import { LocationModel } from '../App'
import TextField from '@material-ui/core/TextField'
import InputMask from 'react-input-mask'

interface FuncProps {
    country: string,
    location: string,
    flag: string,
    plan: string,
    id: string,
    deleteHandler: Function,
    locationsItens: LocationModel[],
    setLocationsItens(arg: Object): void
}



const Locations: React.FC<FuncProps> = ({ country, location, flag, plan, id, deleteHandler, locationsItens, setLocationsItens }) => {
    const [clickEdit, setClickEdit] = useState<boolean>(false)

    const [locationEdit, setLocationEdit] = useState<string>(location)
    const [planEdit, setPlanEdit] = useState<string>(plan)

    const editHandler: Function = (id: string) => {
        setClickEdit(true)
    }

    const saveHandler: Function = (id: string) => {
        const newList = locationsItens.map((i) => {
            if (i.id === id) {
                return {
                    ...i,
                    location: locationEdit,
                    plan: planEdit
                }
            } else {
                return i
            }
        })
        console.log(newList)
        
        setLocationsItens(newList)
        setClickEdit(false)
    }

    return (
        <div className="locations_item">
            <div className="locations_item_buttons">
                {clickEdit ? <img onClick={() => saveHandler(id)} className="locations_item_buttons_img" alt="save" src="img/save_button.svg" /> : <img onClick={() => editHandler(id)} className="locations_item_buttons_img" alt="edit" src="img/edit_button.svg" />}
                <img onClick={() => deleteHandler(id)} className="locations_item_buttons_img" alt="delete" src="img/del_button.svg" />
            </div>

            { clickEdit ?
                <div>
                    <img alt={country} src={flag} />
                    <h2>{country}</h2>
                    <div className="locations_item_line"></div>
                    <div className="locations_item_description">
                        <div className="edit_form">
                            <p>Local:</p>
                            <TextField
                                id="standard-basic location"
                                value={locationEdit}
                                className="edit_form_field"
                                onChange={(e: React.ChangeEvent<{ value: any }>) => setLocationEdit(e.target.value)}
                            />
                        </div>
                        <div className="edit_form">
                            <p>Meta:</p>
                            <InputMask
                                mask="99/9999"
                                maskChar={null}
                                value={planEdit}
                                onChange={(e: React.ChangeEvent<{ value: any }>) => setPlanEdit(e.target.value)}
                            >
                                {(inputProps) => <TextField {...inputProps}
                                    className="edit_form_field"
                                    placeholder="mês/ano"
                                    id="standard-basic plan"
                                    InputLabelProps={{ shrink: true }}
                                />
                                }
                            </InputMask>
                        </div>
                    </div>
                </div> :
                <div>
                    <img alt={country} src={flag} />
                    <h2>{country}</h2>
                    <div className="locations_item_line"></div>
                    <div className="locations_item_description">
                        <p>Local: {location}</p>
                        <p>Meta: {plan}</p>
                    </div>
                </div>
            }

        </div>
    )
}

export default Locations