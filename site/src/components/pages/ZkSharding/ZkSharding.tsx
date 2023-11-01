import Container from "components/Container";
import React from "react";
import { zkShardingPageData } from "stubs/zkShardingPageData";
import Intro from "./Intro";

import s from "./ZkSharding.module.scss";
import Hero from "./Hero";
import JoinNil from "pages/Home/JoinNil";
import About from "pages/Home/About";

type Props = {
	data: typeof zkShardingPageData;
};

const ZkSharding = ({ data }: Props) => {
	return (
		<Container>
			<Intro />

			<div className={s.wrapper}>
				<div className={s.content}>
					<Hero data={data.hero} />
					<JoinNil data={data.joinNil} withMargin />
					<About data={data.about} />
				</div>
			</div>

			<div id="footer_nav" />
		</Container>
	);
};

export default ZkSharding;
