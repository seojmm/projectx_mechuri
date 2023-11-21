"use client";

import React from "react";
import Image from "next/image";
import { recommendState } from "../../atoms/recommendState";
import { useRecoilState } from "recoil";
import { Spinner } from "@material-tailwind/react";

export default function RecommendationPage() {
	const [recommend, setRecommend] = useRecoilState(recommendState);

	if (recommend) {
		return (
			<div className="bg-[#0096C4] h-full w-full">
				<Image src="/추천글자.png" alt="recommend" width="120" height="80" />
			</div>
		);
	} else {
		return <Spinner className="h-10 w-10" />;
	}
}
