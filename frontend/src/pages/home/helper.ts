import React from 'react';

export const parseApiDataToStringArray = (arr: CountryApiData[]): string[] => {
    const newStringArr: string[] = [];
    arr.map(item => newStringArr.push(item.translations.br));
    return newStringArr;
};

export const handleFormSubmit = (
    event: React.FormEvent,
    formData: ScheduleFormData,
    setFormData: React.Dispatch<React.SetStateAction<ScheduleFormData>>,
    countryList: CountryApiData[],
    createSchedule: (schedule: Schedule) => Promise<void>,
) => {
    event.preventDefault();
    const { flag, translations } = countryList.filter(
        item => item.translations.br === formData.country,
    )[0];
    const newScheduleObject = {
        ...formData,
        flag,
        translations,
        id: Math.random().toString().replace('0.', ''),
    };
    createSchedule(newScheduleObject);
    setFormData({ country: '', date: '', location: '' });
};

export const handleTextInputChange = (
    event: React.FormEvent<HTMLInputElement>,
    formData: ScheduleFormData,
    setFormData: React.Dispatch<React.SetStateAction<ScheduleFormData>>,
): void => {
    const { id, value } = event.currentTarget;
    setFormData({ ...formData, [id]: value });
};

export const handleSelectInputChange = (
    event: React.FormEvent<HTMLSelectElement>,
    formData: ScheduleFormData,
    setFormData: React.Dispatch<React.SetStateAction<ScheduleFormData>>,
): void => {
    const { id, value } = event.currentTarget;
    setFormData({ ...formData, [id]: value });
};
