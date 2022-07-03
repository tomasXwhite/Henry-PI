import axios from 'axios';
import React,{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Multiselect} from 'multiselect-react-dropdown'
import s from './CreateRecipe.module.css'
import { getDiets, newRecipe } from '../../redux/actions/actions';


function CreateRecipe(props) {

const _diets = useSelector((state) => state.diets)     //me traigo el arreglo con dietas de mi estado global

const dispatch = useDispatch()

    React.useEffect(() => {         //aca hago un didmount para dietas tambien, asi si actualizo la pag tengo las dietas igual
       dispatch(getDiets())
    //    console.log('dietass')
    //    console.log(props.diets)
     }, [ ]) 
    

    const [input, setInput] = useState({
        title: "",
        summary: "",
        healthScore: "",
        steps: "",
        diets: []

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

    function handleDiets(e) {
 
        setInput({
            ...input,
            diets: e.map(d => {
                return {name: d}
            })
        })
        console.log('handle', input.diets)

    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(newRecipe(input))
        // console.log(input)
    }

const options = _diets.map((c)=>(c.name))



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
            <input type='text' id='healthScore' name='healthScore' value={input.health} className={s.input} placeholder=" " onChange={(e) => handleChange(e)}/>
            <label for='healthScore' className={s.label}>Health Score:</label>
            <span className={s.span}></span>
            {errors.health && <p className={s.danger} >{errors.title}</p> }
            </div>
            <br></br>
            <div className={s.group}>
            <input type='text' id='steps' name='steps' value={input.steps} className={s.input} placeholder=" " onChange={(e) => handleChange(e)}/>
            <label for='steps' className={s.label}>Steps:</label>
            <span className={s.span}></span>
            </div>
            <div className={s.group}>
            <input type="file" name="myImage" className={s.input} accept="image/*" placeholder='none'/>
            </div>
            <Multiselect 
            isObject={false}
            options={options}
            // value={_diets}
            onSelect={(e)=> handleDiets(e)}
            onRemove={(e) => handleDiets(e)}
            />

            <br></br>
          
            <button type='submit' className={s.create} value='Create '><span>Create</span></button>


            </div>
            
            
        </form>




    </div>       
    )
}


export default CreateRecipe;