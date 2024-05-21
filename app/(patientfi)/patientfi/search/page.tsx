"use client";
import React, { Suspense } from "react";
import { ResourceCard } from "@/app/components/PatientFi/shared/cards/ResourceCard";
import { patientfiPosts } from "@/app/utils/constants/resources_mocks";
import ResourceCardsContainer from "@/app/components/PatientFi/shared/resource-container/ResourceCardsContainer";

function Page() {
  return (
    <Suspense>
      <ResourceCardsContainer title={""} searchPage>
        {patientfiPosts?.map((card, i) => {
          return <ResourceCard key={i} card={card} />;
        })}
      </ResourceCardsContainer>
    </Suspense>
  );
}

export default Page;
