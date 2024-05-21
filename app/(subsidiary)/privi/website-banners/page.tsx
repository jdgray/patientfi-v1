"use client";
import React, { Suspense } from "react";
import { ResourceCard } from "@/app/components/Subsidiary/shared/cards/ResourceCard";
import { priviPosts } from "@/app/utils/constants/resources_mocks";
import ResourceCardsContainer from "@/app/components/Subsidiary/shared/resource-container/ResourceCardsContainer";
import { IResourceCardType } from "@/app/utils/interfaces";
import { SubsidiaryResourceType } from "@/app/utils/constants/enaums";

function Page() {
  const pageCards = priviPosts.filter(
    (post) => post.type === SubsidiaryResourceType.WebsiteBanners,
  );
  return (
    <Suspense>
      <ResourceCardsContainer title={"Website Banners"}>
        {pageCards?.map((card, i) => (
          <ResourceCard key={i} card={card as unknown as IResourceCardType} />
        ))}
      </ResourceCardsContainer>
    </Suspense>
  );
}

export default Page;
