import React from "react";

const Cards = (props) => {
  console.log({ props });
  const Cards = props.info.map((e) => {
    return (
      <div
        style={{
          backgroundColor: e.color,
          width: "52%",
          margin: "auto",
          marginTop:"22px",
          padding: "22px",
        }}
      >
        <div>
            {/* 1st div for date and logo */}
          <div
            style={{
              display: "flex",
              gap: "25px",
              justifyContent: "space-between",
            }}
          >
            <h3>{e.expiry}</h3>
            <img
              style={{ width: "85px" }}
              alt="Logo of element"
              src={e.logo}
            />
          </div>
          <div>
            <div
              style={{
                backgroundColor: "black",
                height: "41px",
                color: "white",
                fontSize: "122%",
                padding: "2px 5px",
                width:"100px"
                
              }}
            >
              Case Study
            </div>
            <h1>{e.title}</h1>
            <h1>{e.subTitle}</h1>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <p style={{ fontWeight: "601", fontSize: "121%" }}>
                {e.onUse}
              </p>
              <h2>{"—>"}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{Cards}</div>;
};

export default Cards;