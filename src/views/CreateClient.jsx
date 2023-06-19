import React from 'react'
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { StoreClient, requestClientList } from '../Redux/action/ClientLIstAction';
import { useDispatch , useSelector } from 'react-redux';
import { Link  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const validationSchema = yup.object().shape({
   name: yup.string().required('Required'),
  address: yup.string().required('Required'),
  code : yup.string().required('Required'),
  phone : yup.string().required('Required')
});

function CreateClient() {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();


  return (
    <div>
       <Formik
        initialValues={{ type : '', name : '' ,code  : '', address : '' , phone : '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            dispatch(StoreClient(values));
            navigateTo('/');
            }, 400);
        }}
        >

 
{({ isSubmitting }) => (
  <div>
  <h5>Create New Client</h5>

<Form action="/action_page.php">
<div className="form-group">
    <label htmlFor="exampleFormControlSelect2">Select Client Type</label>
    <Field  as="select" className="form-control" name='type' >
      <option value="ONLINE">ONLINE</option>
       <option value="INHOUSE">INHOUSE</option>
      <option value="MODERN_TRADE">MODERN_TRADE</option>
    </Field>
  </div>
  <div className="form-group">
    <label htmlFor="name">Name :</label>
    <Field  type="text" className="form-control" id="name" name='name' />
  </div>
  <div className="form-group">
    <label htmlFor="code">Code :</label>
    <Field  type="text" className="form-control" id="code" name='code' />
  </div>



  <div className="form-group">
    <label htmlFor="address">Address :</label>
    <Field  type="text" className="form-control" id="address" name='address'/>
  </div>

  <div className="form-group">
    <label >Phone :</label>
    <Field  type="text" className="form-control" name='phone'/>
  </div>
  
  <Link to="/" className="btn btn-warning" >Back to Home</Link>
  <button type="submit" className="btn btn-info" disabled={isSubmitting}>Save </button>
</Form>
</div>
         
       )}

        </Formik>
      


    </div>
  )
}

export default CreateClient