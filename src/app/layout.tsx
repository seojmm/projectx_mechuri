"use client";
import type { Metadata } from "next";
import "./globals.css";
import {
	RecoilRoot,
	atom,
	selector,
	useRecoilState,
	useRecoilValue,
} from "recoil";

// export const metadata: Metadata = {
// 	title: "메뉴 추천!",
// 	description: "메뉴 추천 리스트",
// };

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body className="relative bg-[#C6D4D9]">
				<RecoilRoot>{children}</RecoilRoot>
			</body>
		</html>
	);
}
