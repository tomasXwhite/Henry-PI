import React from "react";
import { Link } from "react-router-dom";
import s from './Pagination.module.css' 

function Pagination(props) {
    return (
        <div className={s.maxPagContainer}>
             <div className={s.paginationContainer}>
        {props.controlP === false ? (
          <Link to={`/recipes?page=${parseInt(props.pageN) -1}`} >
            <button className={s.pagBtn}>Previous page</button>
          </Link>
        ) : (
          <button className={s.danger}>Previous page</button>
        )}

     
        {props.controlN === false ? (
          <Link to={`/recipes?page=${parseInt(props.pageN) + 1}`}>
            {" "}
            {/* renderizo el boton q me redirecciona a la next page mientras control de next===false y si es true renderizo un boton rojo q no hace nada*/}
            <button className={s.pagBtn}>Next page</button>
          </Link>
        ) : (
          <button className={s.danger}>Next page</button>
        )}
        </div>
        </div>
    )
}


export default Pagination;