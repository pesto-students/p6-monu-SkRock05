import { useEffect } from "react";

export function TaskCard(props) {
  useEffect(() => {}, [props.tasktitle]);

  return (
    <>
      <div className={props.className}>{props.tasktitle}</div>
    </>
  );
}
