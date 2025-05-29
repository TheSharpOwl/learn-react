import { getImageUrl } from './utils.js';

function Profile({name, imageCode, profession, awardsCount, didWhat, discovered}) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageCode)}
        alt={name}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awardsCount} </b>
          {didWhat}
        </li>
        <li>
          <b>Discovered: </b>
          {discovered}
        </li>
      </ul>
    </section>
  );
}
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name={"Maria Skłodowska-Curie"}
        imageCode={"szV5sdG"}
        profession={"physicist and chemist"}
        awardsCount={4}
        didWhat={
          "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"
        }
        discovered={"polonium (chemical element)"}
      />
      <Profile
        name={"Katsuko Saruhashi"}
        imageCode={"YfeOqp2"}
        profession={"geochemist"}
        awardsCount={2}
        didWhat={"Miyake Prize for geochemistry, Tanaka Prize"}
        discovered={"a method for measuring carbon dioxide in seawater"}
      />
    </div>
  );
}
