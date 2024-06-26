import { useEffect } from "react";
import imageUrl from "../assets/penguins.jpg";
import { toast } from "react-toastify";
import ActionsNavButton from "../components/ActionsNavButton";

export default function InfoPage() {
  useEffect(() => {
    toast("Added to your saved actions", {
      position: "top-center",
    });
  }, []);

  return (
    <div className="font-source-sans mb-5">
      <div className="w-full h-[30rem] object-cover relative">
        <img src={imageUrl} className="w-full h-full object-cover" />
        <h1 className="text-white absolute bottom-0 left-0 p-5 font-black text-4xl">
          Save the penguins
        </h1>
      </div>
      <p className="p-5">
        Welcome to the Penguin Preservation Alliance, where our passion for
        penguins drives everything we do. Nestled in the heart of coastal
        conservation efforts, we are dedicated to safeguarding the world's
        beloved flightless birds through research, rescue missions, and habitat
        protection.
        <br />
        <br />
        Founded on the belief that every penguin species deserves a sustainable
        future, our organization collaborates with scientists,
        environmentalists, and local communities to mitigate threats such as
        climate change, habitat loss, and pollution. Through rigorous field
        studies and innovative conservation projects, we strive to understand
        penguin behavior, monitor their populations, and advocate for policies
        that promote their well-being.
      </p>
      <div className="flex justify-center w-full">
        <ActionsNavButton />
      </div>
    </div>
  );
}
