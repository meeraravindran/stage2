import SideNav from "../Components/SideNav";
import Card from "../Components/Card";
import Post from "../Components/Post";
const Home = () => {
  const con =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  const con1 =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.";
  return (
    <div>
      <SideNav />
      <div id="main">
        <Card />
        <Post content={con} />
        <Post content={con1} />
      </div>
    </div>
  );
};

export default Home;
