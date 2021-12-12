let alert초기값 = true;

let 기본state = [
  // { id: 0, name: "멋진신발", quan: 2,},
  // { id: 1, name: "멋진신발2", quan: 1,},
];

export function reducer(state = 기본state, 액션) {
    if (액션.type === "항목추가") {
      let copy = [...state];
      copy.push(액션.payload);
      return copy;
    } else if (액션.type === "수량증가") {
      let copy = [...state];
      copy[0].quan += 1;
      return copy;
    } else if(액션.type === "수량감소") {
      let copy = [...state];
      copy[0].quan = copy[0].quan < 1 ? copy[0].quan : copy[0].quan - 1;
      return copy;
    } else {
      return state;
    }
  }
export function reducer3(state = alert초기값, 액션) {
    if (액션.type === "ui닫기") {
      return false;
    }
    return state;
}
