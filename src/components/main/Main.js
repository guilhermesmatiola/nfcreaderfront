import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import Home from "../home/Home";
import UserContext from "../context/UserContext";
import url from "../services/urls";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

export default function Main() {
	
	const { userInformation } = useContext(UserContext);
	const navigate = useNavigate();
	const [infos, setInfos] = useState([])

	// if(!userInformation.token){
	// 	navigate("/signin")
	//   }

	let config = {
		headers: {
			Authorization: `Bearer ${userInformation.token}`,
		},
	};

	useEffect(() => {
    
		const request = axios.get(url.teste, config);
	
		request.then(response => {
		  setInfos(response.data)
		});
	
		request.catch(error => {
		  console.log(error);
		});
	  }, []);

	  console.log(infos)
	return (
		<>
		
			<Home>
				<Render>
				{infos.map((item, index)=>(
					<Recommendation>
						<Titles>
							<h1>{item.username}</h1>
							<h2>{dayjs(item.createdAt).format('DD/MM/YY')} as {dayjs(item.createdAt).format('HH:mm:ss')} </h2>
						</Titles>    
					</Recommendation>
				))}
				</Render>
			</Home>
			</>
	);
}


const Render = styled.div`
  display: flex;
  flex-direction: column;
  #divContent{
    overflow:auto; 
  }
  overflow-y: scroll;
`


const Recommendation = styled.div`
  margin-top: 8px;
  border: 2px solid black;
  min-width: 100px;
  min-height: 80px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
 // overflow-y: auto;
  
  img{
    height: 100px;
    width: 100px;
  }
  h2{
    display: flex;
    flex-direction: row;
    font-size: 20px;
    h1{
      color:red;
      font-size: 20px;
      margin-right: 2px;
    }
  }
`
const Titles = styled.div`
  display: flex;
  flex-direction: column;
  h1{
    color:black;
    font-size: 28px;
  }
  h3{
    margin: 3px 3px 3px 0;
  }
`