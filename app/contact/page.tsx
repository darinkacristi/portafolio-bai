import type { Metadata } from "next";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "¿Tienes un proyecto en mente? Hablemos. Disponible para producciones audiovisuales en Chile y el mundo.",
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactCTA />
    </div>
  );
}
