import "../styles/global.css";
import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
	title: {
		template: "%s | T Next Movies",
		default: " Next Movies",
	},
	description: "The best movies on the best framework",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
