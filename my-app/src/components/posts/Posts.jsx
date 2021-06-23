import React, {useState, useEffect} from 'react'
import './post.css'
import Paginador from '../paginador/Paginador'
import post from '../../post/post'


export default function Posts(){
    const [postList, setPostList] = useState([])
    console.log(postList)
    
    useEffect(()=>{
        const api = fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=zUqJUBhQc8ayRD9ekQbf4JuaKPdkSvU8&q=$campo&limit=12&offset=0&rating=g&lang=es`
            )
        .then((response) => {
            return response.json();
          })
          .then((results) => {
            setPostList(results.data);
          })

    },[])

    const [pages, setPages] = useState(0);
    const [current, setCurrent] = useState(0);
    const size = 4;

    useEffect(()=>{
        setPages(Math.ceil(postList.length/size));
        setCurrent(0)
    },[8])


    return(
        <>
        <div className="post-container">
            <p className="title">En los medios</p>
            {/* esto será un componente */}
            <div className="layout">
                {post.map((post, index)=>{
                    return(
                        <a className="class1" key={index}  href={post.url}>
                            <img src={post.image} alt={post.id}/>
                        </a>
                    )
                })}
                
            </div>
            {/* <div className="rest-layout">
                {postList.map((post)=>{
                    return(
                        
                    <a href={post.url}>
                     <img src={post.images.original.url} alt={post.title}/>
                    </a>
                    )
                    
                })}
                    
                
                </div> */}
            {/* fin componente */}
            <Paginador
                pages={pages}
                current={current}
                handlePaginador={setCurrent} />
        </div>
        </>
    )
};