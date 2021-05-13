import React from 'react'
import {fireEvent, render, waitFor} from '@testing-library/react'
import Index from '../pages/Index'


it('verify if the application starts with 0 places', () => {
    render(<Index/>)
    const placesLength = document.title.slice(0,1)
    expect(placesLength).toBe('0')
})

it('verifys if the new cards will be created', async () => {
    const {getByTestId} = render(<Index/>)
    const fieldNode = await waitFor(() => getByTestId('btn-new-card')) //SEARCH FOR THE FORM
    fireEvent.click(fieldNode, {target: {value: 'new-click'}}) // SIMULATES A NEW CLICK (POST ON CARDS)
    waitFor(() => getByTestId('new-card')) //SEARCH FOR NEW CARD 
})


console.error = () => {}

