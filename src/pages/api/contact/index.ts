import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request, redirect }) => {

    const body = await request.json();

    const email = body.email;

    if (!email) {
      return new Response("Missing required fields", {
        status: 400,
      });
    }
    try {
      const db = getFirestore(app);
      const contactRef = db.collection("contact");
      await contactRef.add({
        email,
      });
    } catch (error) {
        console.log(error)
      return new Response("Something went wrong", {
        status: 500,
      });
    }
    
    return new Response(JSON.stringify({ message: "Merci ! La plaquette est disponible dans un nouvel onglet ⚡" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  };