import * as Yup from 'yup';

export default Yup.object().shape({
  editlocal: Yup.string().required('Local é obrigatório'),
  editgoal: Yup.string().required('Meta é obrigatório'),
});
