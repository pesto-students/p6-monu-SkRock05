function Button(props) {
  return (
    <button className={props.className} onClick={props.onclick}>
      {props.title}
    </button>
  );
}

export { Button };
