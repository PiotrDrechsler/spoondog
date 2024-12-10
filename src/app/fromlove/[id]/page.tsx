import FromLoveDescription from "@/components/FromLoveDescription/FromLoveDescription";
import { PetHistoryItem } from "@/components/PetHistoryItem/PetHistoryItem";
import { petsData } from "@/data/petsData";

interface FromLovePageProps {
  params: { id: string };
}

export default function FromLovePage({ params }: FromLovePageProps) {
  const { id } = params;
  const pet = petsData.find((pet) => pet.name === id);
  const petDescription = pet?.description || "";
  const petNameDeclension = pet?.declension || "";
  const petImages = pet?.images || [];

  return (
    <div className="mt-20">
      {pet ? (
        <PetHistoryItem
          name={pet.name}
          description={petDescription}
          nameDeclension={petNameDeclension}
          images={petImages}
        />
      ) : (
        <FromLoveDescription />
      )}
    </div>
  );
}
