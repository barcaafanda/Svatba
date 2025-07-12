"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "./api/uploadthing/core";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg p-8 rounded-xl text-center">
        <h1 className="text-2xl font-bold mb-4">📸 Nahraj své fotky</h1>
        <p className="mb-4 text-sm text-gray-600">Bez přihlášení. Max 5 fotek do 4 MB.</p>
        <UploadButton<OurFileRouter>
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            alert("Hotovo! Fotky nahrány ✅");
            console.log(res);
          }}
          onUploadError={(error) => {
            alert(`Chyba při nahrávání: ${error.message}`);
          }}
          appearance={{
            button: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
            container: "",
            allowedContent: "text-sm text-gray-500 mt-2",
          }}
        />
      </div>
    </main>
  );
}