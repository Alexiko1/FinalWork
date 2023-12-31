import React from 'react';
import AuthForm from '../../components/forms/authForm/AuthForm';
import { AutchContainer, AuthFormContainer, AuthPhoto, AuthTitle, ButtonSwitch, LockAbs, TabsAuthStyled } from './StyledofAuth';
const Auth = () => {
  return (
    <AutchContainer>
      <AuthTitle>
        Для оформления подписки
        на тариф, необходимо авторизоваться.
      </AuthTitle>
      <AuthPhoto></AuthPhoto>
      <AuthFormContainer>
        <LockAbs />
        <TabsAuthStyled
          defaultActiveKey="Login"
          animated={true}
          items={[
            {
              label: <ButtonSwitch type='button'>Войти</ButtonSwitch>,
              key: "Login",
              children: <AuthForm />,
            },
            {
              label: <ButtonSwitch type='button'>Зарегестрироваться</ButtonSwitch>,
              key: "Register",
              children: <div style={{ textAlign: "center" }}>Register is not avaliable</div>,
            }
          ]}
        />
      </AuthFormContainer>
    </AutchContainer>
  )
}
export default Auth