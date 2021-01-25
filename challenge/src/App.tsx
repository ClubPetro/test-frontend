import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import AddLocation from './components/AddLocation'
import Locations from './components/Locations'

export interface LocationModel {
  country: string,
  location: string,
  plan: string,
  countryFlag: string,
  id: string
}

const App: React.FC = () => {


  const [locationsItens, setLocationsItens] = useState<LocationModel[]>([])

  const deleteHandler: Function = (id: string) => {
    const newList = locationsItens.filter((i) => i.id !== id)
    setLocationsItens(newList)
  }

  useEffect(() => {
    console.log(locationsItens);

  }, [locationsItens])

  return (
    <div>
      <Header />
      <AddLocation setLocationsItens={setLocationsItens} locationsItens={locationsItens} />
      <div className="locations_itens">
        {locationsItens.map((i) => {
          return (
            <Locations
              setLocationsItens={setLocationsItens}
              deleteHandler={deleteHandler}
              locationsItens={locationsItens}
              key={i.id}
              id={i.id}
              country={i.country}
              location={i.location}
              plan={i.plan}
              flag={i.countryFlag} />
          )
        })}

      </div>
    </div>
  )
}

export default App;
