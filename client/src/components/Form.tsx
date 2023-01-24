import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Loader from "./Loader";
import LoadingButton from '@mui/lab/LoadingButton';
import { returnRandom } from '../helpers/uils';


const Form = () => {

    const navigate = useNavigate();


    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: '',
    });

    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);



    const {name, prompt, photo} = form;




    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({...form, [e.target.name] : e.target.value})


    const generateRandomPrompt = () => { 

        const random = returnRandom(prompt);

        setForm({...form, prompt: random})
    }


    const generateImage = () => { 
        if(prompt){

        }
    }


    const submitHandler = () => {
        if(name && prompt && photo){

        }
    }

    return (
        <>
            <h2>Create Post</h2>
            <small>Create imaginative and visually stunning images through DALL-E AI and share them with the community</small>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <TextField fullWidth label="Your name" id="fullWidth" name="name" sx={{ margin: 3 }} onChange={(e) => handleChange(e)} value={name} />
                <Button variant="contained" onClick={() => generateRandomPrompt()}>Random Prompt</Button>
                <TextField fullWidth label="Prompt" name="prompt" id="fullWidth" sx={{ margin: 3 }} onChange={(e) => handleChange(e)} value={prompt}/>


                {loading && <Loader/>}



                <img src={photo ? photo : '/preview.png'} alt="image-" />

                <Button variant="contained" color="success" onClick={() => generateImage()} disabled={generatingImg}>{generatingImg ? "Generating......." :  "Generate Image"}</Button>

            </Box>

            <br/>
            <br/>
            <br/>
            <br/>

            
            <LoadingButton loading={loading} style={{width:'50%'}} variant="contained" onClick={() => submitHandler()}>{loading ? "Sharing......." :  "Share It"}</LoadingButton>


        </>
    )
}

export default Form