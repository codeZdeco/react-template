import { useAppSelector } from "store";

function Introduction() {
  const data = useAppSelector((state) => state.auth.profile.information);

  return <div className='container mx-auto p-4'>hello {data?.fullname}</div>;
}

export default Introduction;
