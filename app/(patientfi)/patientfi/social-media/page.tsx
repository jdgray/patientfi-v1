"use client";
import React, { Suspense } from "react";
import { ResourceCard } from "@/app/components/PatientFi/shared/cards/ResourceCard";
import { patientfiPosts } from "@/app/utils/constants/resources_mocks";
import ResourceCardsContainer from "@/app/components/PatientFi/shared/resource-container/ResourceCardsContainer";
import { PatientFiResourceType } from "@/app/utils/constants/enaums";

function Page() {
  const pageCards = patientfiPosts.filter(
    (post) => post.type === PatientFiResourceType.SocialMedia,
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
