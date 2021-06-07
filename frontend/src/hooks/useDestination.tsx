import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from "react";
import { api } from "../services/api";
import _ from "lodash";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

interface APIData {
  name: string;
  flag: string;
}

interface DestiniesProps {
  id: string;
  place: string;
  goal: string;
  country: string;
  flag: string;
  createdAt: string;
}

type DestiniesInputEdit = Omit<
  DestiniesProps,
  "country" | "createdAt" | "flag" | "id"
>;

interface DestinationProviderProps {
  children: ReactNode;
}

interface DestiniesData {
  destinies: DestiniesProps[];
  CreateDestinie: () => Promise<void>;
  EditDestinie: (data: DestiniesInputEdit) => Promise<void>;
  SetIdToEdit: (id: number) => void;
  DeleteDestinie: (id: number) => Promise<void>;
  countries: APIData[];
  goal: string;
  handleChangeGoal: (event: React.ChangeEvent<{ value: string }>) => void;
  place: string;
  handleChangePlace: (event: React.ChangeEvent<{ value: string }>) => void;
  country: string;
  handleChangeCountry: (event: any) => void;
}

const DestiniesContext = createContext<DestiniesData>({} as DestiniesData);

export function DestinationProvider({ children }: DestinationProviderProps) {
  const [destinies, setDestinies] = useState<DestiniesProps[]>([]);
  const [countries, setCountries] = useState<APIData[]>([]);
  const [idToEditAndDeleteDestinie, setIdToEditAndDeleteDestinie] =
    useState<number>(0);
  const [goal, setGoal] = useState("");

  const SetIdToEdit = (id: number) => {
    setIdToEditAndDeleteDestinie(id);
  };

  const handleChangeGoal = (event: React.ChangeEvent<{ value: string }>) => {
    setGoal(event.target.value);
  };

  const [place, setPlace] = useState("");
  const handleChangePlace = (event: React.ChangeEvent<{ value: string }>) => {
    setPlace(event.target.value);
  };

  const [country, setCountry] = useState("none");
  const handleChangeCountry = (event: any) => {
    setCountry(event.target.value);
  };

  const loadDestinies = async () => {
    api.get("/destinies").then((response) => setDestinies(response.data));
  };

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      const { data } = await axios.get(
        "https://restcountries.eu/rest/v2/all?fields=translations;flag"
      );
      const filteredValues = data.map((elem: any) => {
        return {
          name: elem.translations.br,
          flag: elem.flag,
        } as APIData;
      });
      const orderedCountriesByName = _.orderBy(
        filteredValues,
        ["name"],
        ["asc"]
      );
      setCountries(orderedCountriesByName);
    };
    loadData();
  }, []);

  useEffect(() => {
    loadDestinies();
  }, []);

  const CreateDestinie = async (): Promise<void> => {
    try {
      if (
        country === "none" ||
        goal === "" ||
        goal.lastIndexOf("_") !== -1 ||
        place === ""
      ) {
        throw new Error("Invalid data!");
      }
      const data = countries.find((elem) => elem.name === country);
      const response = await api.post("/destinies", {
        goal,
        place,
        country,
        flag: data !== undefined ? data.flag : undefined,
        createdAt: new Date(),
      });

      const destination = response.data as DestiniesProps;

      setDestinies([...destinies, destination]);

      toast.success("Dados cadastrados com sucesso!");

      setCountry("none");
      setPlace("");
      setGoal("");
    } catch (error) {
      toast.error(
        "Erro no formato dos datos, insira valores válidos e tente novamente"
      );
    }
  };

  const EditDestinie = async ({
    goal,
    place,
  }: DestiniesInputEdit): Promise<void> => {
    try {
      if (goal.lastIndexOf("_") !== -1 || goal === "" || place === "") {
        throw new Error("Invalid data");
      }

      const destinie = await api.get(`/destinies/${idToEditAndDeleteDestinie}`);

      const editedDestinie = {
        ...destinie.data,
        goal,
        place,
      };

      await api.put(`/destinies/${idToEditAndDeleteDestinie}`, editedDestinie);

      loadDestinies();
      toast.success("Dados editados com sucesso!");
    } catch (error) {
      toast.error(
        "Erro no formato dos datos, insira valores válidos e tente novamente"
      );
    }
  };

  const DeleteDestinie = async (id: number): Promise<void> => {
    await api.delete(`/destinies/${id}`);

    loadDestinies();
    toast.success("Dados deletados com sucesso!");
  };

  return (
    <DestiniesContext.Provider
      value={{
        destinies,
        CreateDestinie,
        EditDestinie,
        DeleteDestinie,
        SetIdToEdit,
        countries,
        country,
        goal,
        place,
        handleChangeCountry,
        handleChangeGoal,
        handleChangePlace,
      }}
    >
      {children}
    </DestiniesContext.Provider>
  );
}

export function useDestination() {
  const context = useContext(DestiniesContext);

  return context;
}
