'use client';
import React, { FC, ReactNode } from 'react';
import { ReduxProvider } from '@/redux/provider';
import { SessionProvider } from '@/providers/SessionProvider';
import Layout from '@/components/layout/Layout';

interface LayoutRootType {
	children: ReactNode;
}

const LayoutRoot: FC<LayoutRootType> = ({ children }) => {
	return (
		<>
			<ReduxProvider>
				<SessionProvider>
					<Layout>{children}</Layout>
				</SessionProvider>
			</ReduxProvider>
		</>
	);
};
export default LayoutRoot;
