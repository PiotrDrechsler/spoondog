const useWatermark = async (imagePath: string) => {
  try {
    const response = await fetch("/api/watermark", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ src: imagePath }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Błąd podczas dodawania watermarku");
    }

    console.log(data.message); // Sukces
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Błąd:", error.message);
    } else {
      console.error("Błąd:", error);
    }
  }
};

export default useWatermark;
