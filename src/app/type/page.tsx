"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { typeState } from "../../atoms/typeState";

export default function TypePage() {
	const router = useRouter();
	const [type, setType] = useRecoilState(typeState);

	return (
		<div className="relative h-full flex">
			<div className="absolute mt-5">
				<Image src="/bubble.png" alt="bubble" width="240" height="100" />
			</div>
			<p className="absolute mt-10 ml-12 font-bold text-xl">
				원하시는&nbsp;<span className="text-yellow-300 text-2xl">종류</span>를
				<br />
				골라주세요
			</p>
			<div className="absolute right-8 mt-28">
				<Image src="/bird.png" alt="bird" width="60" height="60" />
			</div>
			<div className="absolute bottom-8 flex flex-col justify-center items-center w-full gap-6">
				<Button
					className="text-xl w-9/12 bg-[#43b9dd] focus:bg-[#1187AB] h-10 shadow-md shadow-gray-500"
					onClick={() => {
						setType("한식");
						router.push("/ingredient");
					}}
				>
					한식
				</Button>
				<Button
					className="text-xl w-9/12 bg-[#43b9dd] focus:bg-[#1187AB] h-10 shadow-md shadow-gray-500"
					onClick={() => {
						setType("중식");
						router.push("/ingredient");
					}}
				>
					중식
				</Button>
				<Button
					className="text-xl w-9/12 bg-[#43b9dd] focus:bg-[#1187AB] h-10 shadow-md shadow-gray-500"
					onClick={() => {
						setType("양식");
						router.push("/ingredient");
					}}
				>
					양식
				</Button>
				<Button
					className="text-xl w-9/12 bg-[#43b9dd] focus:bg-[#1187AB] h-10 shadow-md shadow-gray-500"
					onClick={() => {
						setType("일식");
						router.push("/ingredient");
					}}
				>
					일식
				</Button>

				<Button
					className="text-xl w-9/12 bg-[#43b9dd] focus:bg-[#1187AB] h-10 shadow-md shadow-gray-500"
					onClick={() => {
						setType("분식");
						router.push("/ingredient");
					}}
				>
					분식
				</Button>
				<Button
					className="text-xl w-9/12 bg-[#43b9dd] focus:bg-[#1187AB] h-10 shadow-md shadow-gray-500"
					onClick={() => {
						setType("패스트푸드");
						router.push("/ingredient");
					}}
				>
					패스트푸드
				</Button>
			</div>
		</div>
	);
}
