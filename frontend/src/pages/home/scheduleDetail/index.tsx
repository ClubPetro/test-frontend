import React from 'react';
import { Link, RouteComponentProps, useHistory } from 'react-router-dom';
import Button from '../../../components/button';
import InputMaskComponent from '../../../components/inputMask';
import SelectInput from '../../../components/selectInput';
import TextInput from '../../../components/textInput';
import { CountryContext } from '../../../context/countryContext/countryContext';
import { useScheduleContext } from '../../../context/scheduleContext/scheduleContext';
import { parseApiDataToStringArray } from '../helper';
import {
    handleFormSubmit,
    handleInputChange,
    handleSelectChange,
} from './helper';
import Wrapper from './styles';

type IProps = RouteComponentProps<{ id: string }>;

const ScheduleDetail = ({ match }: IProps): React.ReactElement => {
    const { editSchedule, getSingleSchedule } = useScheduleContext();
    const { countryList } = React.useContext(CountryContext);

    const countryNameList = parseApiDataToStringArray(countryList);
    const scheduleId = match.params.id;

    const history = useHistory();

    const [schedule, setSchedule] = React.useState<Schedule>({
        country: '',
        date: '',
        flag: '',
        id: '',
        location: '',
    });

    React.useEffect(() => {
        getSingleSchedule(scheduleId, setSchedule);
    }, [getSingleSchedule, scheduleId]);

    return (
        <Wrapper>
            <h1>Edite os detalhes de sua meta!</h1>
            <img src={schedule.flag} alt={schedule.country} />
            <form
                onSubmit={event => {
                    handleFormSubmit(event, editSchedule, schedule);
                    history.push('/');
                }}
            >
                <SelectInput
                    id="country"
                    options={countryNameList}
                    value={schedule.country}
                    textLabel="País"
                    blackLabel
                    border
                    inputSize="large"
                    onChange={event =>
                        handleSelectChange(
                            event,
                            schedule,
                            setSchedule,
                            countryList,
                        )
                    }
                />
                <TextInput
                    inputSize="large"
                    textLabel="Local"
                    blackLabel
                    border
                    value={schedule.location}
                    id="location"
                    onChange={event =>
                        handleInputChange(event, schedule, setSchedule)
                    }
                />
                <InputMaskComponent
                    value={schedule.date}
                    textLabel="Meta"
                    blackLabel
                    inputSize="large"
                    id="date"
                    placeholder="mês/ano"
                    border
                    onChange={event =>
                        handleInputChange(event, schedule, setSchedule)
                    }
                />
                <Button theme="primary" type="submit">
                    Confirmar
                </Button>
                <Link to="/">
                    <Button theme="secondary">Cancelar</Button>
                </Link>
            </form>
        </Wrapper>
    );
};

export default ScheduleDetail;
