import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Loader from "./Loader";
import LoadingButton from '@mui/lab/LoadingButton';
import { returnRandom } from '../helpers/uils';
import axios from 'axios';


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


    const generateImage = async() => { 
        if(prompt){

            try {
                setGeneratingImg(true)
                const {data} = await axios.post("http://localhost:8080/api/v1/dalle", {prompt})
                setForm({...form, photo: `data:image/jpeg;base64,${data?.photo}`})
                setGeneratingImg(false)
            } catch (error) {
                alert('Something went wrong....')
                setGeneratingImg(false)
            }

        }
    }


    const submitHandler = async() => {
        if(name && prompt && photo){
            try {
                setLoading(true)
                const {data} = await axios.post("http://localhost:8080/api/v1/posts", {prompt, name, photo})
                navigate("/")
                setLoading(false)
            } catch (error) {
                alert('Something went wrong....')
                setLoading(false)
            }
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


                {loading || generatingImg && <Loader/>}



                <img className='img' src={photo ? photo : '/preview.png'} alt="image-" />

                <Button variant="contained" color="success" onClick={() => generateImage()} disabled={generatingImg}>{generatingImg ? "Generating......." :  "Generate Image"}</Button>

            </Box>

            <br/>
            <br/>
            <br/>
            <br/>

            
            <LoadingButton loading={loading} disabled={generatingImg} style={{width:'50%'}} variant="contained" onClick={() => submitHandler()}>{loading ? "Sharing......." :  "Share It"}</LoadingButton>


        </>
    )
}

export default Form