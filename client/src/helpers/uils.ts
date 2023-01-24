import {samplePrompts} from "./sample";
import FileSaver from 'file-saver';

export const returnRandom = (prompt:string) : string => {

    const randomSampleIndex = Math.floor(Math.random() * samplePrompts.length - 1);

    const randomPromptRes =  samplePrompts[randomSampleIndex]



    // if no repeat again,, [rare case]
    if(prompt ===  randomPromptRes) return returnRandom(prompt);

    return randomPromptRes;

}


export const downloadImage = (id:string | number, photo:string) => {
    FileSaver.saveAs(photo, `download_${id}.jpg`)

}