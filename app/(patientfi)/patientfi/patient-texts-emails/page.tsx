"use client";
import React, { Suspense } from "react";
import { ResourceCard } from "@/app/components/PatientFi/shared/cards/ResourceCard";
import { patientfiPosts } from "@/app/utils/constants/resources_mocks";
import ResourceCardsContainer from "@/app/components/PatientFi/shared/resource-container/ResourceCardsContainer";
import { SubsidiaryResourceType } from "@/app/utils/constants/enaums";

function Page() {
  const pageCards = patientfiPosts.filter(
    (post) =>
      post.type === SubsidiaryResourceType.Emails ||
      post.type === SubsidiaryResourceType.Texts,
  );
  return (
    <Suspense>
      <ResourceCardsContainer title={"Patient Texts & Emails"}>
        {pageCards?.map((card, i) => <ResourceCard key={i} card={card} />)}
      </ResourceCardsContainer>
    </Suspense>
  );
}

export default Page;
