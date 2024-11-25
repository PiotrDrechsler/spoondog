"use client";

import { FromLoveDescription } from "@/components/FromLoveDescription/FromLoveDescription";
import { PetHistoryItem } from "@/components/PetHistoryItem/PetHistoryItem";
import { petsData } from "@/data/petsData";

import { useParams } from "next/navigation";

export default function FromLovePage() {
  const { id } = useParams();
  const pet = petsData.find((pet) => pet.name === id);

  return (
    <div className="mt-20">
      {pet ? <PetHistoryItem name={pet.name} /> : <FromLoveDescription />}
    </div>
  );
}
