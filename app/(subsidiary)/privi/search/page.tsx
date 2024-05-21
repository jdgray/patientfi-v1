"use client";
import React, { Suspense } from "react";
import { ResourceCard } from "@/app/components/Subsidiary/shared/cards/ResourceCard";
import { priviPosts } from "@/app/utils/constants/resources_mocks";
import ResourceCardsContainer from "@/app/components/Subsidiary/shared/resource-container/ResourceCardsContainer";

function Page() {
  return (
    <Suspense>
      <ResourceCardsContainer title={""} searchPage>
        {priviPosts?.map((card, i) => {
          return <ResourceCard key={i} card={card} />;
        })}
      </ResourceCardsContainer>
    </Suspense>
  );
}

export default Page;
