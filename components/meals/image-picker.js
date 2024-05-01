"use client"

import classes from "./image-picker.module.css";
import {useRef, useState} from "react";
import Image from "next/image";

export default function ImagePicker({label, name}) {

    const [pickedImage, setPickedImage] = useState()

    const imageInput = useRef()

    function handlePickClick() {
        imageInput.current.click()
    }

    function handleImageChange(event) {
        const file = event.target.files[0]
        if (!file) {
            return;
        }
        const fileReader = new FileReader()
        fileReader.onload = (url) =>{
          setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file)

    }

    return <div className={classes.picker}>
        <label htmlFor={name}>
            {label}
        </label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {
                    !pickedImage && <p>No Image picked yet</p>
                }

                {
                    pickedImage && <Image src={pickedImage} alt={"The image selected by user"} fill/>
                }
            </div>
            <input
                className={classes.input}
                type={"file"}
                id={name}
                accept={"image/jpeg , image/png"}
                name={name}
                ref={imageInput}
                // multiple -> if you want user to pick multiple files
                onChange={handleImageChange}
            />
            <button className={classes.button}
                    type={"button"} onClick={handlePickClick}>
                Pick an image
            </button>
        </div>
    </div>
}