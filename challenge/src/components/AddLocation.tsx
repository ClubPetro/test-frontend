import React, { useState, useEffect } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import InputMask from 'react-input-mask'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { LocationModel } from '../App'
import { v4 as uuidv4 } from 'uuid'


interface FuncProps {
    setLocationsItens(arg: Object): void
    locationsItens: LocationModel[]
}

const AddLocation: React.FC<FuncProps> = (props) => {
    const [country, setCountry] = useState<string>('')
    const [countryFlag, setCountryFlag] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [plan, setPlan] = useState<string>('')
    const [countryList, setCountryList] = useState<CountryObject[]>([])

    

    const formHandler = (e) => {
        e.preventDefault()
        if (!country && !location && !plan) {
            
        } else {
            const id: string = uuidv4()
            props.setLocationsItens([...props.locationsItens, {country, location, plan, countryFlag, id}])
            setCountry('')
            setCountryFlag('')
            setLocation('')
            setPlan('')
        }
    }

    useEffect(() => {
        async function fetchCountryList() {
            try {
                const response = await axios.get('https://restcountries.eu/rest/v2/all')
                const listedCountries: CountryObject[] = response.data
                setCountryList(() => listedCountries)
            }
            catch (error) {
                console.log('API com erro.');
                
            }
        }

        fetchCountryList()
    }, [])

    interface CountryObject {
        translations: TranslationsLanguages,
        flag: string
    }

    interface TranslationsLanguages {
        pt: string
    }

    return (
        <div className="add_location_section">
            <form className="add_location_form" onSubmit={(e: React.FormEvent<HTMLFormElement>) => formHandler(e)}>
                <FormControl >
                    <InputLabel shrink id="demo-simple-select-label">País</InputLabel>
                    <Select
                        labelId="demo-simple-select-placeholder-label"
                        id="demo-simple-select-placeholder-label"
                        value={country}
                        displayEmpty
                        onChange={(e: React.ChangeEvent<{ value: any }>) => {
                            const countryValue = e.target.value

                            const countryObject: CountryObject[] = countryList.filter((i: CountryObject) => i.translations.pt === countryValue)                      
                            
                            setCountry(countryValue)
                            setCountryFlag(countryObject[0].flag)
                        }}
                    >
                        <MenuItem value=""><em>Selecione...</em></MenuItem>
                        {countryList.map((country: CountryObject) => {
                            return (
                                <MenuItem value={country.translations.pt} key={country.flag}>{country.translations.pt}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
                <TextField 
                placeholder="Digite o local que seja conhecer"
                id="standard-basic" 
                label="Local" 
                value={location}
                    onChange={(e: React.ChangeEvent<{ value: any }>) => setLocation(e.target.value)}
                    InputLabelProps={{ shrink: true }}
                />
                <InputMask
                    mask="99/9999"
                    maskChar={null}
                    value={plan}
                    onChange={(e: React.ChangeEvent<{ value: any }>) => setPlan(e.target.value)}
                >
                    {(inputProps) => <TextField {...inputProps}
                    placeholder="mês/ano"
                        id="standard-basic"
                        label="Data"
                        InputLabelProps={{ shrink: true }}
                    />}
                </InputMask>
                <Button variant="contained" type="submit">Adicionar</Button>
            </form>
        </div>
    )
}

export default AddLocation