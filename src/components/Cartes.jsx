import React from "react";
import { Card, Button } from "react-bootstrap";
const Cartes = ({
  title = "default title",
  imgUrl = "https://images.pexels.com/photos/29334426/pexels-photo-29334426/free-photo-of-femme-tenant-des-fleurs-de-lilas-blanches-a-l-exterieur.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  description = "default description",
}) => {

    const handleBtn = () => alert(`Hello ${title}`)
    
//   console.log({ title, imgUrl, description });
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={()=>handleBtn()} >Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

//les ancienne versions (old version)
// Cartes.defaultProps = {
//   title: "default title",
//   imgUrl:
//     "https://images.pexels.com/photos/29334426/pexels-photo-29334426/free-photo-of-femme-tenant-des-fleurs-de-lilas-blanches-a-l-exterieur.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
//   description: "default description",
// };
export default Cartes;
