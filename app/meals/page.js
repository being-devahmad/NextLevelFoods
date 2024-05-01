import classes from "./page.module.css";
import Link from "next/link";

export default function MealsPage(){
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

            </main>
        </>
    )
}