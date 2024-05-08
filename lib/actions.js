"use server"
import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {error} from "next/dist/build/output/log";
import {revalidatePath} from "next/cache";

function isInvalidText(text) {
    return !text || text.trim() === ""
}


export default async function shareMeal(prevState, formData) {

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

    if (isInvalidText(meal.title) ||
        isInvalidText(meal.summary) ||
        isInvalidText(meal.instructions) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) ||
        !meal.creator_email.includes("@") ||
        !meal.image || meal.image.size === 0
    ) {
        return {
            message: "Invalid Input"
        }
    }

    await saveMeal(meal)
    revalidatePath('/meals', "layout")
    redirect("/meals")
}