import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Posts = ({posts,currentPage,loading,message}) => {
    const [response,setResponse] = useState([{}]);
    const [visited,setVisited]=useState([]);
    const [checkradio,setRadio] = useState(null);
    const handleResponse = (e) =>{
            localStorage.setItem(currentPage,e.target.value);
            setRadio(currentPage);
            if(!visited.includes(currentPage)){
                setResponse([...response,{id:currentPage,value:e.target.value}])
                setVisited([ ...visited,currentPage]);
            }
            if(visited.includes(currentPage)){
                response.forEach((item,index) =>{
                    if(item.id === currentPage){
                        response[index].value = e.target.value;
                    }
                })
           
            }
    }
    console.log(response);
    if(loading){
        return <h2>Loading</h2>
    }
    if(message){
        return <h2>{message}</h2>
    }
    return ( 
        <div>
            {posts.map((post,index) =>(
                <div key={index}>
                <h4>
                    {currentPage}.{" "}{post.question}
                </h4>
                <div className="form-check">
                     <input className="form-check-input mb-5" type="radio" name={currentPage} id="optionA" checked={checkradio === currentPage}  onChange={handleResponse} value="A" />
                        <label className="form-check-label col-6" forhtml="A">
                        <h4>a) {post.optionA}</h4>
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input mb-5" type="radio" name={currentPage} id="optionB"   checked={checkradio === currentPage}  onChange={handleResponse}  value="B" />
                      <label className="form-check-label col-6" forhtml="B">
                      <h4>b) {post.optionB} </h4>
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input mb-5" type="radio" name={currentPage} id="optionC"   checked={checkradio === currentPage}  onChange={handleResponse}  value="C" />
                      <label className="form-check-label col-6" forhtml="C">
                       <h4>c) {post.optionC}</h4> 
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input mb-5"  type="radio" name={currentPage} id="optionD"   checked={checkradio === currentPage} onChange={handleResponse} value="D" />
                      <label className="form-check-label col-6" forhtml="D">
                        <h4>d) {post.optionD}</h4>
                    </label>
                </div>
            </div>
            ))}
        </div>
    )
};
 
export default Posts;