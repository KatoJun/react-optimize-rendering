import { GrandChildArea } from "./GrandChildArea";

// 親コンポーネントが再レンダリングされても、propsに変更がない限りChildAreaを再レンダリングしないようにするためのもの
import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "Khaki"
};

export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("ChildAreaがレンダリングされた");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>child component</p>
        </div>
      ) : null}
      <GrandChildArea />
    </>
  );
});
