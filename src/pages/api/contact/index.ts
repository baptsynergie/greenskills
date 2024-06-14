import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request, redirect }) => {
    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const firstName = formData.get("firstName")?.toString();
    const lastName = formData.get("lastName")?.toString();
  
    if (!firstName || !lastName) {
      return new Response("Missing required fields", {
        status: 400,
      });
    }
    try {
      const db = getFirestore(app);
      const contactRef = db.collection("contact");
      await contactRef.add({
        email,
        firstname: firstName,
        lastname: lastName,
      });
    } catch (error) {
        console.log(error)
      return new Response("Something went wrong", {
        status: 500,
      });
    }
    return redirect("/dashboard");
  };