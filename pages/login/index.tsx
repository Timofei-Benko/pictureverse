import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';
import { Form } from '../../components/Form';
import { VALIDATE_USER_CREDENTIALS } from '../../gql/ValidateUserCredentials';
import { setUser } from '../../redux/actionCreators';
import { routes } from '../../constants/routes';

const Login: NextPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const dispatch = useDispatch();
	const router = useRouter();
                 
	const [validateUserCredentials] = useMutation(VALIDATE_USER_CREDENTIALS, {
		variables: {
			input: {
				email,
				password,
			}
		},
		onCompleted: async ({ validateUserCredantials }) => {
			if ('id' in validateUserCredantials && validateUserCredantials.id) {
				const user = {
					isAuthenticated: true,
					userId: validateUserCredantials.id,
				};

				localStorage.setItem('user', JSON.stringify(user));
				dispatch(setUser(user));
				await router.push('/', { pathname: '/'});
			} else if ('message' in validateUserCredantials && validateUserCredantials?.message) {
				setErrorMessage(validateUserCredantials.message);
			}
		}
	});

	const handleSubmit = useCallback(async () => {
		await validateUserCredentials();
	}, [validateUserCredentials]);

	return (
		<Form
			title='Sign In'
			onSubmit={handleSubmit}
			errorMessage={errorMessage}
		>
			<Form.Input
				type='email'
				placeholder='Email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Form.Input
				type='password'
				placeholder='Password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Form.BottomLink href={routes.register}>Don&apos;t have an account? Sign up</Form.BottomLink>
		</Form>
	);
};

export default Login;
