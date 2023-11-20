"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
	const typos = ["/메뉴.png", "/추천.png", "/리스트.png"];
	const router = useRouter();

	return (
		<div className="flex flex-col">
			<div className="absolute flex top-0 right-0">
				<div className="relative flex flex-col top-8 left-3">
					<Image
						src={`${typos[0]}`}
						className=""
						alt="typo"
						width="100"
						height="70"
					/>
					<Image
						src={`${typos[1]}`}
						className=""
						alt="typo"
						width="100"
						height="70"
					/>
					<Image
						src={`${typos[2]}`}
						className=""
						alt="typo"
						width="130"
						height="80"
					/>
				</div>
				<Image src="/icon.png" alt="icon" width="150" height="220" />
			</div>
			<div className="absolute w-80 justify-items-center bottom-10 flex flex-col">
				<button
					onClick={() => {
						router.push("/menu");
					}}
					className="text-white text-xl bg-[#43b9dd] focus:bg-[#1187AB] w-full h-12 my-3 shadow-md shadow-gray-500"
				>
					메뉴 추천 받을래요!
				</button>
				<button
					className="text-white text-xl w-full bg-[#43b9dd] focus:bg-[#1187AB] h-12 my-3 shadow-md shadow-gray-500"
					value="랜덤 추천 받을래요!"
					onClick={() => {
						router.push("/random");
					}}
				>
					랜덤 추천 받을래요!
				</button>
			</div>
		</div>
	);
}
