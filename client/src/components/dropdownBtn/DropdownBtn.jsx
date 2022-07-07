import React from "react";
import sty from "./dropdown.module.css";
import "./button.scss";
import "./checkbox.sass";

function DropdownBtn(props) {
  return (
    <selection>
      <form className={sty.center} onSubmit={(e) => e.preventDefault()}>
        <div class="maxbuttoncontainer">
          <div class="containerr">
            <div class="navv">
              <menu class="menuu">
                <div id="demo1" class="menuitemm">
                  <a class="aa">Filter</a>
                  <menu class="menuu">
                    <div class="menuitemm">
                      <a class="aa">
                        A-Z
                        <input
                          type="checkbox"
                          class="toggle"
                          name="checkedAZ"
                          checked={props.checkedAZ}
                          onChange={(e) => props.handleChangeCheck(e)}
                        />
                      </a>{" "}
                    </div>
                    <div class="menuitemm">
                      <a class="aa">
                        Z-A{" "}
                        <input
                          type="checkbox"
                          class="toggle"
                          name="checkedZA"
                          checked={props.checkedZA}
                          onChange={(e) => props.handleChangeCheck(e)}
                        />
                      </a>
                    </div>
                   

                    <div id="demo2" class="menuitemm">
                      <a class="aa">Diets</a>


                      <menu class="menuu">
                        <div class="menuitemm">
                          <a class="aa">
                            vegan
                            <input
                              type="checkbox"
                              class="toggle"
                              name="vegan"
                              checked={props.vegan}
                              onChange={(e) => props.handleDiets(e)}
                            />
                          </a>
                        </div>
                        <div class="menuitemm">
                          <a class="aa">
                            gluten free
                            <input
                              type="checkbox"
                              class="toggle"
                              name="gluten free"
                              checked={props.glutenFree}
                              onChange={(e) => props.handleDiets(e)}
                            />
                          </a>
                        </div>
                        <div class="menuitemm">
                          <a class="aa">
                            dairy free
                            <input
                              type="checkbox"
                              class="toggle"
                              name="dairy free"
                              checked={props.dairyFree}
                              onChange={(e) => props.handleDiets(e)}
                            />
                          </a>
                        </div>
                        <div class="menuitemm">
                          <a class="aa">
                            primal
                            <input
                              type="checkbox"
                              class="toggle"
                              name="primal"
                              checked={props.primal}
                              onChange={(e) => props.handleDiets(e)}
                            />
                          </a>
                        </div>
                        <div class="menuitemm">
                          <a class="aa">
                            whole 30
                            <input
                              type="checkbox"
                              class="toggle"
                              name="whole 30"
                              checked={props.whole30}
                              onChange={(e) => props.handleDiets(e)}
                            />
                          </a>
                        </div>
                        <div class="menuitemm">
                          <a class="aa">
                            ketogenic
                            <input
                              type="checkbox"
                              class="toggle"
                              name="ketogenic"
                              checked={props.ketogenic}
                              onChange={(e) => props.handleDiets(e)}
                            />
                          </a>
                        </div>
                      </menu>
                    </div>
                    




                    <div id="demo2" class="menuitemm">
                      <a class="aa">Health Score</a>
                      <menu class="menuu">
                        <div class="menuitemm">
                          <a class="aa">
                            ASC
                            <input
                              type="checkbox"
                              class="toggle"
                              name="checkedHealth1"
                              checked={props.checkedHealth1}
                              onChange={(e) => props.handleChangeCheck(e)}
                            />
                          </a>
                        </div>
                        <div class="menuitemm">
                          <a class="aa">
                            DESC
                            <input
                              type="checkbox"
                              class="toggle"
                              name="checkedHealth2"
                              checked={props.checkedHealth2}
                              onChange={(e) => props.handleChangeCheck(e)}
                            />
                          </a>
                        </div>
                      </menu>
                    </div>
                  </menu>
                </div>
              </menu>
            </div>
          </div>
          {/* </div> */}
        </div>

        <input
          className={sty.bar}
          type="text"
          placeholder="Search..."
          onChange={(e) => props.handleChangeQuery(e.target.value)} //ejecuto pasandole el valor de lo q dispara el evento, o sea lo q esta escrito
        />
      </form>
    </selection>
  );
}

export default DropdownBtn;
