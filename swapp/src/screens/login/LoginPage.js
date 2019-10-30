import React, { useState } from 'react';
import { Box, Card, Text, Flex } from 'rebass';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { userConstants } from '../../constants/userConstants';
import { LOG_IN } from '../../queries/userQueries';
import { history } from '../../utils/history';
import SwappLogo from '../../components/common/SwappLogo';
import SolidButton from '../../components/common/SolidButton';
import InputField from '../../components/common/InputField';

const LoginPage = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [invalidCredentials, setInvalidCredentials] = useState(false);

  const onTextInputChange = setter => ({ target: { value } }) => setter(value);

  const client = useApolloClient();

  const [login, { error }] = useMutation(LOG_IN, {
    onCompleted: ({ signIn: loginData }) => {
      const user = {
        user: userEmail,
        token: loginData.token
      };

      localStorage.setItem('user', JSON.stringify(user));
      client.writeData({ data: { authenicated: true } });
      history.push('/');
      window.location.reload();
    }
  });

  const onLoginButtonClick = () => {
    setInvalidCredentials(false);

    if (userEmail === '' || userPass === '') {
      setInvalidCredentials(true);
      return;
    }

    login({ variables: { email: userEmail, password: userPass } });
  };

  return (
    <Card
      variant='primary'
      width={[302, 502]}
      mx='auto'
      my={3}
      pt={3}
      pb={3}
      css={`
        background-color: black;
        color: var(--default-font-color);
        border-radius: 5px;
      `}
    >
      <Flex alignItems='center' px={3}>
        <SwappLogo small={false} />
      </Flex>
      <Box
        mx={3}
        px={2}
        pb={3}
        pt={[1, 3]}
        display='grid'
        css={`
          background-color: var(--card-background-color);
          border-radius: 5px;
        `}
      >
        <Box px={[2, 5]} pb={2}>
          {
            <Text color={'red'}>
              {(invalidCredentials && userConstants.INVALID_CREDENTIALS) ||
                (error && userConstants.FAILED_TO_FETCH)}
            </Text>
          }
        </Box>
        <Box px={[2, 5]}>
          <InputField name='email' onChange={onTextInputChange(setUserEmail)} />
        </Box>
        <Box px={[2, 5]} py={3}>
          <InputField
            name='password'
            type='password'
            onChange={onTextInputChange(setUserPass)}
          />
        </Box>
        <Box px={2} ml='auto' pr={[2, 5]}>
          <SolidButton onClick={onLoginButtonClick} text='Login' />
        </Box>
      </Box>
    </Card>
  );
};
export default LoginPage;
