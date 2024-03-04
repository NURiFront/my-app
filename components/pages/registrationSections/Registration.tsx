'use client';
import scss from './Registration.module.scss';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { postUser } from '@/redux/features/authSLice';
import { Button, Input } from 'antd';
import { useAppDispatch } from '@/redux/store';

const Registration = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter()
	const [name, setName] = useState('');
	const [photo, setPhoto] = useState('');

	const dispatch = useAppDispatch();

	const handlePost = async () => {
		try {
			const newData: User = {
				email,
				password,
				photo,
				name,
				columns: []
			};
			await dispatch(postUser(newData));
			setEmail('');
			setPassword('');
			setPhoto('');
			setName('');
			router.push('/login');
		} catch (error) {
			console.log('post not Fount');
		}
	};
	
	return (
		<div className={scss.Registration}>
			<div className="container">
				<div className={scss.content}>
					<h2>Trello</h2>
					<div>
						<h3>Регистрация в Trello</h3>
						<Input
							placeholder="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input.Password
							placeholder="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Input
							placeholder="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<Input
							placeholder="photo"
							value={photo}
							onChange={(e) => setPhoto(e.target.value)}
						/>
						<Button onClick={handlePost}>Registration</Button>
						<Link href="/login">Sing In</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registration;
