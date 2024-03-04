import { FC, ReactNode } from 'react';
import { redirect, usePathname } from 'next/navigation';

interface ProtectedRouteProps {
	children: ReactNode;
}

export const SessionProvider: FC<ProtectedRouteProps> = ({ children }) => {
	const isAuth = localStorage.getItem('isAuth');
	const pathname = usePathname();
	
	switch (pathname) {
		case '/login':
		case '/registration':
			if (isAuth) {
				redirect('/dashboard');
			}
			break;
		case '/dashboard':
			if (!isAuth) {
				redirect('/login');
			}
			break;
		default:
			break;
	}

	return children;
};
