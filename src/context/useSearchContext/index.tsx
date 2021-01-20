import React, { ReactNode } from "react";
import { AppProps } from "./types";
import {
  saveData,
  getAllDataInBd,
  deleteCardById,
  updateCardById,
} from "../../api";

const DEFAULT_VALUE = {
  newData: {
    id: "",
    countrie: "",
    countrieTranslation: "",
    date: "",
    city: "",
    flag: "",
  },
  allData: [
    {
      id: "",
      countrie: "",
      countrieTranslation: "",
      date: "",
      city: "",
      flag: "",
    },
  ],
  dataEdit: {
    id: "",
    city: "",
    date: "",
  },
  setDataEdit: () => {},
  setIdDelete: () => {},
  setNewData: () => {},
  setIsFinish: () => {},
};

const AppContext = React.createContext<AppProps>(DEFAULT_VALUE);

type Props = {
  children: ReactNode;
};

function AppContextProvider(props: Props) {
  const { children } = props;
  const [newData, setNewData] = React.useState(DEFAULT_VALUE.newData);
  const [isFinish, setIsFinish] = React.useState(false);
  const [allData, setAllData] = React.useState(DEFAULT_VALUE.allData);
  const [idDelete, setIdDelete] = React.useState<string>("");
  const [dataEdit, setDataEdit] = React.useState(DEFAULT_VALUE.dataEdit);

  React.useEffect(() => {
    if (isFinish) {
      (async () => {
        await saveData(newData);
        const data = await getAllDataInBd();
        setAllData(data);
      })();
    }
  }, [newData, isFinish]);

  React.useEffect(() => {
    (async () => {
      const data = await getAllDataInBd();
      setAllData?.(data);
    })();
  }, []);

  React.useEffect(() => {
    if (idDelete !== "") {
      (async () => {
        await deleteCardById(idDelete);
        const data = await getAllDataInBd();
        setAllData?.(data);
        setIdDelete("");
      })();
    }
  }, [idDelete]);

  React.useEffect(() => {
    (async () => {
      await updateCardById(dataEdit);
      const data = await getAllDataInBd();
      setAllData?.(data);
    })();
  }, [dataEdit]);

  return (
    <AppContext.Provider
      value={{
        newData,
        setNewData,
        setIsFinish,
        allData,
        setIdDelete,
        setDataEdit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContextProvider };
export default AppContext;
