/* eslint-disable @typescript-eslint/no-empty-function */

import { render, screen } from '@testing-library/react';
import TextInput from '.';

describe('textInput test suite', () => {
    it('should render textLabel', () => {
        render(
            <TextInput
                onChange={() => {}}
                inputSize="large"
                value=""
                textLabel="Label Title"
                id="teste"
                placeholder="digite algo..."
            />,
        );
        const labelTitle = screen.getByText('Label Title');
        expect(labelTitle).toBeInTheDocument();
    });
    it('should render input', () => {
        render(
            <TextInput
                onChange={() => {}}
                inputSize="large"
                value=""
                textLabel="Label Title"
                id="teste"
                placeholder="digite algo..."
            />,
        );
        const input = screen.getByLabelText('Label Title');
        expect(input).toBeInTheDocument();
    });
});
