import { fireEvent, render, screen } from '@testing-library/react';
import SelectInput from '.';

describe('SelectInput test suite', () => {
    it('should render select label', () => {
        const optionsList = ['house', 'ball'];

        render(
            <SelectInput
                textLabel="Testing select"
                inputSize="medium"
                options={optionsList}
            />,
        );

        const textLabel = screen.getByText('Testing select');
        expect(textLabel).toBeInTheDocument();
    });
    it('should render select', () => {
        const optionsList = ['house', 'ball'];

        render(
            <SelectInput
                textLabel="Testing select"
                inputSize="medium"
                options={optionsList}
            />,
        );

        const select = screen.getByTestId('select');
        expect(select).toBeInTheDocument();
    });
    it('should change option', () => {
        const optionsList = ['house', 'ball'];

        render(
            <SelectInput
                textLabel="Testing select"
                inputSize="medium"
                options={optionsList}
            />,
        );

        const select = screen.getByTestId('select');
        fireEvent.change(select, {
            target: { value: 'ball' },
        });
        const ballOption = screen.getByText('ball');
        expect(ballOption).toBeInTheDocument();
    });
});
