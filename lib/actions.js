"use server"
import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";

export default async function shareMeal(formData){

    // console.log(formData)

    const meal = {
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        creator: formData.get("name"),
        creator_email: formData.get("email"),
        image: formData.get("image"),
    };

    // console.log(meal);

    await saveMeal(meal)
    redirect("/meals")
}