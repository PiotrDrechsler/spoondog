import { FromLoveDescription } from "@/components/FromLoveDescription/FromLoveDescription";
import { PetHistoryItem } from "@/components/PetHistoryItem/PetHistoryItem";
import { petsData } from "@/data/petsData";

interface FromLovePageProps {
  params: { id: string };
}

export default function FromLovePage({ params }: FromLovePageProps) {
  const { id } = params;
  const pet = petsData.find((pet) => pet.name === "tola"); // !!! IMPORTANT SELF NOTE !!! Pod koniec pracy z komponentem PetHistoryItem zmień ponownie na id !!!
  const petDescription = pet?.description || "";
  const petNameDeclension = pet?.declension || "";

  return (
    <div className="mt-20">
      {pet ? (
        <PetHistoryItem name={pet.name} description={petDescription} nameDeclension={petNameDeclension} />
      ) : (
        <FromLoveDescription />
      )}
    </div>
  );
}
