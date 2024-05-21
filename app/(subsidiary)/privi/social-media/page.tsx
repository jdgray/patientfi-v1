"use client";
import React, { Suspense } from "react";
import { ResourceCard } from "@/app/components/Subsidiary/shared/cards/ResourceCard";
import { priviPosts } from "@/app/utils/constants/resources_mocks";
import ResourceCardsContainer from "@/app/components/Subsidiary/shared/resource-container/ResourceCardsContainer";
import { SubsidiaryResourceType } from "@/app/utils/constants/enaums";

function Page() {
  const pageCards = priviPosts.filter(
    (post) => post.type === SubsidiaryResourceType.SocialMedia,
  );
  return (
    <Suspense>
      <ResourceCardsContainer title={"Social media"}>
        {pageCards?.map((card, i) => {
          return <ResourceCard key={i} card={card} />;
        })}
      </ResourceCardsContainer>
    </Suspense>
  );
}

export default Page;
