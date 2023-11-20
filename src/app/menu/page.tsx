"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MenuPage() {
	const router = useRouter();

	return (
		<div className="h-full flex flex-col">
			<div className="h-3/6">
				<div className="relative">
					<Image src="/bubble.png" alt="bubble" width={240} height={100} />
					<p className="absolute top-3 left-35 text-xl">
						&nbsp;&nbsp;&nbsp;&nbsp;학우님의
						<br />
						&nbsp;&nbsp;&nbsp;&nbsp;
						<span className="text-yellow-500 text-2xl">성향</span>을 알려주세요
					</p>
				</div>
				<div className="absolute right-8 top-15">
					<Image src="/bird.png" alt="bird" width={60} height={60} />
				</div>
			</div>

			<div className="flex flex-col justify-center items-center space-y-8 h-9/12">
				<button
					className="w-9/12 text-white bg-[#43b9dd] focus:bg-[#1187AB] h-12 shadow-md shadow-gray-500"
					onClick={() => {
						router.push(`/place`);
					}}
				>
					든든하게~
				</button>
				<button
					className="w-9/12 text-white bg-[#43b9dd] focus:bg-[#1187AB] h-12 shadow-md shadow-gray-500"
					onClick={() => {
						router.push(`/place`);
					}}
				>
					간편하게~
				</button>
				<button
					className="w-9/12 text-white bg-[#43b9dd] focus:bg-[#1187AB] h-12 shadow-md shadow-gray-500"
					onClick={() => {
						router.push(`/place`);
					}}
				>
					데이트하러~
				</button>
				<button
					className="w-9/12 text-white bg-[#43b9dd] focus:bg-[#1187AB] h-12 shadow-md shadow-gray-500"
					onClick={() => {
						router.push(`/place`);
					}}
				>
					술약속~
				</button>
				<button
					className="w-9/12 text-white bg-[#43b9dd] focus:bg-[#1187AB] h-12 shadow-md shadow-gray-500"
					onClick={() => {
						router.push(`/place`);
					}}
				>
					급해~
				</button>
			</div>
		</div>
	);
}
