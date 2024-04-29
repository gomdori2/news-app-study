import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { NavLink } from "react-router-dom";

const CategoriesStyle = styled.div`
  display: flex;
  gap: 15px;
  padding: 1rem;
  width: 768px;
  height: auto;
  margin: 0 auto;

  /* 일반 */
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
  /* :hover */

  /* 활성화 됬을 때 */
`;

const NavLinkStyle = styled(NavLink)`
  // :hover ;
  font-size: 1.125rem;
  white-space: pre; // 공백 줄바꿈 유지
  // color : inherit 부모요소 상속 받는다.
  padding-bottom: 0.25rem;
  &:hover {
    color: #939292;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #14c5c5;
    color: #14c5c5;
  }
  /* ${props =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #14c5c5;
      color: #14c5c5;
    `} */
`;
const categories = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "비즈니스" },
  { name: "entertainment", text: "엔터테인먼트" },
  { name: "health", text: "건강" },
  { name: "science", text: "과학" },
  { name: "sports", text: "스포츠" },
  { name: "technology", text: "기술" },
];

const Categories = () => {
  return (
    <CategoriesStyle>
      {categories.map(item => (
        <NavLinkStyle
          to={item.name === "all" ? "/" : `/${item.name}`}
          param={item.name}
          key={item.name}
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {item.text}
        </NavLinkStyle>
      ))}
    </CategoriesStyle>
  );
};

export default Categories;
