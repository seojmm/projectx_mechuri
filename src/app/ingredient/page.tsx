"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { ingredientState } from "../../atoms/ingredientState";

export default function IngredientPage() {
	const router = useRouter();
	const [ingredient, setIngredient] = useRecoilState(ingredientState);

	return (
		<div className="relative h-full flex">
			<div className="absolute mt-5">
				<Image src="/bubble.png" alt="bubble" width="240" height="100" />
			</div>
			<p className="absolute mt-10 ml-14 font-bold text-xl">
				<span className="text-yellow-300 text-2xl">주재료</span>를
				<br />
				선택해주세요
			</p>
			<div className="absolute right-8 mt-28">
				<Image src="/bird.png" alt="bird" width="60" height="60" />
			</div>
			<div className="absolute bottom-12 flex flex-col justify-center items-center w-full gap-6">
				<Button
					className="text-xl w-9/12 bg-[#43b9dd] focus:bg-[#1187AB] h-14 shadow-md shadow-gray-500"
					onClick={() => {
						setIngredient("밥");
						router.push("/recommendation");
					}}
				>
					밥
				</Button>
				<Button
					className="text-xl w-9/12 bg-[#43b9dd] focus:bg-[#1187AB] h-14 shadow-md shadow-gray-500"
					onClick={() => {
						setIngredient("빵");
						router.push("/recommendation");
					}}
				>
					빵
				</Button>
				<Button
					className="text-xl w-9/12 bg-[#43b9dd] focus:bg-[#1187AB] h-14 shadow-md shadow-gray-500"
					onClick={() => {
						setIngredient("면");
						router.push("/recommendation");
					}}
				>
					면
				</Button>
				<Button
					className="text-xl w-9/12 bg-[#43b9dd] focus:bg-[#1187AB] h-14 shadow-md shadow-gray-500"
					onClick={() => {
						setIngredient("아무거나");
						router.push("/recommendation");
					}}
				>
					아무거나
				</Button>
			</div>
		</div>
	);
}
