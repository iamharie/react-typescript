interface name {
  name: string;
}

const CompOne: React.FC<name> = ({ name }) => {
  return <p>{name}</p>;
};
export default CompOne;
