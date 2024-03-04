'use client';
import React, { FC } from 'react';
import scss from './Welcome.module.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { getUser } from '@/redux/features/authSLice';

const Welcome: FC = () => {
	const [userInfo, setUserInfo] = useState<User | null>();
	const user = useAppSelector((state) => state.auth.data);
	const dispatch = useAppDispatch();

	const getUserInfo = () => {
		if (typeof window !== 'undefined') {
			const isAuth = localStorage.getItem('isAuth');
			const userFind = user.find((item) => item._id === Number(isAuth));
			setUserInfo(userFind!);
		}
	};

	useEffect(() => {
		dispatch(getUser());
	}, [dispatch]);

	useEffect(() => {
		getUserInfo();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	return (
		<>
			<section className={scss.Welcome}>
				<div className="container">
					<div className={scss.content}>
						<h1>Welcome {userInfo ? userInfo?.name : 'unknown'}</h1>
					</div>
				</div>
			</section>
		</>
	);
};

export default Welcome;
