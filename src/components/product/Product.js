import React from "react";
import "./product.css";
import {
  FaArrowLeft,
  FaCommentDots,
  FaEdit,
  FaRegThumbsUp,
} from "react-icons/fa";

const Product = () => {
  return (
    <div className="product">
      <div className="back-question">
        {" "}
        <FaArrowLeft /> Back To Questions
      </div>
      <div className="main">
        <div className="box-1">
          <div className="box1-top">
            <div className="tag">
              <span className="box1-span">Design</span>{" "}
              <span className="box1-span">technology</span>
            </div>
            <div className="startup">
              <div className="startup-img"></div>
              <div className="startup-text">Startup</div>
            </div>
          </div>
          <div className="question">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod iusto
            alias cum. Quas itaque provident alias minima est pariatur, unde
            quos explicabo impedit quo porro, consequatur beatae aut aliquid
            dolores!
          </div>
          <div className="ans">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod iusto
            alias cum. Quas itaque provident alias minima est pariatur, unde
            quos explicabo impedit quo porro, consequatur beatae aut aliquid
            dolores!
          </div>
          <div className="box-last">
            <div className="views">100</div>
            <div className="your-ans">How should you word your answer?</div>
          </div>
        </div>
      </div>

      <div className="answers">
        <div className="answers-text">
            <p>Answers(23)</p>
        </div>
        <div className="sort">
            sort by: 
            <select className="sort-select">
                <option value="">Popular</option>
            </select>
        </div>
      </div>

      <div className="main2">
        <div className="box-2">
          <div className="box2-all">
            <div className="user-img"></div>
            <div className="info">
              <p className="name">Neha Bhat (You)</p>
              <span>jun 17,2023</span>
            </div>
            <div className="edit">
              {" "}
              <FaEdit /> Edit
            </div>
          </div>
          <div className="your-para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod iusto
            alias cum. Quas itaque provident alias minima est pariatur, unde
            quos explicabo impedit quo porro, consequatur beatae aut aliquid
            dolores!
          </div>

          <div className="all-commentes">
            <div className="all-item">
              <div className="like">
                <FaRegThumbsUp /> <span>Like</span>
              </div>
              <div className="comment">
                <FaCommentDots />
                <input type="text" placeholder="Enter You Comment..." />
              </div>
              <div className="button">
                <button className="button" >
                    Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
