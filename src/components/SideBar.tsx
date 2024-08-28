import { useState } from "react";
import ListItem from "./ListItem";
const dropDownList = [
  {
    name: "소개",
    list: [
      "-인사말",
      "-비전과 목표",
      "-추진 전략",
      "-세부 사업",
      "-조직도",
      "-정관",
      "-오시는 길",
    ],
  },
  {
    name: "공지사항",
    list: ["-주요소식", "고객의 소리", "공익법인 감독기관", "기부금 후원 현황"],
  },
  { name: "주요사업" },
  { name: "협력동향", list: ["-정책·언론 동향 등", "-관련 영상"] },
];

function SideBar() {
  const [activeIndex, setActiveIndex] = useState(Number);

  return (
    <div>
      {dropDownList.map((item, idx) => {
        const active = idx === activeIndex ? "active" : "";
        return (
          <div>
            {item.list && (
              <ListItem
                name={item.name}
                idx={idx}
                list={item.list}
                active={active}
                activeIndex={activeIndex ?? -1}
                setActiveIndex={setActiveIndex}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
