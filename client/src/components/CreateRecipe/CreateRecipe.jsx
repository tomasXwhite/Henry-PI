import axios from 'axios';
import React,{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './CreateRecipe.module.css'
import { getDiets, newRecipe } from '../../redux/actions/actions';


function CreateRecipe(props) {

const _diets = useSelector((state) => state.diets)     //me traigo el arreglo con dietas de mi estado global

const dispatch = useDispatch()

    React.useEffect(() => {         //aca hago un didmount para dietas tambien, asi si actualizo la pag tengo las dietas igual
       dispatch(getDiets())
       console.log('dietass')
       console.log(_diets)
     }, [ ]) 
    

    const [input, setInput] = useState({
        title: "",
        summary: "",
        healthScore: "",
        instructions: "",
        image: "",
        

    })
    const [diets, setDiets] = useState({
      vegan: false,
      vegetarian: false,
      "gluten free": false,
      "dairy free": false,
      ketogenic: false,
      "whole 30": false,
      primal: false,
    });
    const [errors, setErrors] = useState({})



    function validate(input) {
        let error={}
        if(!input.title) error.title = "Title must not be null"
        if(input.title.length > 50) error.title = "Title must not have more than 50 characters"
        if(!/^[ A-Za-z0-9_@./#&+-]*$/.test(input.title)) error.title= "No special characters accepted"
        if(!input.summary) error.summary = "Summary must not be null"
        if(!/^[0-9]+$/.test(input.healthScore) ) error.healthScore = "must to contain numbers"
        if(input.healthScore < 0 ) error.healthScore = "Health cannot be negative"
        if(input.healthScore > 100) error.healthScore = "Health cannot be +100"
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
 
        setDiets({
            ...diets,
            [e.target.name]: e.target.checked
        })
        
        console.log('handle', )

    }

    function handleSubmit(e) {
        e.preventDefault();


        const result = Object.entries(diets)
      .filter(([dietName, isChecked]) => isChecked === true)
      .map(([dietName]) => dietName);

        const data = {
            ...input,
            diets: result.map(d => {
              return {name: d}
            })
        }


        dispatch(newRecipe(data))
        alert("Receta creada con éxito")
        setInput({
            title: "",
            summary: "",
            healthScore: "",
            instructions: "",
            image: "",
        })
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
            {errors.summary && <p className={s.danger} >{errors.summary}</p> }
            </div>
            <br></br>
            <div className={s.group}>
            <input type='number' id='healthScore' name='healthScore' value={input.healthScore} className={s.input} placeholder=" " onChange={(e) => handleChange(e)}/>
            <label for='healthScore' className={s.label}>Health Score:</label>
            <span className={s.span}></span>
            {errors.healthScore && <p className={s.danger} >{errors.healthScore}</p> }
            </div>
            <br></br>
            <div className={s.group}>
            <input type='text' id='instructions' name='instructions' value={input.instructions} className={s.input} placeholder=" " onChange={(e) => handleChange(e)}/>
            <label for='instructions' className={s.label}>Instructions:</label>
            <span className={s.span}></span>
            </div>

            <menu class="menuu">
                  <div id="demo1" class="menuitemm">
                    <a class="aa">Filter</a>
                    <menu class="menuu">
                      <div class="menuitemm">
                        <a class="aa">
                          vegan
                          <input
                            type="checkbox"
                            class="toggle"
                            name="vegan"
                            checked={props.vegan}
                            onChange={(e) => handleDiets(e)}
                          />
                        </a>{" "}
                      </div>
                      <div class="menuitemm">
                        <a class="aa">
                          vegetarian{" "}
                          <input
                            type="checkbox"
                            class="toggle"
                            name="vegetarian"
                            checked={props.vegetarian}
                            onChange={(e) => handleDiets(e)}
                          />
                        </a>
                      </div>
                      </menu>
                      </div>
                      </menu>
            
            <br></br>
           {
            errors.title || errors.healthScore || errors.summary ?
            <button  className={s.notCreate} ><span>Create</span></button>
            :
            <button type='submit' className={s.create} value='Create '><span>Create</span></button>

           }

            {/* <div >
                <select>
                <label>dieta vegana</label>
                <input type="checkbox" name="checkkkkk"/>
                </select>

            </div> */}
           
            </div>
            
            
        </form>




    </div>       
    )
}


export default CreateRecipe;