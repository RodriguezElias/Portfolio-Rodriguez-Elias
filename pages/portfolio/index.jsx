import { useState } from "react";
import Card from "../../components/Card";
import Layouts from "../../components/Layouts";
import styles from "../../styles/Portfolio.module.css";
import json from "../../public/utils/proyect.json";

export default function Portfolio() {
  const [post, setPost] = useState(json.proyects);
  console.log(post);
  return (
    <div>
      <Layouts
        title="Proyectos | Rodriguez Elias"
        description="Seccion de proyectos"
      >
        <div className={styles.containerProyect}>
          <h1>Mis trabajos</h1>
          {post.map((proyect) => {
            return (
              <Card
                key={proyect.id}
                title={proyect.name}
                description={proyect.shortDescription}
                imgBackground={proyect.img}
                params={proyect.name}
              />
            );
          })}
        </div>
      </Layouts>
    </div>
  );
}

//  export async function getStaticProps() {
//    // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//    const data = await res.json()

//    // By returning { props: { posts } }, the Blog component
//    // will receive `posts` as a prop at build time
//    return {
//      props: {
//        data,
//      },
//    }
//  }
