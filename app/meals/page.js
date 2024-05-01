import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import {getMeals} from "@/lib/meals";

export default async function MealsPage(){
    const meals = await getMeals()
    return(
        <>
            <header className={classes.header}>
                <h1>
                    Delicious Meals, created{" "}
                    <span className={classes.highlight}>
                        by you
                    </span>
                </h1>
                <p>Choose your favourite recipe and cook yourself.</p>
                <p className={classes.cta}>
                    <Link href={'/meals/share'}>Share your favourite recipe</Link>
                </p>

            </header>

            <main>
                <MealsGrid meals={meals} />
            </main>
        </>
    )
}