'use client'
import scss from './Login.module.scss';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect, useState } from 'react';
import { getUser } from '@/redux/features/authSLice';
import { Button, Input} from 'antd';

const Login = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string | number>('');
	const router = useRouter()
	const user = useAppSelector((state) => state.auth.data);
	const dispatch = useAppDispatch();

	const handleLogin = () => {
		if (email === '' || password === '') {
			alert('Введите данные!');
		} else {
			const userFind = user.find(
				(item) => item.email === email && item.password === password
			);
			if (userFind) {
				localStorage.setItem('isAuth', JSON.stringify(userFind._id));
				router.push('/dashboard');
			} else {
				alert('User not found or incorrect credentials');
			}
		}
	};

	useEffect(() => {
		dispatch(getUser());
	}, []);

	return (
		<div className={scss.Login}>
			<div className="container">
				<div className={scss.content}>
					<h2>Trello</h2>
					<div>
						<h3>Вход в Trello</h3>

						<input
						placeholder='email'
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input.Password placeholder="input password" value={password} onChange={(e) => setPassword(e.target.value)} />
						<button onClick={handleLogin}>Login</button>
						<Link href="/registration">Sing Up</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
