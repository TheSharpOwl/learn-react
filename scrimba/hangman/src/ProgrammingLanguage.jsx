export default function ProgrammingLanguage(props) {
  return (
    <span
      className="programming-language"
      style={{ backgroundColor: props.backgroundColor, color: props.color }}
    >
      {props.name}
    </span>
  );
}
