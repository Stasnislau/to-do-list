import React from "react";
import "./index.css";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { addNote } from "../../Actions";
const NewItem = () => {
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length > 15) {
      errors.name = "Must be 15 characters or less";
    }
    if (!values.surname) {
      errors.surname = "Required";
    } else if (values.surname.length > 20) {
      errors.surname = "Must be 20 characters or less";
    }
    if (!values.dateOfBirth) {
      errors.dateOfBirth = "Required";
    } else if (values.dateOfBirth.length !== 10) {
      errors.dateOfBirth = "Must be 10 characters";
    } else if (values.dateOfBirth[2] !== "." || values.dateOfBirth[5] !== ".") {
      errors.dateOfBirth = "Must be in format dd.mm.yyyy";
    }
    return errors;
  };
  const onSubmit = (values) => {
    formik.setFieldValue("isFormVisible", false);
    dispatch(
      addNote({
        name: formik.values.name,
        surname: formik.values.surname,
        dateOfBirth: formik.values.dateOfBirth,
        id: 0,
      })
    );
    formik.resetForm();
  };
  const initialValues = {
    name: "",
    surname: "",
    dateOfBirth: "",
    isFormVisible: false,
    id: 0,
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="form-container">
      {formik.values.isFormVisible ? (
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <lebel htmlFor="name">Name</lebel>
            <input
              className="name-input form-input"
              type="text"
              name="name"
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Enter the name"
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name ? (
              <div className="error-message">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-control">
            <lebel htmlFor="surname">Surname</lebel>
            <input
              className="surname-input form-input"
              type="text"
              name="surname"
              onBlur={formik.handleBlur}
              value={formik.values.surname}
              placeholder="Enter the surname"
              onChange={formik.handleChange}
            />
            {formik.errors.surname && formik.touched.surname ? (
              <div className="error-message">{formik.errors.surname}</div>
            ) : null}
          </div>
          <div className="form-control">
            <lebel htmlFor="dateOfBirth" placeholder="Enter the date of birth">
              Date of birth
            </lebel>
            <input
              type="text"
              value={formik.values.dateOfBirth}
              name="dateOfBirth"
              onBlur={formik.handleBlur}
              placeholder="dd.mm.yyyy"
              onChange={formik.handleChange}
            />
            {formik.errors.dateOfBirth && formik.touched.dateOfBirth ? (
              <div className="error-message">{formik.errors.dateOfBirth}</div>
            ) : null}
          </div>

          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <button
          className="add-new-item"
          onClick={() => {
            formik.setFieldValue("isFormVisible", true);
          }}
        >
          Add new item
        </button>
      )}
    </div>
  );
};
export default NewItem;
