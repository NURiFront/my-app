import React, { FC, ReactNode } from "react";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<div className={scss.Layout}>
				<Header />
				<main>{children}</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
