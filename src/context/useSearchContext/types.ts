type NewDataProps = {
  id: string;
  countrie: string;
  countrieTranslation: string;
  date: string;
  city: string;
  flag: string;
};

type UpdateEditProps = {
  id: string;
  city: string;
  date: string;
};

export type AppProps = {
  newData: NewDataProps;
  allData: NewDataProps[];
  setDataEdit: React.Dispatch<React.SetStateAction<UpdateEditProps>>;
  setIdDelete: React.Dispatch<React.SetStateAction<string>>;
  setNewData: React.Dispatch<React.SetStateAction<NewDataProps>>;
  setIsFinish: React.Dispatch<React.SetStateAction<boolean>>;
};
