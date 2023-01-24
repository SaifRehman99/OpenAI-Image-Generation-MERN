import {samplePrompts} from "./sample";



export const returnRandom = (prompt:string) : string => {

    const randomSampleIndex = Math.floor(Math.random() * samplePrompts.length - 1);

    const randomPromptRes =  samplePrompts[randomSampleIndex]



    // if no repeat again,, [rare case]
    if(prompt ===  randomPromptRes) return returnRandom(prompt);

    return randomPromptRes;

}