/* eslint-disable @typescript-eslint/no-empty-function */

import { fireEvent, render, screen } from '@testing-library/react';
import InputMaskComponent from '.';

describe('InputMaskElement test suite', () => {
    it('should render textLabel', () => {
        render(
            <InputMaskComponent
                onChange={() => {}}
                inputSize="large"
                value=""
                textLabel="Label Title"
                id="teste"
                placeholder="mês/ano"
            />,
        );
        const labelTitle = screen.getByText('Label Title');
        expect(labelTitle).toBeInTheDocument();
    });
    it('should render input', () => {
        render(
            <InputMaskComponent
                onChange={() => {}}
                inputSize="large"
                value=""
                textLabel="Label Title"
                id="teste"
                placeholder="mês/ano"
            />,
        );
        const input = screen.getByLabelText('Label Title');
        expect(input).toBeInTheDocument();
    });
});
