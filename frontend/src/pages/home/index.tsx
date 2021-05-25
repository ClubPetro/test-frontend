import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import Button from '../../components/button';
import InputMaskComponent from '../../components/inputMask';
import SelectInput from '../../components/selectInput';
import TextInput from '../../components/textInput';
import { CountryContext } from '../../context/countryContext/countryContext';
import { useScheduleContext } from '../../context/scheduleContext/scheduleContext';
import {
    handleFormSubmit,
    handleSelectInputChange,
    handleTextInputChange,
    parseApiDataToStringArray,
} from './helper';
import { InputSection, Wrapper, ErrorMessage } from './styles';

const Home = (): React.ReactElement => {
    const { createSchedule, errorMessage } = useScheduleContext();
    const { countryList } = React.useContext(CountryContext);

    const countryNameList = parseApiDataToStringArray(countryList);

    const [formData, setFormData] = React.useState<ScheduleFormData>({
        country: '',
        location: '',
        date: '',
    });
    const [isThereError, setIsThereError] = React.useState<Error | null>(null);

    React.useEffect(() => {
        setIsThereError(errorMessage);
    }, [errorMessage]);

    return (
        <Wrapper>
            <InputSection>
                <form
                    onSubmit={event =>
                        handleFormSubmit(
                            event,
                            formData,
                            setFormData,
                            countryList,
                            createSchedule,
                        )
                    }
                >
                    <SelectInput
                        inputSize="medium"
                        options={countryNameList}
                        textLabel="País"
                        value={formData.country}
                        id="country"
                        onChange={event =>
                            handleSelectInputChange(
                                event,
                                formData,
                                setFormData,
                            )
                        }
                    />
                    <TextInput
                        inputSize="large"
                        textLabel="Local"
                        id="location"
                        placeholder="Digite o local que deseja conhecer"
                        value={formData.location}
                        onChange={event =>
                            handleTextInputChange(event, formData, setFormData)
                        }
                    />
                    <InputMaskComponent
                        inputSize="medium"
                        textLabel="Meta"
                        onChange={event =>
                            handleTextInputChange(event, formData, setFormData)
                        }
                        value={formData.date}
                        id="date"
                        placeholder="mês/ano"
                    />
                    <Button theme="primary" type="submit">
                        Adicionar
                    </Button>
                </form>
                {isThereError ? (
                    <ErrorMessage>
                        <FiAlertTriangle /> {isThereError.message}
                    </ErrorMessage>
                ) : null}
            </InputSection>
        </Wrapper>
    );
};

export default Home;
