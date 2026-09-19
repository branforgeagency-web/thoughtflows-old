import React, { useState, useEffect } from 'react';
// import img5 from "../images/AboutImg/contact-dec-01.png";


function CountDown() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [isHovered, setIsHovered] = useState({ box1: false, box2: false, box3: false, box4: false });
  const target1 = 35000;
  const target2 = 25000;
  const target3 = 49;
  const target4 = 12;
  const duration = 3000;

  useEffect(() => {

    const intervalTime = 30;
    const increment1 = target1 / (duration / intervalTime);
    const increment2 = target2 / (duration / intervalTime);
    const increment3 = target3 / (duration / intervalTime);
    const increment4 = target4 / (duration / intervalTime);

    const interval1 = setInterval(() => {
      setCount1((prevCount) => {
        if (prevCount >= target1) {
          clearInterval(interval1);
          return target1;
        }
        return Math.min(prevCount + increment1, target1);
      });
    }, intervalTime);

    const interval2 = setInterval(() => {
      setCount2((prevCount) => {
        if (prevCount >= target2) {
          clearInterval(interval2);
          return target2;
        }
        return Math.min(prevCount + increment2, target2);
      });
    }, intervalTime);

    const interval3 = setInterval(() => {
      setCount3((prevCount) => {
        if (prevCount >= target3) {
          clearInterval(interval3);
          return target3;
        }
        return Math.min(prevCount + increment3, target3);
      });
    }, intervalTime);

    const interval4 = setInterval(() => {
      setCount4((prevCount) => {
        if (prevCount >= target4) {
          clearInterval(interval4);
          return target4;
        }
        return Math.min(prevCount + increment4, target4);
      });
    }, intervalTime);



    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, [target1, target2, target3, target4, duration]);

  return (

    <div style={styles.container} className='countdown-container'>
      <div className='countdown-container-card'
        style={{ ...styles.box, ...styles.box1, ...(isHovered.box1 && styles.hoverEffect) }}
        onMouseEnter={() => setIsHovered({ ...isHovered, box1: true })}
        onMouseLeave={() => setIsHovered({ ...isHovered, box1: false })}
      >
        <div style={styles.number}>{Math.floor(count1).toLocaleString()}+</div>
        <div style={styles.label}>Training</div>
      </div>
      <div className='countdown-container-card'
        style={{ ...styles.box, ...styles.box2, ...(isHovered.box2 && styles.hoverEffect) }}
        onMouseEnter={() => setIsHovered({ ...isHovered, box2: true })}
        onMouseLeave={() => setIsHovered({ ...isHovered, box2: false })}
      >
        <div style={styles.number}>{Math.floor(count2).toLocaleString()}+</div>
        <div style={styles.label}>Placements</div>
      </div>

      <div className='countdown-container-card'
        style={{ ...styles.box, ...styles.box3, ...(isHovered.box3 && styles.hoverEffect) }}
        onMouseEnter={() => setIsHovered({ ...isHovered, box3: true })}
        onMouseLeave={() => setIsHovered({ ...isHovered, box3: false })}
      >
        <div style={styles.number}>{Math.floor(count3).toLocaleString()}+</div>
        <div style={styles.label}>Courses</div>
      </div>

      <div className='countdown-container-card'
        style={{ ...styles.box, ...styles.box4, ...(isHovered.box4 && styles.hoverEffect) }}
        onMouseEnter={() => setIsHovered({ ...isHovered, box4: true })}
        onMouseLeave={() => setIsHovered({ ...isHovered, box4: false })}
      >
        <div style={styles.number}>{Math.floor(count4).toLocaleString()}+</div>
        <div style={styles.label}>Branch</div>
      </div>
    </div>

  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: '20px',
    padding: "0px 80px 0px 80px",
    height: "300px",
    width: "100%",
    backgroundColor: "#15aebb",
    borderTopLeftRadius: "500px",
    borderBottomLeftRadius: "500px",
    marginBottom:'35px'
  },
  box: {
    width: '250px',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    boxShadow: '4px 4px 8px #8376767a',
    fontFamily: 'Reem Kufi',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',

  },
  box1: {
    backgroundColor: 'transparent',
  },
  box2: {
    backgroundColor: 'transparent',
  },
  box3: {
    backgroundColor: 'transparent',
  },
  box4: {
    backgroundColor: 'transparent',
  },
  number: {
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#fff',
  },
  label: {
    fontSize: '22px',
    color: '#fff',
    marginTop: "25px",
    fontWeight: "bold",
    fontSize: "20px",
    fontFamily: 'Poppins'
  },

  hoverEffect: {
    backgroundColor: 'transparent',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
};


export default CountDown;
