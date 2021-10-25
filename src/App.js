// useCallback：処理が同じ場合は一度生成した関数を使い回すためのもの
import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // アロー関数は毎回新しい関数を生成しているとみなされるのでChilcAreaのpropsが変わったと判断される
  // それを回避するためにuseCallbackを使って度生成した関数を使い回す。
  // useCallbackはuseEffectと同様、引数に監視する変数を設定可能。空配列を設定すれば初回時のみ関数が生成される
  const onClickClose = useCallback(() => setOpen(false), []);

  // 変数のMemo化で再レンダリングのたびに毎回計算を行わないようにする
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
