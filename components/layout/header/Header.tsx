'use client';
import scss from './Header.module.scss';
import { useEffect, useState } from 'react';
import { useRouter,usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '@/components/assets/trello-logo.svg';
// import Avatar from 'react-avatar';
import { Button, Dropdown, Input, MenuProps, Space } from 'antd';
import { IconArrowDown, IconSearch, IconUser } from '@tabler/icons-react';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { getUser } from '@/redux/features/authSLice';
import Link from 'next/link';

const links = [
	{
		name: 'Рабочие пространство '
	},
	{
		name: 'Недавние'
	},
	{
		name: 'В избранном'
	},
	{
		name: 'Шаблоны'
	}
];

const Header = () => {
	const [user, setUser] = useState<User | null>();
	const [index, setIndex] = useState('');
	const router = useRouter()
	const pathname = usePathname();

	const { data } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	const getFindUser = () => {
		const isAuth = localStorage.getItem('isAuth');
		const findUser = data.find((item) => item._id === Number(isAuth));

		if (isAuth) {
			setUser(findUser);
		} else {
			localStorage.removeItem('isAuth');
		}
	};

	const handleLogout = () => {
		localStorage.removeItem('isAuth');
		setUser(null);
		router.push('/login');
	};

	useEffect(() => {
		dispatch(getUser());
	}, [pathname]);

	useEffect(() => {
		getFindUser();
	}, [pathname, data]);

	const [input, setInput] = useState('');
	const items: MenuProps['items'] = [
		{
			label: '1st menu item',
			key: '1',
			icon: <IconUser />
		},
		{
			label: '2nd menu item',
			key: '2',
			icon: <IconUser />
		},
		{
			label: '3rd menu item',
			key: '3',
			icon: <IconUser />,
			danger: true
		},
		{
			label: '4rd menu item',
			key: '4',
			icon: <IconUser />,
			danger: true,
			disabled: true
		}
	];

	const menuProps = {
		items
	};

	return (
		<header className={scss.header}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.left}>
						<div className={scss.logo}>
							<Image src={logo} alt="logo" />
						</div>
						<nav>
							<ul>
								{links.map((item) => (
									<li key={index}>
										<Dropdown menu={menuProps}>
											<Button>
												<Space>
													{item.name}
													<IconArrowDown />
												</Space>
											</Button>
										</Dropdown>
									</li>
								))}
							</ul>
						</nav>
					</div>
					<div className={scss.right}>
						<Space.Compact size="large">
							<Input addonBefore={<IconSearch />} placeholder="large size" />
						</Space.Compact>
						<div>
							{user ? (
								<div
									onClick={handleLogout}
									style={{
										borderRadius: 50
									}}
									
								>
									<Image
										src={user.photo}
										width={50}
										height={50}
										priority={true}
										alt={user.name}
										style={{
											borderRadius: 50
										}}
									/>
								</div>
							) : (
								<Link href="/login">Login</Link>
							)}

							{/* <Avatar name="NURi Toktogulova" round size="50" color="#0055D3" /> */}
						</div>
					</div>
				</div>
			</div>
			{/* <InputTest onChange={(e) => setInput(e.target.value)} /> */}
		</header>
	);
};

export default Header;
