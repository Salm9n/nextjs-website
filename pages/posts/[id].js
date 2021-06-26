import countries from "../../countries.json";

const Country = props => {
  return (
     <div>
      <h1>{countries.post.title}</h1>
      <p>{countries.post.content}</p>
    </div>
  )
}

Country.getInitialProps = ({query}) => {
  return { 
    country: countries[query.id]
  }
}



export default Country 

