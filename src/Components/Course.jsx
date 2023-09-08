import React from "react";

import Total from "./Total";
const Course = (props) => {
  const { courses } = props;

  //   console.log(courses, "test");
  return (
    <div>
      <h1>Web development Curriculum</h1>
      <ul>
        {courses.map(({ name, parts }) => {
          {/* console.log(parts.length, "partsss"); */}

          const total = parts.reduce(
            (preValue, currentValue) => preValue + currentValue.exercises,
            0
          );

          {/* console.log(total, "total number"); */}
          return (
            <>
              <ul key={name}>
                <li>{name}</li>
                <li>
                  {parts.map((part) => {
                    return (
                      <ul key={part.id}>
                        <li>
                          {part.name} {part.exercises}
                          
                        </li>
                       
                      </ul>
                      
                    );
                    
                  })}
                  <Total props={total} />
                         <h4>the total number {total}</h4> 
                </li>
                
              
              </ul>
              

             
            
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Course;
