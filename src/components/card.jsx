const CardUser = ( prop) => {
  console.log(prop);
  const {id ,  courseName , name , password , img } = prop;
  console.log(img);
  return (
    <div className=" flex justify-around w-full shadow-lg h-9 p-2 ">
      <p className=" text-[#1775ce] font-[ralway] font-semibold">{id}</p>
     <img className=" rounded"  src={img} alt="user img" />
      <p className=" text-[#1775ce] font-[ralway] font-semibold">{courseName}</p>
      <p className=" text-[#1775ce] font-[ralway] font-semibold">{name}</p>
      <p className=" text-[#1775ce] font-[ralway] font-semibold">{password}</p>
    </div>
  );
};
export default CardUser;
