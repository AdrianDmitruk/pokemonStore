/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Input, Button, Select } from "antd";
import styles from "./AuthPage.module.scss"; // Замените на путь к вашему файлу стилей
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRegistrationData } from "../../redux/auth/selectors";
import { useAppDispatch } from "../../redux/store";
import { fetchLogin } from "../../redux/auth/async-actions";
import { Status } from "../../redux/auth/types";

interface IRegisterData {
  email: string;
  password: string;
  phone: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: {
    addressLine1: string;
    addressLine2: string;
    country: string;
    city: string;
  };
}

interface ILoginData {
  email: string;
  password: string;
}

type FormType = "login" | "register";

interface AuthPageProps {
  type: FormType;
}

export const AuthPage: FC<AuthPageProps> = ({ type }) => {
  const initialValues: IRegisterData = {
    email: "",
    password: "",
    phone: "",
    firstName: "",
    lastName: "",
    gender: "male",
    address: {
      addressLine1: "",
      addressLine2: "",
      country: "",
      city: "",
    },
  };

  const { status } = useSelector(selectRegistrationData);

  const dispatch = useAppDispatch();

  const isRegisterForm = type === "register";

  const title = isRegisterForm ? "Sign Up" : "Sign In";

  const { Option } = Select;

  const onSubmit = (values: IRegisterData) => {
    if (type === "login" || status === Status.SUCCESS) {
      const params: ILoginData = {
        email: values.email,
        password: values.password,
      };
      dispatch(fetchLogin(params));
    } else {
      dispatch(fetchLogin(values));
    }
  };

  return (
    <div className={styles.auth}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={styles.authForm}>
          <h2 className={styles.authTitle}>{title}</h2>

          {type === "register" && (
            <>
              <div className={styles.authName}>
                <div>
                  <div className={styles.authInputTitle}>Введите имя</div>
                  <Field
                    className={styles.authInput}
                    name="firstName"
                    placeholder="Введите имя"
                    as={Input}
                  />
                  <ErrorMessage name="firstName" component="div" />
                </div>
                <div>
                  <div className={styles.authInputTitle}>Введите фамилию</div>
                  <Field
                    className={styles.authInput}
                    name="lastName"
                    placeholder="Введите фамилию"
                    as={Input}
                  />
                  <ErrorMessage name="lastName" component="div" />
                </div>
              </div>
              <div className={styles.authInputTitle}>Введите телефон</div>
              <Field
                className={styles.authInput}
                name="phone"
                placeholder="Введите номер телефона"
                as={Input}
              />
              <ErrorMessage name="phone" component="div" />
              <div className={styles.authInputTitle}>Выберите пол</div>
              <Field name="gender">
                {({ field, form }: any) => (
                  <Select
                    className={styles.authInput}
                    placeholder="Выберите пол"
                    {...field}
                    onChange={(value) => form.setFieldValue("gender", value)}
                  >
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                  </Select>
                )}
              </Field>
            </>
          )}

          <div className={styles.authInputTitle}>Введите Email</div>
          <Field
            className={styles.authInput}
            name="email"
            placeholder="Введите Email"
            as={Input}
          />
          <ErrorMessage name="email" component="div" />
          <div className={styles.authInputTitle}>Введите пароль</div>
          <Field
            className={styles.authInput}
            name="password"
            placeholder="Введите пароль"
            as={Input.Password}
          />
          <ErrorMessage name="password" component="div" />

          {type === "register" && (
            <>
              <div className={styles.authInputTitle}>Введите адрес</div>
              <Field
                className={styles.authInput}
                name="address.addressLine1"
                placeholder="Введите адрес"
                as={Input}
              />
              <ErrorMessage name="address.addressLine1" component="div" />

              <div className={styles.authInputTitle}>Введите адрес</div>
              <Field
                className={styles.authInput}
                name="address.addressLine2"
                placeholder="Введите адрес"
                as={Input}
              />
              <ErrorMessage name="address.addressLine2" component="div" />

              <div className={styles.authInputTitle}>Введите страну</div>
              <Field
                className={styles.authInput}
                name="address.country"
                placeholder="Введите страну"
                as={Input}
              />
              <ErrorMessage name="address.country" component="div" />

              <div className={styles.authInputTitle}>Введите город</div>
              <Field
                className={styles.authInput}
                name="address.city"
                placeholder="Введите город"
                as={Input}
              />
              <ErrorMessage name="address.city" component="div" />
            </>
          )}

          <div className={styles.authBtnWrap}>
            {type === "register" ? (
              <Button
                className={styles.authBtn}
                type="primary"
                htmlType="submit"
              >
                Create Account
              </Button>
            ) : (
              <Button
                className={styles.authBtn}
                type="primary"
                htmlType="submit"
              >
                Log in
              </Button>
            )}
          </div>

          {type === "register" ? (
            <div className={styles.authLinkWrap}>
              <span className={styles.authLinkTitle}>Have an account?</span>
              <Link className={styles.authLink} to={"/login"}>
                Sign In
              </Link>
            </div>
          ) : (
            <div className={styles.authLinkWrap}>
              <span className={styles.authLinkTitle}>No account?</span>
              <Link className={styles.authLink} to={"/register"}>
                Sign Up
              </Link>
            </div>
          )}
        </Form>
      </Formik>
    </div>
  );
};
