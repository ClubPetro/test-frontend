import * as Yup from 'yup';

export default Yup.object().shape({
  country: Yup.string().required('País é obrigatório'),
  local: Yup.string().required('Local é obrigatório'),
  goal: Yup.string().required('Meta é obrigatório'),
});
