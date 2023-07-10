function Age({ yearOfBirth }) {
  let bornYear = yearOfBirth;
  function idade() {
    let ano = new Date();
    let meuAno = ano.getFullYear();
    let minhaIdade = meuAno - bornYear;
    return minhaIdade;
  }

  return (
    <div>
      <p>{idade()} anos</p>
    </div>
  );
}
export default Age;
