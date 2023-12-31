"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { placeState } from "../../atoms/placeState";

export default function PlacePage() {
	const router = useRouter();
	const [place, setPlace] = useRecoilState(placeState);
	return (
		<div className="relative h-full flex">
			<div className="absolute mt-5">
				<Image src="/bubble.png" alt="bubble" width="240" height="100" />
			</div>
			<p className="absolute mt-10 ml-14 font-bold text-xl">
				<span className="text-yellow-300 text-2xl">위치</span>가
				<br />
				어디신가요?
			</p>
			<div className="absolute right-8 mt-28">
				<Image src="/bird.png" alt="bird" width="60" height="60" />
			</div>
			<div className="absolute bottom-10 flex flex-col justify-center items-center w-full gap-8">
				<Button
					className="text-xl w-9/12 bg-[#43b9dd] focus:bg-[#1187AB] h-14 shadow-md shadow-gray-500"
					onClick={() => {
						setPlace("건입");
						router.push("/type");
					}}
				>
					건입
				</Button>
				<Button
					className="text-xl w-9/12 bg-[#43b9dd] focus:bg-[#1187AB] h-14 shadow-md shadow-gray-500"
					onClick={() => {
						setPlace("중문");
						router.push("/type");
					}}
				>
					중문
				</Button>
				<Button
					className="text-xl w-9/12 bg-[#43b9dd] focus:bg-[#1187AB] h-14 shadow-md shadow-gray-500"
					onClick={() => {
						setPlace("후문");
						router.push("/type");
					}}
				>
					후문
				</Button>
				<Button
					className="text-xl w-9/12 bg-[#43b9dd] focus:bg-[#1187AB] h-14 shadow-md shadow-gray-500"
					onClick={() => {
						setPlace("어디든");
						router.push("/type");
					}}
				>
					어디든
				</Button>
			</div>
		</div>
	);
}
