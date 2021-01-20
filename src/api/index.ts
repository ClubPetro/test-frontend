import { BASE_URL_API, BASE_URL_COUNTRIES } from "./bases";
import { UpdateProps, saveDataProps } from "./types";

export const getAllCountries = async () => {
  const response = await fetch(`${BASE_URL_COUNTRIES}/all`);
  const json = await response.json();

  return json;
};

export const getCountrieByName = async (name: string) => {
  const response = await fetch(`${BASE_URL_COUNTRIES}/name/${name}`);
  const json = await response.json();
  return { flag: json[0].flag, countrieTranslation: json[0].translations.br };
};

export const saveData = async (props: saveDataProps) => {
  try {
    await fetch(BASE_URL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });
  } catch (error) {
    const err: Error = error;
    console.log(err.message);
  }
};

export const getAllDataInBd = async () => {
  try {
    const response = await fetch(`${BASE_URL_API}?_sort=date&_order=asc`);
    const json = await response.json();
    return json;
  } catch (error) {
    const err: Error = error;
    console.log(err.message);
  }
};

export const deleteCardById = async (id: string) => {
  try {
    await fetch(`${BASE_URL_API}/${id}`, { method: "DELETE" });
  } catch (error) {
    const err: Error = error;
    console.log(err.message);
  }
};

export const updateCardById = async (props: UpdateProps) => {
  try {
    await fetch(`${BASE_URL_API}/${props.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ city: props.city, date: props.date }),
    });
  } catch (error) {
    const err: Error = error;
    console.log(err.message);
  }
};
