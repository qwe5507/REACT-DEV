let alert초기값 = true;

let 기본state = [
  // { id: 0, name: "멋진신발", quan: 2,},
  // { id: 1, name: "멋진신발2", quan: 1,},
];

export function reducer(state = 기본state, 액션) {
  let id = 액션.상품번호;
    if (액션.type === "항목추가") {
      let 찾은인덱스 = state?.findIndex(item => item.id === 액션.payload.id);
      if (찾은인덱스 >= 0) {
        let copy = [...state];
        copy[찾은인덱스].quan++;
        return copy;
      } else {
        let copy = [...state];
        copy.push(액션.payload);
        return copy;
      }

    } else if (액션.type === "수량증가") {
      let copy = [...state];
      copy[id].quan += 1;
      return copy;

    } else if(액션.type === "수량감소") {
      let copy = [...state];
      copy[id].quan = copy[id].quan < 1 ? copy[id].quan : copy[id].quan - 1;
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
