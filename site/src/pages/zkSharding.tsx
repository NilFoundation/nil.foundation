import MetaLayout from "components/MetaLayout";
import { REVALIDATE } from "constants/common";
import { InferGetStaticPropsType } from "next";
import ZkSharding from "pages/ZkSharding";
import React from "react";
import { getSiteConfig } from "src/strapi";
import { seoData, zkShardingPageData } from "stubs/zkShardingPageData";

const ZkShardingPage = ({
	seo,
	data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<MetaLayout seo={seo}>
			<ZkSharding data={data} />
		</MetaLayout>
	);
};

export async function getStaticProps() {
	const config = await getSiteConfig();
	return {
		props: { data: zkShardingPageData, seo: seoData, config },
		revalidate: REVALIDATE,
	};
}

export default ZkShardingPage;
