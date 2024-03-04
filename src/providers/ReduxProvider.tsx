import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

interface ReduxProvider {
	children: ReactNode;
}

export const ReduxProvider: FC<ReduxProvider> = ({ children }) => {
	return (
		<>
			<Provider store={store}>{children}</Provider>
		</>
	);
};
