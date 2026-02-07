function Clip({ name, clipPath, onClick, searchTerm }) {
  let content = name;
  if (searchTerm) {
    const startIndex = name.toLowerCase().search(searchTerm.toLowerCase());
    if (startIndex !== -1) {
      const s1 = name.slice(0, startIndex);
      const s2 = name.slice(startIndex, startIndex + searchTerm.length);
      const s3 = name.slice(startIndex + searchTerm.length);
      console.log(s1, s2, s3);
      content = (
        <>
          {s1}
          <span className='text-red-700'>{s2}</span>
          {s3}
        </>
      );
    }
  }

  return (
    <div
      className='clip-wrapper drop-shadow-lg p-2 bg-gray-300 hover:shadow-lg hover:shadow-gray-600 cursor-pointer'
      onClick={() => onClick({ name, clipPath })}
    >
      <div>
        <p className='font-normal text-center m-2 text-md '>{content}</p>
      </div>
      <div
        className='clip w-12 h-12 bg-gray-800 m-auto '
        style={{ clipPath: `${clipPath}` }}
      ></div>
    </div>
  );
}

export default Clip;
