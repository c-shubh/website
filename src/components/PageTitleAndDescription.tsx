interface Props {
  title?: string;
  description?: string;
}

export function PageTitleAndDescription(props: Props) {
  return (
    <>
      {typeof props.title === "string" && (
        <h1 className="mt-0">{props.title}</h1>
      )}
      {typeof props.description === "string" && <p>{props.description}</p>}
    </>
  );
}
