import React,{ useState } from 'react';

import s from './CreateRecipe.module.css'


function CreateRecipe(props) {



    const [input, setInput] = useState({
        title: "",
        summary: "",
        health: "",
        steps: "",

    })

    const [errors, setErrors] = useState({})



    function validate(input) {
        let error={}
        if(!input.title) error.title = "No hay titulo"

        return error
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })


        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
          }));
        

    }

    function handleSubmit(e) {
        e.preventDefault();
        setInput({
        title: "",
        summary: "",
        health: "",
        steps: "",
        })
    }


    return(

    <div className={s.body}>
        <br></br>
        <form className={s.form} onSubmit={(e) => handleSubmit(e)}>
            <h2 className={s.title}>Create recipe</h2>
            
            <div className={s.container}>

            <div className={s.group}>
            <input type='text' id='title' name='title' value={input.title} className={s.input} placeholder=" " onChange={(e) => handleChange(e)}/>
            <label for='title' className={s.label}>Title:</label>
            <span className={s.span}></span>
            {errors.title && <p className={s.danger} >{errors.title}</p> }
            </div>
            <br></br>
            <div className={s.group}>
            <input type='text' id='summary' name='summary' value={input.summary} className={s.input} placeholder=" " onChange={(e) => handleChange(e)}/>
            <label for='summary' className={s.label}>Summary:</label>
            <span className={s.span}></span>
            {errors.summary && <p className={s.danger} >{errors.title}</p> }
            </div>
            <br></br>
            <div className={s.group}>
            <input type='text' id='health' name='health' value={input.health} className={s.input} placeholder=" " onChange={(e) => handleChange(e)}/>
            <label for='health' className={s.label}>Health Score:</label>
            <span className={s.span}></span>
            {errors.health && <p className={s.danger} >{errors.title}</p> }
            </div>
            <br></br>
            <div className={s.group}>
            <input type='text' id='steps' name='steps' value={input.steps} className={s.input} placeholder=" " onChange={(e) => handleChange(e)}/>
            <label for='steps' className={s.label}>Steps:</label>
            <span className={s.span}></span>
            </div>
            <br></br>
            {/* <div className={s.group}>
            <input type='checkbox' id='diets' className={s.input} placeholder=" "/>
            <label for='steps' className={s.label}>Steps:</label>
            <span className={s.span}></span>
            </div>
            <br></br> */}
            <button type='submit' className={s.create} value='Create '><span>Create</span></button>


            </div>
            
            
        </form>




    </div>       
    )
}


export default CreateRecipe;