
import './App.css';
import React from 'react'

function App() {
  const [circles, setCircle] = useState([]);

  const handleCanvaClick = (e) =>{
      const canvas = e.target;
      const rect = canvas.getBoundingClinetRect;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const radius = Math.random() * 50 + 10;
      const color = getRandomColor();

      const newCircle = {x,y,radius,color};
      const overlapping = circles.some((circle) => isOverlapping(circle,newCircle));

      if(overlapping){
        newCircle.color ='red';
      }

      setCircle([...circles,newCircle]);
    };

    const isOverlapping = (circle1,circle2) =>{
      const distance = Math.sqrt((circle1.x - circle2.x) ** 2 + (circle1.y - circle2.y) ** 2);

      return distance < circle1.radius + circle2.radius;
    };
    
    const getRandomColor = () => {
      return `#${Math.floor(Math.random() * 16777125).toString(16)}`;
    };

  return (
    <div className="App">
      <canvas
        width="800"
        height="600"
        onClick={handleCanvaClick} style={{border:'1px solid black'}}
      >
        {circles.map((circle,index) =>(
          <circle
            key = {index}
            cx = {circle.x}
            cy = {circle.y}
            r = {circle.radius}
            fill= {circle.color}
          />
        ))}

      </canvas>
    </div>
  );
}

export default App;
