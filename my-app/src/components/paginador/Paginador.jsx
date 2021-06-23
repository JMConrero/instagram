import React from 'react'
import next from '../../img/svg/arrow-left.svg'
import prev from '../../img/svg/arrow-right.svg'



export default function Paginador({pages,current,handlePaginador}){
    return(
        <div className="pagination">
            {current > 0 && (
                <button onClick={() => handlePaginador(current-1)}>
                    <img src={prev} alt="prev"/>Anterior
                </button>
            )}

            {current < pages-1 && (
                <button onClick={() => handlePaginador(current+1)}>
                        Siguiente <img src={next} alt="next"/>
                </button>
            )}
        </div>
    )
}