import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  name: string;
  list: string[];
  active: string;
  activeIndex: number;
  setActiveIndex: (index: number) => void; // `setActiveIndex`에 인자를 받도록 타입 지정
  idx: number;
}

const ListItem: React.FC<Props> = ({
  name,
  list,
  active,
  activeIndex,
  setActiveIndex,
  idx,
}) => {
  const navigate = useNavigate();
  const [clickedIdx, setClickedIdx] = useState<number | undefined>(undefined); // 초기값과 타입 지정

  // 1단 메뉴 클릭 이벤트 처리 함수
  const handleClick = () => {
    setActiveIndex(idx); // `idx` 전달
    setClickedIdx(undefined); // `clickedIdx` 초기화
    navigate(`/${name}`); // 페이지 이동
  };

  // 2단 메뉴 클릭 이벤트 처리 함수
  const handleLink = (e: React.MouseEvent<HTMLLIElement>, idx: number) => {
    e.preventDefault(); // 기본 동작 방지 (필요한 경우)
    setClickedIdx(idx); // 클릭된 인덱스 저장
    navigate(`/${name}`, { state: { clicked: idx } }); // 상태와 함께 페이지 이동
  };

  return (
    <div>
      {/* 상위 컴포넌트에서 받아온 active 변수를 className으로 넘겨준다 */}
      {/* 이 때 `active`라는 변수가 활성화되면 이에 대응하는 스타일링을 처리해준다 */}
      <div className={active}>
        <div onClick={handleClick}>
          <div></div>
          <div>{name}</div>
        </div>
        <div className={idx === activeIndex ? "" : "closed"}>
          {list.map((menu, idx) => (
            <li
              key={idx} // 각 <li>에 고유한 key 추가
              onClick={(e) => handleLink(e, idx)}
              className={clickedIdx === idx ? "strong" : ""}
            >
              {menu}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
