import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './reducer/users/action'
import { useHistory } from 'react-router-dom';


const Signup = () => {
  const error = useSelector(state => state.error);
  const INIT_FORM_STATE = {
    "firstName": "",
    "lastName": "",
    "email": "",
  }
  const [formData, setFormData] = useState(INIT_FORM_STATE);
  const [formError, setFormError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(f => ({ ...f, [name]: value }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    try {
      dispatch(addUser({ ...formData, state: "pending" }));
      setFormData(INIT_FORM_STATE);
      history.push('/');
    } catch (e) {
      console.error(e);
      setFormError(error);
    }
  }


  return (
    <div className="row justify-content-center mt-5">
      <div className="card col-md-6">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="intput-first-name">First Name</label>
              <input type="text" className="form-control" id="intput-first-name"
                name="firstName" value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="intput-last-name">Last Name</label>
              <input type="text" className="form-control" id="intput-last-name"
                name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="input-email">Email</label>
            <input type="text" className="form-control" id="input-email"
              name="email" value={formData.email} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Sign up</button>
          {formError.length !== 0 &&
            <div className="alert alert-danger" role="alert">
              {formError}
            </div>
          }
        </form>
      </div>
    </div>
  )
}


export default Signup;